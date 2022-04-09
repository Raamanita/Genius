let order = [];
let clickedOrder = [];
let score = 0;    

//0 - azul
//1 - laranja
//2 - pink
//3 - verde

const blue = document.querySelector('.blue');
const orange = document.querySelector('.orange');
const pink = document.querySelector('.pink');
const green = document.querySelector('.green');


//cria ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nYOU WIN! STARTING NEXT LEVEL!`);
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return blue;
    } else if(color == 1) {
        return orange;
    } else if (color == 2) {
        return pink;
    } else if (color == 3) {
        return green;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\n YOU LOSE!\n CLICK OK TO START A NEW GAME.`);
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('WELCOME TO GENIUS! STARTING GAME!');
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
blue.onclick = () => click(0);
orange.onclick = () => click(1);
pink.onclick = () => click(2);
green.onclick = () => click(3);


//inicio do jogo
playGame(); 