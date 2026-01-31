const audio = document.getElementById("player");      
const songList = document.getElementById("songList"); 

function loadSongs(){
    const q = document.getElementById("search").value;

     fetch(`http://localhost:3000/songs?search=${q}`)//q song name fetched
     .then(res => res.json())
    .then(data => {
      songList.innerHTML=""; //clear previous songs
      data.results.forEach(song=>{
        const btn=document.createElement("button");// show new btn for each song
         btn.innerText = song.name;

        btn.onclick = () => {
          audio.src = song.audio;// load the song
          audio.play();
        };
        songList.appendChild(btn);// shows songlist to users in form of button
      });


    });
}

  function pauseMusic(){
    audio.pause();
  }