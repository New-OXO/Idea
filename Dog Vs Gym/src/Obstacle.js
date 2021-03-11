//Definisco le costanti di colore
const R_MINIMO = 127;
const R_MASSIMO = 106;

const G_MINIMO = 255;
const G_MASSIMO = 13;

const B_MINIMO = 212;
const B_MASSIMO = 173;

class Obstacle extends ObjectGame{
    //Ridimensiono l'immagine e la passo come parametro al costruttore della classe madre
    constructor(x, score){
        let texture = loadImage('../assets/img/obstacle.png');
        super(x, score, texture, WIDTH/10, HEIGHT/20);
    }
    //La funzione getColor calcola la gradazione di colore in base al punteggio
    getColor(){
        var r = R_MINIMO+((R_MASSIMO-R_MINIMO)*this.score)/50;
        var g = G_MINIMO+((G_MASSIMO-G_MINIMO)*this.score)/50;
        var b = B_MINIMO+((B_MASSIMO-B_MINIMO)*this.score)/50;
        fill(r, g, b);
    }
    //Verifica se è stato colpito o no
    isHit(dog_x, dog_y){
        if((dog_x>=this.x && dog_x<=this.x+(super.getDimW())) && (dog_y>=this.y && dog_y<=this.y+(super.getDimH()))){
            this.setScore(-1);
            player.remove();

            if(!player.gym.isPlaying()){
                player.playAudioGym();
            }

            return true;
        }else{
            return false;
        }
    }

    colliding() {/*
        this.sprite.collide(player.dog[0], () => {
            if(this.sprite.position.x<player.getX()){
                player.dog[0].position.x = this.x;
            }else{
                player.dog[0].position.x = this.x+this.dimW;
            }
        });*/
    }

    draw(){
        this.getColor();
        rect(this.x, this.y, this.dimW, this.dimH);
        imageMode(CORNER);
        image(this.image, this.x+this.dimW/2, this.y, WIDTH/20, HEIGHT/20);
        drawSprite(this.sprite);
        this.updateScore(); 
    }

}
