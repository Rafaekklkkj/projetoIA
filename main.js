const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você vai comprar um novo notebook. Prefere priorizar leveza e portabilidade ou potência máxima?",
        alternativas: [
            {
                texto: "Leveza – quero praticidade para levar em qualquer lugar.",
                afirmacao: "Optou por um notebook fino e portátil, perfeito para o dia a dia."
            },
            {
                texto: "Potência – quero alto desempenho para qualquer tarefa.",
                afirmacao: "Escolheu uma máquina robusta capaz de rodar programas pesados sem esforço."
            }
        ]
    },
    {
        enunciado: "Ao usar redes sociais, você prefere interagir mais com amigos próximos ou acompanhar conteúdos de criadores?",
        alternativas: [
            {
                texto: "Amigos próximos – gosto de manter vínculos pessoais.",
                afirmacao: "Fortaleceu amizades e manteve contato frequente com pessoas queridas."
            },
            {
                texto: "Criadores – gosto de consumir conteúdos variados.",
                afirmacao: "Acompanhou novidades, aprendeu e se inspirou com diferentes criadores."
            }
        ]
    },
    {
        enunciado: "Você está escolhendo uma assinatura digital. Prefere serviços de música ou de filmes e séries?",
        alternativas: [
            {
                texto: "Música – quero trilhas sonoras para meu dia.",
                afirmacao: "Suas playlists acompanharam sua rotina e criaram momentos únicos."
            },
            {
                texto: "Filmes e séries – quero boas histórias e entretenimento.",
                afirmacao: "Maratonou produções incríveis que renderam ótimas conversas."
            }
        ]
    },
    {
        enunciado: "Você decide melhorar sua segurança digital. Prefere usar autenticação em dois fatores ou um gerenciador de senhas?",
        alternativas: [
            {
                texto: "Autenticação em dois fatores – quero mais camadas de segurança.",
                afirmacao: "Sua conta ficou protegida contra acessos não autorizados."
            },
            {
                texto: "Gerenciador de senhas – quero praticidade sem esquecer senhas.",
                afirmacao: "Armazenou tudo com segurança e nunca mais perdeu o acesso às suas contas."
            }
        ]
    },
    {
        enunciado: "Na hora do lazer online, você prefere jogar com amigos ou explorar jogos sozinho?",
        alternativas: [
            {
                texto: "Com amigos – gosto da diversão em grupo.",
                afirmacao: "Teve experiências colaborativas e muitas risadas em partidas online."
            },
            {
                texto: "Sozinho – gosto da imersão individual.",
                afirmacao: "Explorou mundos digitais com foco total na sua própria aventura."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botao);
    }
}

function respostaSelecionada(opcao) {
    historiaFinal += opcao.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada digital foi assim...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
