const adio = document.getElementById("audio");
const img = document.getElementById("imagenes")
const titulo = document.getElementById("title");
const songs = ["Kiss the rain.mp3","Mi corazon encantado.mp3", "Pista salsa.mp3"];
const titles = ["Kiss the rain", "Mi corazon encantado", "Salsita"];
const carru = ["./imgs/rivers.jfif", "./imgs/gt.jpg","./imgs/salsa.jfif"];
let position = 0;


function actualizar(){
    adio.src = songs[position];
    titulo.textContent = titles[position];
    img.src =  carru[position]
    adio.play();
}
function togglePlay(){
    if(adio.paused){
        adio.play()
    }else{
        adio.pause()
    }
}

function nextSong(){
    position++;
    if(position>=songs.length){//si supera el limite, position se reinicia
        position = 0;
    }
    actualizar();
}

function prevSong(){
    position--;
    if(position < 0){  //
        position = songs.length -1;
    
    }
    actualizar();

}