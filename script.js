const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está caminhando por um parque e vê uma pessoa jogando uma garrafa plástica no chão. O que você pensa na hora?",
        alternativas: [
            {
                texto: "Isso é revoltante!",
                afirmacao: "Se sentiu incomodado e pensou em alertar a pessoa sobre o impacto disso no meio ambiente."
            },
            {
                texto: "Talvez ela não tenha percebido",
                afirmacao: "Preferiu acreditar que foi um descuido e pensou em jogar no lixo você mesmo."
            }
        ]
    },
    {
        enunciado: "Ao fazer compras no supermercado, te oferecem sacolas plásticas. O que você faz?",
        alternativas: [
            {
                texto: "Recuso, levo minhas ecobags!",
                afirmacao: "Já se acostumou a evitar plástico sempre que pode."
            },
            {
                texto: "Aceito, é mais prático",
                afirmacao: "Pensa que pequenas ações não fazem tanta diferença assim."
            }
        ]
    },
    {
        enunciado: "Você lê uma notícia dizendo que a temperatura do planeta está subindo mais rápido que o previsto. Qual sua reação?",
        alternativas: [
            {
                texto: "Preciso mudar meus hábitos agora",
                afirmacao: "Refletiu sobre como seu estilo de vida pode estar contribuindo para isso."
            },
            {
                texto: "É um problema dos governos",
                afirmacao: "Acredita que as grandes mudanças dependem das autoridades, não do indivíduo."
            }
        ]
    },
    {
        enunciado: "Você vê nas redes sociais uma receita de produto de limpeza caseiro, feito com ingredientes naturais. O que pensa?",
        alternativas: [
            {
                texto: "Interessante, vou testar!",
                afirmacao: "Gosta de alternativas sustentáveis e quer reduzir produtos químicos em casa."
            },
            {
                texto: "Duvido que funcione",
                afirmacao: "Acha que essas ideias são exageradas e prefere os produtos tradicionais."
            }
        ]
    },
    {
        enunciado: "Está chovendo forte há dias e ruas estão alagadas. Um parente diz que isso é culpa da mudança climática. Como você reage?",
        alternativas: [
            {
                texto: "Faz sentido, o clima está mesmo estranho",
                afirmacao: "Já notou mudanças no tempo e se preocupa com os impactos."
            },
            {
                texto: "Sempre choveu assim, é normal",
                afirmacao: "Acha que essas variações sempre existiram e não vê motivo para alarde."
            }
        ]
    },
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2050...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
