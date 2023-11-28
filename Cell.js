class Cell 
{
    constructor(x, y, board)
    {
        this.x = x;//this serve para identificar que esta sendo quardado dentro do objeto o valor da vareavel
        this.y = y;       
        this.board = board;
        this.bomb = 0; // se for 0 nao tem bomba dentro da cell se for 1 tem bomba
        this.open =  false// true;
    }
    render()
    {
        stroke("blue");
        fill(50);
        strokeWeight(1);
        let w = this.board.clientWidth / this.board.size;
        let h = this.board.clientHeight / this.board.size;
        let px = this.x * w + this.board.margin;
        let py = this.y * h + this.board.margin;
        rect(px, py, w, h);
        if(this.open){
          fill(0);
          rect(px, py, w, h);
         // Esse bloco faz a bomba que aparece para o jogador 
         if(this.bomb == 1){
            noStroke();
            fill(255, 0, 0);  // cor vermelha 
            circle(px + w / 2, py + h / 2, w / 2); // posiçao e tamanho da bomba
          }else{
            if(this.bombs > 0){
           textSize(w); //determina o tamanho do texto que é a largura da clles que é w
           strokeWeight(2); // peso do stroke que é o contorno 
           fill('blue');// escrever em azul
           stroke('blue');
           text(this.bombs, px + w / 4, py + h * 0.9);
           //text(this.bombs, px + (w / 4), py + h * 0.9); // escreve o numero de bombas
            }
         
          }

        }    
    }
}