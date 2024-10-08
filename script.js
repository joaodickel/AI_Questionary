const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se depara co uma IA que consegue prever p futuro, após alguns testes e um estudo sobre vem a certeza que isso é verdade, porem só em um periodo maximo de 1 ano na frente. Como você se sente sobre?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "você logo percebeu o perigo que isso pode vir a causar para a segurança internacional, com problemas que podem ser previstos assim como ações da policia, e você teve medo disso "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você achou bem legal e começou a usar para estudar, para não ser pego desprevinido no trabalho entre tanta outras coisas que você se maravilhou."
            }
        ]
    },
    {
        enunciado: "Uma grande massa da oppulação não acredita que isso é verdade, e acha que todos estão se moldando para algo que ''preve o futuro'' e acabam se moldando para viver cm base nisso. Você não tem certeza se isso realmente acontece com você e outros, más você chega a conclusão que:",
        alternativas: [
            {
                texto: "Acredito que a IA funcione totalmente em erros e falhas e uso ela sómente para me adaptar",
                afirmacao: "Você acabou sendo meio cegado pela IA, acredita nela sem fundamentos e em algumas variaçoes minimas delas cai por chão todos os seus planos para aquele ano"
            },
            {
                texto: "Você se sente meio enganado e acaba percebendo que está realmente se adaptando para que o que a IA te disse venha a acontecer",
                afirmacao: "Você parou de acreditar na IA e percebeu que ela tem erros grotescos de previsão, já que a sua capacidade só chrga em cerca de 75% da realidade, e isso muitas vezes preve coisas que nem vão acontecer."
            }
        ]
    },
    {
        enunciado: "A IA preve um futuro virus que acabara com toda o população, más não sabebe dizer como, a porcentagem de 75% de certeza dela vem a tona e ninguem assim como você não sabe se acredita ou não, porem após pensar um pouco você decide:",
        alternativas: [
            {
                texto: "Você acredita na IA",
                afirmacao: "Você acabou acreditando quase cegamente na IA quando ela falou da pandemia, pegou previsões más cabou que a Ia previu a volta de uma doença antiga, como a peste negra, más que já havia sido encontrado a cura e teve pouquissimas mortes, porem você gastou muitas da suas economias e por conta do medo de todo o globo estavamos em meio a uma crise"
            },
            {
                texto: "Você não acredita totalmente na IA",
                afirmacao: "Você não acreditou nela quando ela falou da pandemia, e quando voltou uma doença antiga acabou se assustando quando viu que a contraiu para você, por mias que a humanidade já tivesse uma cura para ela você acabou ficando com algums graves sequelas igual uma pequena parte da população que a contraiu, más pelo menos não esta com aqueles mortos."
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
    caixaPerguntas.textContent = "Em 2077...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
