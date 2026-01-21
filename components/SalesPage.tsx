
import React, { useState } from 'react';
import { FB_TESTIMONIALS } from '../constants.tsx';

const SalesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const checkoutUrl = "https://pay.lowify.com.br/checkout?product_id=gLqdRx";

  const handleCheckout = () => {
    window.location.href = checkoutUrl;
  };

  const faqData = [
    { 
      q: "Isso é para mim mesmo se eu estiver muito distante de Deus?", 
      a: "Principalmente se estiver distante. Esse método não exige preparo espiritual. Ele foi feito para recomeços imperfeitos." 
    },
    { 
      q: "E se eu não sentir nada nos primeiros dias?", 
      a: "Perfeito. Sentimento vem depois da constância. Aqui você cria o hábito primeiro a profundidade vem como consequência." 
    },
    { 
      q: "7 minutos não é pouco demais?", 
      a: "Pouco tempo é o que você realmente faz. Muito tempo vira desculpa. Constância vence intensidade toda vez." 
    },
    { 
      q: "Preciso ter experiência com oração?", 
      a: "Não. Você não precisa saber o que dizer, nem como começar. A estrutura já está pronta. Você só segue." 
    },
    { 
      q: "Isso serve para qualquer pessoa?", 
      a: "Serve para quem: Acredita em Deus, Quer constância, Está cansado de falhar sozinho. Não serve para quem prefere continuar adiando." 
    },
    { 
      q: "Vou precisar mudar minha rotina inteira?", 
      a: "Não. O método foi criado para caber na sua vida, não para competir com ela." 
    },
    { 
      q: "E se eu comprar e não usar?", 
      a: "Essa é a diferença. Isso é simples o suficiente para não ser negociado. Quando algo cabe no seu dia, ele acontece." 
    },
    { 
      q: "Por que custa tão pouco?", 
      a: "Porque o objetivo não é elitizar. É permitir que mais pessoas tenham acesso, manter o projeto ativo e ajudar quem precisa. O valor é simbólico. O impacto, não." 
    },
    { 
      q: "Quando eu recebo acesso?", 
      a: "Imediatamente após a confirmação do pagamento. Sem espera. Sem burocracia." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-gray-100 font-sans selection:bg-[#8B1A1A]/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-12 px-6 text-center max-w-4xl mx-auto">
        <div className="flex justify-center text-[#B8860B] opacity-80 mb-10">
          <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M7 11H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
          Você pode voltar a se conectar com Deus e seguindo o Hábito de Oração diária com apenas poucos minutos por dia
        </h1>
        
        <p className="text-xl text-red-600 font-bold max-w-2xl mx-auto mb-10 leading-relaxed italic">
          ou continuar vivendo para Satanás e ir para o Lago de Fogo, a escolha é sua...
        </p>

        <div className="max-w-2xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(139,26,26,0.2)] border border-white/5">
          <img 
            src="https://i.ibb.co/9kLYLD86/edcfb7dd66afe8d0bf6c9ee9d0a28865.jpg" 
            alt="Protocolo Despertando Eleitos" 
            className="w-full h-auto block"
            width="800"
            height="450"
          />
        </div>

        <div className="flex flex-col items-center gap-6">
          <p className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-widest">
            Descubra como começar de forma simples, prática e sem esforço.
          </p>
          
          <button 
            onClick={() => document.getElementById('protocolo')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full max-w-md bg-red-600 hover:bg-red-700 text-white font-black py-6 px-10 rounded-2xl transition-all shadow-2xl shadow-red-900/20 uppercase tracking-[0.1em] text-lg active:scale-95 animate-pulse-subtle"
          >
            Quero Aprender Como Começar
          </button>
        </div>
      </section>

      {/* 2. PROVA SOCIAL SECTION */}
      <section className="py-12 px-4 bg-[#f0f2f5] text-[#1c1e21] font-sans overflow-hidden select-none border-y border-gray-200">
        <div className="max-w-3xl mx-auto pointer-events-none text-center">
          <h2 className="text-center text-lg md:text-xl font-serif font-bold mb-10 text-[#121212] px-4 leading-tight pointer-events-auto">
            Antes de seguir, Veja o que pessoas comuns sentiram quando começaram com apenas alguns minutos por dia
          </h2>
          
          <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-left">
            {FB_TESTIMONIALS.slice(0, 8).map((t, i) => (
              <div key={i} className="flex gap-3 animate-fade-in-up">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 flex-shrink-0 border border-black/5 overflow-hidden">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="bg-[#f0f2f5] px-4 py-2.5 rounded-[18px] inline-block max-w-full">
                    <p className="text-[#385898] font-bold text-[13px] md:text-sm mb-0.5">{t.name}</p>
                    <p className="text-[13px] md:text-sm leading-[1.3] text-[#1c1e21]">{t.text}</p>
                  </div>
                  <div className="flex items-center gap-3 text-[12px] font-bold text-[#4b4f56] px-2 mt-1">
                    <span>Curtir</span><span>·</span><span>Responder</span><span>·</span>
                    <div className="flex items-center gap-1">
                      <div className="bg-[#1877f2] w-4 h-4 rounded-full flex items-center justify-center">
                         <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M2.5 12a1 1 0 011-1h2a1 1 0 011 1v7a1 1 0 01-1 1h-2a1 1 0 01-1-1v-7zm7.5-3a2.5 2.5 0 012.5-2.5 4.1 4.1 0 011.6.4c1.1.5 2.1 1.6 3 2.6l.4.5a30.8 30.8 0 014.2 6.5.9.9 0 01-1.3 1l-2.7-1a4 4 0 00-4 1.2v.3a3 3 0 01-3 3H10a3 3 0 01-3-3V9.5a.5.5 0 01.5-.5h2.5z"/></svg>
                      </div>
                      <span className="font-normal">{t.likes}</span>
                    </div>
                    <span>·</span><span className="font-normal text-gray-400">{t.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONFRONTO SECTION */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-black text-white">Vamos parar de fingir.</h2>
            <p className="text-xl md:text-2xl text-red-600 font-bold uppercase tracking-tight">Você não está sem tempo. Você está sem prioridade.</p>
          </div>

          <div className="space-y-8">
            <p className="text-lg md:text-xl text-gray-400">Todo dia você:</p>
            <div className="space-y-4 text-xl md:text-2xl font-bold text-gray-200">
              <p>Acorda e pega o celular</p>
              <p>Alimenta distração</p>
              <p>Alimenta prazer</p>
              <p>Alimenta cansaço</p>
            </div>
            <p className="text-xl font-serif italic text-[#B8860B]">E chama isso de vida corrida.</p>
          </div>

          <div className="bg-red-950/20 border-t border-b border-red-700/30 py-12 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              Mas quando se trata de Deus, sempre fica para depois. <br/>
              Você diz que acredita. Mas sua rotina diz outra coisa.
            </p>
            <p className="text-lg text-gray-400 uppercase tracking-widest text-sm">
              A fé virou pensamento. A oração virou puro interesse. E Deus virou plano B.
            </p>
            <p className="text-2xl font-black text-white uppercase tracking-tighter">Isso corrói por dentro.</p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-serif font-bold text-[#B8860B]">Você sente:</h3>
            <div className="space-y-4 max-w-md mx-auto">
              {["Culpa silenciosa", "Distância difícil de explicar", "Um vazio que não some com descanso", "A sensação de que algo está fora do lugar"].map((point, i) => (
                <div key={i} className="bg-[#1a1a1a] p-5 rounded-xl border border-white/5 font-medium text-gray-300 uppercase text-xs tracking-widest">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10 py-10">
            <p className="text-xl text-gray-400">E mesmo assim continua adiando. <br/> Porque ninguém te falou a verdade:</p>
            <p className="text-3xl md:text-4xl font-serif font-black text-white leading-tight underline decoration-red-900/40">
              Sem constância, fé apodrece devagar.
            </p>
            <div className="space-y-4 text-gray-500 font-medium uppercase tracking-[0.3em] text-xs">
              <p>Não explode. Não faz barulho. Só esfria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROTOCOLO SECTION */}
      <section id="protocolo" className="py-24 bg-[#0a0a0a] px-6 border-y border-white/5 text-center">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-white uppercase leading-tight">
              Apresentando o <br/> <span className="text-[#B8860B]">Protocolo Despertando Eleitos</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Um ritual diário, simples e guiado, criado para pessoas que:
            </p>
            <div className="flex flex-col gap-4 text-xl font-bold text-gray-200">
              <p>Vivem cansadas</p>
              <p>Vivem distraídas</p>
              <p>Vivem dizendo amanhã</p>
            </div>
            <p className="text-[#B8860B] font-serif italic text-lg">
              E mesmo assim querem voltar a caminhar com Deus sem peso religioso.
            </p>
          </div>

          <div className="space-y-10 py-12">
            <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-widest">O contraste que importa</h3>
            <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
              <div className="space-y-4">
                <p className="text-red-700 font-black uppercase text-xs tracking-widest">Sem método</p>
                <div className="text-gray-500 space-y-2">
                  <p>Você continua tentando</p>
                  <p>Continua falhando</p>
                  <p>Continua adiando</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-green-600 font-black uppercase text-xs tracking-widest">Com estrutura</p>
                <div className="text-white font-bold space-y-2">
                  <p>Você faz</p>
                  <p>Mesmo sem vontade</p>
                  <p>Mesmo cansado</p>
                  <p>Mesmo ocupado</p>
                </div>
              </div>
            </div>
            <p className="text-[#B8860B] font-serif italic text-lg mb-10">É assim que a constância nasce. Não do ideal. Do possível.</p>
            
            <div className="bg-[#1a1a1a] p-12 rounded-[40px] border border-[#B8860B]/20 space-y-10 mt-12 shadow-2xl">
                <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-widest">O que você está realmente adquirindo</h3>
                <div className="space-y-4 text-lg text-gray-300">
                <p>Um método simples e diário</p>
                <p>Um ponto de recomeço claro</p>
                <p>Uma estrutura impossível de negociar</p>
                <p>E contribui para algo maior que você</p>
                </div>
                
                <div className="pt-10 border-t border-white/5">
                <p className="text-gray-500 text-xs line-through mb-1">Acesso Completo: R$ 147,00</p>
                <p className="text-5xl font-black text-white mb-2">R$ 27,90</p>
                <p className="text-[10px] text-[#B8860B] font-black uppercase tracking-[0.4em]">Pagamento Único</p>
                </div>

                <button 
                onClick={handleCheckout}
                className="w-full max-w-md bg-red-600 hover:bg-red-700 text-white font-black py-7 px-10 rounded-2xl transition-all shadow-2xl shadow-red-900/30 uppercase tracking-[0.2em] text-lg active:scale-95"
                >
                Quero Começar Agora
                </button>
            </div>
          </div>

          <div className="py-12 border-t border-white/5 space-y-8">
            <h3 className="text-xl font-serif font-bold text-white uppercase tracking-widest">O valor arrecadado não é só pelo método.</h3>
            <p className="text-gray-400">Ele também é usado para:</p>
            <div className="space-y-4 text-gray-200 font-bold">
              <p>Manter este projeto ativo</p>
              <p>Sustentar a produção de novos conteúdos</p>
              <p>Ajudar crianças e pessoas em situação de necessidade</p>
            </div>
            <p className="text-gray-500 italic max-w-md mx-auto mb-10">
              Ou seja: ao cuidar da sua constância espiritual, você também ajuda esse projeto a continuar e outras pessoas a terem suporte real.
            </p>

            <div className="pt-10 flex flex-col items-center gap-6 animate-fade-in-up">
              <p className="text-xl md:text-2xl font-serif font-bold text-white max-w-lg mx-auto leading-tight">
                Transforme sua vida espiritual e impacte a de outros agora mesmo.
              </p>
              <button 
                onClick={handleCheckout}
                className="w-full max-w-md bg-red-600 hover:bg-red-700 text-white font-black py-6 px-10 rounded-2xl transition-all shadow-2xl shadow-red-900/40 uppercase tracking-[0.2em] text-lg active:scale-95"
              >
                Quero Começar Agora e Ajudar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-20 bg-[#0a0a0a] px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl mb-12 text-[#B8860B] uppercase tracking-widest">Dúvidas Frequentes</h2>
          <div className="space-y-4 max-w-xl mx-auto">
            {faqData.map((item, i) => (
              <div key={i} className="border-b border-white/5">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-[#B8860B] transition-colors"
                >
                  <span className="font-bold text-xs md:text-sm uppercase tracking-widest pr-4 leading-tight">{item.q}</span>
                  <span className={`transform transition-transform text-xl ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="pb-6 text-sm text-gray-400 leading-relaxed text-left">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center space-y-12 pb-12">
            <div className="space-y-6">
                <p className="text-2xl md:text-3xl font-serif font-bold text-white">
                    Você já tem informação suficiente. <br/>
                    <span className="text-[#B8860B]">Agora só falta decisão.</span>
                </p>
                <p className="text-lg text-gray-400 max-w-md mx-auto leading-relaxed italic">
                    Não é sobre fazer muito. <br/>
                    É sobre começar do jeito certo.
                </p>
            </div>
            
            <button 
                onClick={handleCheckout}
                className="w-full max-w-md bg-red-600 hover:bg-red-700 text-white font-black py-7 px-10 rounded-2xl transition-all shadow-2xl shadow-red-900/50 uppercase tracking-[0.2em] text-lg active:scale-95"
            >
                Quero Começar Agora por R$27,90
            </button>
            
            <p className="text-[10px] text-gray-700 uppercase tracking-[0.5em] font-black">
                Acesso Vitalício • Protocolo Digital
            </p>
        </div>
      </section>

      {/* 7. FOOTER SECTION */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto border-t border-white/5">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest">Pagamento único • Acesso imediato</p>
          <div className="flex gap-4 mt-2 grayscale opacity-30">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" loading="lazy" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="Mastercard" loading="lazy" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" className="h-4" alt="Pix" loading="lazy" />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-subtle {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-pulse-subtle { animation: pulse-subtle 3s infinite ease-in-out; }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
        .select-none { user-select: none; }
      `}</style>
    </div>
  );
};

export default SalesPage;
