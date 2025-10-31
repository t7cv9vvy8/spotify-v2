//global var

let currentSong = new Audio();



function openSidebar(){
    document.querySelector('.side-bar').classList.remove('hide');
    document.querySelector('.crossicon').classList.remove('hide');
    document.querySelector('.baricon').classList.add('hide');
    let a = document.querySelector('.side-bar');
    a.style.left = '0';
}

function closeSidebar(){
    document.querySelector('.baricon').classList.remove('hide');
    let a = document.querySelector('.side-bar');
    a.style.left = '-600px';
}


async function getSongs(){
    let a = await fetch("https://t7cv9vvy8.github.io/spotify-v2/songs/index.html");
    let response = await a.text();
    console.log(response);
    let div = document.createElement('div');
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    console.log(as)
    let songs = [];
   for(let index = 0; index < as.length; index++)
            {
            const element = as[index];
            if(element.href.endsWith('.mp3')){

            songs.push(element.href.split("/songs/")[1].replaceAll("%20"," ").replaceAll("%5B", " ").replaceAll("%5D", " ").replaceAll("%2B", " ").replaceAll("%26", " "));
            
            }

            } 
            return songs


        }

            


const playMusic = (track)=>{
    // let audio = new Audio("/songs/"+track);
    currentSong.src = "https://t7cv9vvy8.github.io/songs/"+track
    currentSong.play();
    
}



async function main(){
    //get the songs
    let songs = await getSongs();
    console.log(songs);

    let songUl = document.querySelector(".mainList").getElementsByTagName("ul")[0];
    for (const song of songs){
        songUl.innerHTML = songUl.innerHTML + `<li><i class="fa-solid fa-music"></i>
                        <span class="info">${song}</span> <p>Play Now</p>
                        <i class="fa-solid fa-play play-pause"></i></li>`;
                         
        let songCard = document.querySelector(".cardContainer");
        songCard.innerHTML = songCard.innerHTML + `<div class="card">
                        <div class="play playCard">
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <img src="assets/card1img.jpeg" alt="">
                        <h2>Made By MBK</h2>
                        <p class="songId">${song}</p>
                    </div>`;
    }


        Array.from(document.querySelector(".cardContainer").getElementsByTagName("div")).forEach(e => {
        e.addEventListener("click", element=>{
        console.log(e.querySelector(".songId").innerHTML)
        playMusic(e.querySelector(".songId").innerHTML)
        playBtn.src = "./assets/pause.png"
        })
        
    });


    let songUl2 = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs){
        songUl2.innerHTML = songUl2.innerHTML + `<li><i class="fa-solid fa-music"></i>
                        <span class="info">${song}</span> <p>Play Now</p>
                        <i class="fa-solid fa-play play-pause"></i></li>`;
        
    }


    //genrate cards
   

    //play the first songs
    


    //attach an event listner to each songs
    Array.from(document.querySelector(".mainList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element=>{
        console.log(e.querySelector("span").innerHTML)
        playMusic(e.querySelector("span").innerHTML)
        playBtn.src = "./assets/pause.png"
        })
        
    });

    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element=>{
        console.log(e.querySelector("span").innerHTML)
        playMusic(e.querySelector("span").innerHTML)
        playBtn.src = "./assets/pause.png"
        })
        
    });


   


    let playBtn = document.querySelector(".playBtn");
    playBtn.addEventListener("click", ()=>{
        if(currentSong.paused){
            currentSong.play()
            playBtn.src = "./assets/pause.png"
            playBtn.classList.add("invert");
            
        }
        else{
            currentSong.pause()
            playBtn.classList.remove("invert");
            playBtn.src = "./assets/player_icon3.png"
        }
    })

}
    



main();

