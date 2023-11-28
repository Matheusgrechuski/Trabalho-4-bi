class campoMinado{
    constructor(){
        //Aqui estamos trabalhando com variaveis Globais 
      this.board = new Board();
      this.bombs = 10; // Qauntidade de bomba
      this.createCells(); // Cria as celulas
      this.loadBombs(); // Carrega as bombas
      this.loadNears(); // Carrega quantas bombas tem na vizinhança = Nears
    }
    click(x , y){
     // console.log({
       // x,
       // y
      //})
      //esse bloco serve para que clique somente no meio do quadrado caso contrario nao aparecera nada
      if (x < this.board.margin || x > this.board.margin + this.board.clientWidth) return;//x for meor que a margin ou maior que a margin nao me interresa dai sai da função
      if (y < this.board.margin || y > this.board.margin + this.board.clientHeight) return;
      let w = this.board.clientWidth / this.board.size;
      let h = this.board.clientHeight / this.board.size;
      let cx = Math.trunc((x - this.board.margin) / w);
      let cy = Math.trunc((y - this.board.margin) / h);
      if(cx < 0 || cy < 0 || cx >= this.size || cy >= this.size) return;
      let c = this.cells[cy][cx];
      //c.open = true;
      this.openCell(c, true);
    }
    //Abre os visinhos que não tem bombas
      openCell(cell, explode){
        if(cell.open) return;
        if(cell.bomb && ! explode) return;
        cell.open = true;
        if(cell.bomb) return;
        if(cell.bombs == 0) {
           cell.nears.forEach(nc => {
            this.openCell(nc, false);
          })
        }

      }
      //Gera a quantidade de visinhos que cada celula tem
    loadNears(){
      this.cells.forEach((line) => { //vai na celula e conta todas as linhas 
          line.forEach((cell) => { // vai nas linhas e conta todas as celulas
            cell.nears = []; // nears vaziu
            cell.bombs = 0; // indica quantas bombas estao por perto
            for(let dx = -1; dx <= 1; dx++) { // dx diferença de x : vou contar dx de -1 que é a posiçao dela -1 em x 
              for(let dy = -1; dy <= 1; dy++) { // dy deferença de y : vou contar dy de -1 que é a posiçao dela -1 em y 
                if(dx != 0 || dy != 0) { // se dx nao for igual a 0 OU dy nao for igual a 0 se qualquer um dos dois for diferente de zero eu posso contar 
                  let x = cell.x + dx; // pega o x da celula e soma com a diferença 
                  let y = cell.y + dy; 
                  if(x >= 0 && x < this.board.size && y >= 0 && y < this.board.size) { // verifica a posiçao e maior ou igual a zero e menor que size
                    let c = this.cells[y][x]; //na posicao na linha y celula x
                    cell.nears.push(c); //é colocado em nears 
                    cell.bombs += c.bomb; //somo o numero de bombas as celulas
                  }
                }
              }
            }
          });
      });
    }


    //Esse bloco faz o sorteio das bombas no tabuleiro 
    loadBombs()
    {
      let i = 0;
      while (i < this.bombs)
      {
        let x = Math.floor(Math.random(this.bombs) * this.board.size); // Gera um lugar aleatorio para as bombas de 0 a 9
        let y = Math.floor(Math.random(this.bombs) * this.board.size);
        if(this.cells[y][x].bomb == 0) // esse if serve para que ele caranta as 10 bombas
        {
        this.cells[y][x].bomb = 1;
        i++;
        }
      }
    }
    //Esse bloco cria as celulas
  createCells() 
  {
    this.cells = []; // cells = celulas 
    for (let y = 0; y < this.board.size; y++) // Aqui estamos fazendo o contador de Linhas e vamos chamalo de y que vai de 0 a 9
    {
      let line = []; //Aqui vamos criar as linhas e colunas que valos colocar dentro das celulas = cells
      this.cells.push(line); //push vai criar dentro da variave uma nova linha 
      for (let x = 0; x < this.board.size; x++) // Aqui estamos fazendo o contador de Colunas e vamos chamalo de x que vai de 0 a 9
      {
        let cell = new Cell(x, y, this.board); //Aqui estou rezervando uma quantidade de memoria para o objeto cells
        line.push(cell);
      }
    }
  }

    update()
    {

    }
    render() { 
        //render vai desenhar o jogo
        this.board.render();//aqui o tabuleiro vai se desenhar,borda Vermelha 
        this.cells.forEach(line => {
          line.forEach(cell => {
            cell.render();
          })
        })
    }
}