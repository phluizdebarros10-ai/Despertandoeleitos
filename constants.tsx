
import { QuizQuestion } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Quando foi a última vez que você orou sem pedir nada em troca?",
    options: [
      { label: "Hoje ou ontem, Foi natural", value: "a" },
      { label: "Esta semana", value: "b" },
      { label: "Não lembro", value: "c" },
      { label: "Só quando tudo já está desmoronando", value: "d" }
    ]
  },
  {
    id: 2,
    question: "Quanto do seu dia você entrega para prazer, distração e dopamina barata?",
    options: [
      { label: "Menos de 30 minutos", value: "a" },
      { label: "1 a 2 horas", value: "b" },
      { label: "3 horas ou mais", value: "c" },
      { label: "Prefiro não medir", value: "d" }
    ]
  },
  {
    id: 3,
    question: "Quando você não ora e nem Lê a Bíblia, o que costuma dizer para si mesmo?",
    options: [
      { label: "Deus entende", value: "a" },
      { label: "Depois eu compenso", value: "b" },
      { label: "Eu ainda tenho fé e creio", value: "c" },
      { label: "Não é tão grave assim", value: "d" }
    ]
  },
  {
    id: 4,
    question: "O que você usa para justificar a falta de oração?",
    options: [
      { label: "Falta de tempo", value: "a" },
      { label: "Cansaço mental", value: "b" },
      { label: "Distrações constantes", value: "c" },
      { label: "Preguiça espiritual", value: "d" },
      { label: "Todas as anteriores", value: "e" }
    ]
  },
  {
    id: 5,
    question: "Sua Vida reflete o que você diz acreditar?",
    options: [
      { label: "Sim", value: "a" },
      { label: "Mais ou menos", value: "b" },
      { label: "Não", value: "c" },
      { label: "Nunca parei pra pensar", value: "d" }
    ]
  },
  {
    id: 6,
    question: "Se Deus observasse sua rotina HOJE (e está), Ele veria:",
    options: [
      { label: "Bons frutos", value: "a" },
      { label: "Tentativa e Esforço", value: "b" },
      { label: "Negligência", value: "c" },
      { label: "Decepção, Tristeza e Esquecimento total", value: "d" }
    ]
  },
  {
    id: 7,
    question: "Você sente culpa por não ter uma vida de oração e adoração a Deus constante?",
    options: [
      { label: "Não", value: "a" },
      { label: "Às vezes", value: "b" },
      { label: "Sim", value: "c" },
      { label: "Evito pensar nisso", value: "d" }
    ]
  },
  {
    id: 8,
    question: "Se existisse um método guiado de 7 minutos por dia sem esforço, sem desculpa, sem improviso você faria?",
    options: [
      { label: "Sim", value: "a" },
      { label: "Talvez, tentaria", value: "b" },
      { label: "Provavelmente não", value: "c" },
      { label: "Não quero mudar agora", value: "d" }
    ]
  }
];

export const FB_TESTIMONIALS = [
  {
    name: "Adriana Silva",
    text: "Caraaaa eu to em choque, FUNCIONA MUUUUITO. Eu sempre dizia que estava cansado demais para orar, ler a bíblia e estar proximo do criador. Mas nunca estava cansado demais para o celular, séries e prazer. esse metódo não passou a mão na minha cabeça. Só me fez parar e ajudou muito Deus nos abencoe",
    likes: 342,
    time: "12 min",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Maria Oliveira",
    text: "resolvi tomar vergonha na cara e não aguentava mais continuar vivendo assim e comprei o metodo..esta melhorando muito meu relacionamento com cristo, gratidao",
    likes: 512,
    time: "45 min",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Fernanda Santos",
    text: "funcionou para mim, gostei muito obrigado, mas não foi facil",
    likes: 189,
    time: "2 h",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Claudia Regina",
    text: "Deus nos abençoe!! viva cristo rei, me ajudou muito",
    likes: 867,
    time: "3 h",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Patricia Souza",
    text: "Pela primeira vez consegui manter uma rotina de oração sem me sentir pressionada ou culpada.",
    likes: 245,
    time: "5 h",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Pedro Fonseca",
    text: "Testei a estrutura de 5 minutos hoje cedo com minha esposa, finalmente senti que nossa casa teve paz de verdade depois de meses de brigas e desorganização espiritual...",
    likes: 291,
    time: "6 h",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Claudir Ascari",
    text: "Depois das aulas descobri que estava orando de forma errada, antes eu passava 30 minutos repetindo palavras e não sentia nada, agora com menos de 5 minutos sinto a presença de Deus real.",
    likes: 770,
    time: "8 h",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "José Claudimir",
    text: "Gostei das aulas, o mentor vai direto ao ponto e mostra na prática como organizar a mente para não travar na hora de falar com o Pai.",
    likes: 2092,
    time: "10 h",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Pedro Spinoza",
    text: "Tenho 63 anos e minha fé sempre foi instável, sempre tive medo de morrer sem ter intimidade com Deus, mas depois dessas aulas parece que minha mente abriu e finalmente entendi como orar.",
    likes: 1020,
    time: "1 d",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Wagner Freitas",
    text: "As aulas são tão profundas que você sente vontade de orar a cada segundo, a estrutura tira todo o peso do improviso.",
    likes: 2801,
    time: "2 d",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150&h=150"
  }
];
