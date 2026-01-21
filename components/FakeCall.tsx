
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Modality, LiveServerMessage } from '@google/genai';

interface FakeCallProps {
  onComplete: () => void;
}

const FakeCall: React.FC<FakeCallProps> = ({ onComplete }) => {
  const [callState, setCallState] = useState<'ringing' | 'connected' | 'ended'>('ringing');
  const [timer, setTimer] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const sessionRef = useRef<any>(null);

  // Audio Utilities
  function decode(base64: string) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  }

  const startCall = async () => {
    setCallState('connected');
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    // Script exato adaptado do usuário para a performance da IA
    const systemInstruction = `
      Você é 'Satanás', o acusador. Sua voz deve ser grave, fria, calma e manipuladora. 
      Sua performance deve ser "mais verdade do que teatro", sem exageros, apenas uma frieza cortante.
      Siga exatamente este roteiro e respeite as pausas indicadas para manter o lead preso na ligação.

      ROTEIRO:
      'Atende… Eu sei que você ouviu. (pausa curta) Fica tranquilo, eu não preciso correr. Você sempre acaba cedendo. 
      Você sempre tem tempo. Tempo pra distração, tempo pro prazer, tempo pra fugir da própria cabeça. 
      Mas quando é oração… você trava. E eu adoro isso. Você diz que acredita? Afinal, os demônios também acreditam e creem… 
      então do que adianta se acreditar, meu caro? Você não executa e nem deve ser temente a seguir aquilo que acredita. 
      Diz que vai orar depois e o depois… nunca chega. Enquanto isso eu não faço nada. Você mesmo se sabota. 
      Você sabe o que mais me ajuda? O improviso. Quando você senta pra orar sem saber o que fazer. 
      Quando a mente foge, quando vem a vergonha, quando você se compara. Aí você levanta e volta pro prazer. 
      Você acha mesmo que eu preciso te atacar? Não. Mente sem governo se destrói sozinha. 
      Enquanto você negocia com a vontade, eu ganho tempo. Enquanto você confunde emoção com fé, eu fico em silêncio. 
      O caos faz o trabalho por mim. (pausa longa — respiração) Mas escuta bem agora… 
      Se você continuar aqui, se você encarar o que vem a seguir… isso começa a mudar. Estrutura é perigosa pra mim. 
      Então faz o que você sempre faz: fecha isso, adia, diz que vê depois… ou assume o controle. 
      A decisão é sua. Eu só aproveito quando você não decide.'

      Ao finalizar, pare de falar completamente. A ligação deve durar entre 70 e 90 segundos.
    `;

    try {
      const session = await ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Charon' } } 
          },
          systemInstruction,
        },
        callbacks: {
          onopen: () => {
            console.log('Spiritual confrontation started.');
          },
          onmessage: async (message: LiveServerMessage) => {
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio && audioContextRef.current) {
              const ctx = audioContextRef.current;
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
              const audioBuffer = await decodeAudioData(decode(base64Audio), ctx, 24000, 1);
              const source = ctx.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(ctx.destination);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(source);
              source.onended = () => {
                sourcesRef.current.delete(source);
              };
            }
          },
          onclose: () => console.log('Session closed.'),
          onerror: (e) => console.error('Call API error', e),
        }
      });
      sessionRef.current = session;
    } catch (err) {
      console.error("Failed to connect to Live API", err);
      // Fallback transition
      setTimeout(() => setCallState('ended'), 3000);
    }
  };

  const endCall = () => {
    if (sessionRef.current) sessionRef.current.close();
    sourcesRef.current.forEach(s => {
      try { s.stop(); } catch(e) {}
    });
    setCallState('ended');
  };

  useEffect(() => {
    let interval: any;
    if (callState === 'connected') {
      interval = setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [callState]);

  // Fail-safe to end call if session hangs
  useEffect(() => {
    if (timer > 100 && callState === 'connected') endCall();
  }, [timer]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (callState === 'ended') {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-6 py-12 font-sans animate-fade-in">
        <div className="max-w-md w-full text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-red-600 leading-tight">
              Essa chamada não é coincidência.
            </h2>
            <p className="text-gray-400 text-lg">
              Ela descreveu exatamente o seu padrão.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4">
            <p className="text-white font-medium text-lg leading-relaxed">
              Agora descubra por que você trava <br/>
              <span className="text-[#B8860B]">e como isso começa a mudar.</span>
            </p>
          </div>

          <div className="space-y-6">
            <button 
              onClick={onComplete}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-8 rounded-2xl transition-all shadow-[0_10px_40px_rgba(220,38,38,0.25)] uppercase tracking-widest text-sm active:scale-95"
            >
              Fazer o diagnóstico agora
            </button>
            <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.3em]">
              Leva menos de 2 minutos. E pode mudar tudo.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-between py-20 px-6 font-sans overflow-hidden">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="w-12 h-12 bg-red-900/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-900/20">
           <svg width="20" height="28" viewBox="0 0 24 32" fill="none" className="text-red-700">
            <path d="M12 4V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M7 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <p className="text-red-700 font-bold text-[10px] uppercase tracking-[0.5em] mb-2">Chamada Desconhecida</p>
        <h2 className="text-3xl font-serif font-bold tracking-tight">Número Privado</h2>
        <p className={`text-gray-500 text-sm ${callState === 'ringing' ? 'animate-pulse' : ''}`}>
          {callState === 'ringing' ? 'Recebendo chamada...' : formatTime(timer)}
        </p>
      </div>

      {/* Visual Indicator */}
      <div className="relative">
        <div className={`w-56 h-56 rounded-full bg-gradient-to-b from-red-950/20 to-black border border-red-900/10 flex items-center justify-center transition-all duration-1000 ${callState === 'connected' ? 'scale-105 shadow-[0_0_120px_rgba(139,26,26,0.15)]' : ''}`}>
           <div className={`w-40 h-40 rounded-full border border-red-900/5 flex items-center justify-center ${callState === 'connected' ? 'animate-pulse' : ''}`}>
             <div className="w-20 h-20 rounded-full bg-red-900/5 flex items-center justify-center">
                <div className={`w-3 h-3 bg-red-800 rounded-full ${callState === 'ringing' ? 'animate-ping' : ''}`}></div>
             </div>
           </div>
        </div>
      </div>

      {/* Call Buttons */}
      <div className="w-full max-w-xs">
        {callState === 'ringing' ? (
          <div className="flex justify-around items-center px-4">
            <button onClick={onComplete} className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 bg-gray-900/50 border border-white/5 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                 <svg className="w-8 h-8 text-white rotate-[135deg]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Recusar</span>
            </button>
            <button onClick={startCall} className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 animate-bounce shadow-[0_0_30px_rgba(22,163,74,0.3)]">
                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-green-500">Atender</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-12">
            <div className="grid grid-cols-3 gap-10 opacity-20">
               {[1,2,3,4,5,6].map(i => <div key={i} className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-[10px]">●</div>)}
            </div>
            <button onClick={endCall} className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-all rotate-[135deg] shadow-[0_0_30px_rgba(220,38,38,0.3)]">
               <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="absolute bottom-10 text-[10px] text-gray-800 font-bold uppercase tracking-[0.4em]">
        Conexão Criptografada via Live API
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FakeCall;
