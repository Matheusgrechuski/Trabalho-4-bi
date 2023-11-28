let game;

//Setup faz uma breve lembrança do funcionamento da P5 a P5 se inicia chamando o comando setupaonde ela se prepara para começar a trabalhar
function setup() // setup serve para inicializar e definir as coisas que vão ser feitas apanas uma vez 
{   //windowWidth é o tamanho da *jalena* //windowHeight é a altura da *janela*
    createCanvas(windowWidth, windowHeight);
    game = new campoMinado(); // inicia o campo minado
}
//Em seguida entra um lup o que esta dento do comando draw 
  function draw() // draw = lup 
{
    game.update();//vai chamar o update
    game.render();//vai chamar o render
}

function mousePressed(){
 game.click(mouseX, mouseY);

}