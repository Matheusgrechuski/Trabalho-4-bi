class Board
{
    constructor()
    {
        this.size = 10;//O Quadro vai ser 10 lihas e 10 colunas
        this.margin = 6;
        let s = Math.min(width, height); //min recebe dois valores e ela retorna o menor 
        this.width = s;
        this.height = s;
        this.clientWidth = this.width - this.margin * 2;
        this.clientHeight = this.height - this.margin * 2;

    }
    render()
    {
        background(0);
        strokeWeight(this.margin);
        stroke(255, 0, 0); //A borda e a cor da linha do retangulo "Esta em Vermelho"
        noFill(); //Significa que não queremos preenchimento interno
        rect(this.margin / 2, this.margin / 2, this.width - this.margin, this.height - this.margin); //Aqui estamos trabalhando com o tamanho do *Canvas* 



    }
}