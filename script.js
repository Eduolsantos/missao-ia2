const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Você terminou o ensino médio e agora precisa tomar uma decisão importante. Qual o seu próximo passo?",
    alternativas: [
      {
        texto: "Prestar vestibular para uma universidade pública.",
        afirmacao: "Você mergulha nos estudos e sente o peso da responsabilidade.",
      },
      {
        texto: "Começar a trabalhar para ajudar sua família.",
        afirmacao: "Você amadurece rápido e aprende o valor do esforço.",
      },
      {
        texto: "Abrir um pequeno negócio com um amigo.",
        afirmacao: "Empreender é arriscado, mas a liberdade te motiva.",
      },
      {
        texto: "Fazer um intercâmbio e descobrir o mundo.",
        afirmacao: "Você vive novas culturas e muda sua forma de ver a vida.",
      },
    ],
  },
  {
    enunciado:
      "Durante uma festa com amigos, um deles fala sobre abandonar tudo para viver da arte. Você pensa sobre seus próprios sonhos. Qual sua reação?",
    alternativas: [
      {
        texto: "Apoiar o amigo e também começar a seguir seus sonhos.",
        afirmacao: "Você sente que finalmente está sendo verdadeiro consigo mesmo.",
      },
      {
        texto: "Aconselhar o amigo a pensar bem antes de tomar decisões tão grandes.",
        afirmacao: "Você tenta equilibrar razão e emoção.",
      },
      {
        texto: "Ignorar o assunto. Isso não é problema seu.",
        afirmacao: "Você prefere evitar complicações, mas algo dentro te incomoda.",
      },
      {
        texto: "Ficar pensando por dias... e começa a duvidar das suas escolhas.",
        afirmacao: "Você percebe que talvez esteja vivendo a vida que os outros escolheram para você.",
      },
    ],
  },
  {
    enunciado:
      "Você recebe uma proposta: trabalhar em uma grande empresa com bom salário, mas pouco tempo livre. O que você faz?",
    alternativas: [
      {
        texto: "Aceita. Dinheiro agora é prioridade.",
        afirmacao: "Você se sente seguro financeiramente, mas o tempo parece escapar.",
      },
      {
        texto: "Recusa. Prefere um emprego com mais equilíbrio.",
        afirmacao: "Você valoriza sua saúde mental e sua liberdade.",
      },
      {
        texto: "Negocia um meio-termo com a empresa.",
        afirmacao: "Sua coragem de negociar mostra maturidade.",
      },
      {
        texto: "Aceita só por um tempo e planeja sair depois.",
        afirmacao: "Você vê isso como uma ponte para algo maior.",
      },
    ],
  },
  {
    enunciado:
      "Anos se passam. Um relacionamento amoroso entra em crise porque você está sempre ocupado. O que faz?",
    alternativas: [
      {
        texto: "Tenta reorganizar sua vida para passar mais tempo juntos.",
        afirmacao: "Você percebe que relações também precisam de cuidado.",
      },
      {
        texto: "Decide terminar. É melhor seguir caminhos diferentes.",
        afirmacao: "Você sente dor, mas entende que crescer é fazer escolhas difíceis.",
      },
      {
        texto: "Ignora o problema e finge que está tudo bem.",
        afirmacao: "A relação se desgasta cada vez mais, em silêncio.",
      },
      {
        texto: "Propõe uma pausa para repensarem juntos.",
        afirmacao: "Você dá espaço para ambos refletirem sem pressão.",
      },
    ],
  },
  {
    enunciado:
      "Agora com mais experiência, você olha para trás e pensa no que mais importa para seu futuro. Qual valor você escolhe carregar com você?",
    alternativas: [
      {
        texto: "Estabilidade: um emprego fixo, casa própria e rotina tranquila.",
        afirmacao: "Você constrói uma vida segura, e isso te traz paz.",
      },
      {
        texto: "Liberdade: mudar de cidade, conhecer o mundo, viver aventuras.",
        afirmacao: "Cada dia é diferente. Você coleciona histórias, não coisas.",
      },
      {
        texto: "Propósito: ajudar pessoas, causar impacto, deixar legado.",
        afirmacao: "Você transforma vidas e sente que faz parte de algo maior.",
      },
      {
        texto: "Equilíbrio: trabalhar, cuidar da mente, amar e ter tempo para si.",
        afirmacao: "Você encontra harmonia entre o fazer, o sentir e o viver.",
      },
    ],
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPergunta.textContent = perguntaAtual.enunciado;
  caixaAlternativa.textContent = "";
  mostrarAlternativas();
}

function mostrarAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativa.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostrarPergunta();
}

function mostraResultado() {
  caixaPergunta.textContent = "Gostou do seu futuro? Que tal tentar outro?";
  textoResultado.textContent = historiaFinal;
  caixaAlternativa.textContent = "";

  // Cria o botão de reiniciar
  const botaoReiniciar = document.createElement("button");
  botaoReiniciar.textContent = "Mudar o meu destino";
  botaoReiniciar.onclick = reiniciarQuiz;
  caixaAlternativa.appendChild(botaoReiniciar);
}

function reiniciarQuiz() {
  atual = 0;
  historiaFinal = "";
  textoResultado.textContent = "";
  mostrarPergunta();
}

const botaoIniciar = document.createElement("button");
botaoIniciar.textContent = "Iniciar";
botaoIniciar.className = "botao-iniciar";
botaoIniciar.onclick = iniciarQuiz;
caixaPrincipal.appendChild(botaoIniciar);

caixaPergunta.style.display = "none";
caixaAlternativa.style.display = "none";
textoResultado.style.display = "none";

function iniciarQuiz() {
  botaoIniciar.style.display = "none";
  caixaPergunta.style.display = "";
  caixaAlternativa.style.display = "";
  textoResultado.style.display = "";
  mostrarPergunta();
}
