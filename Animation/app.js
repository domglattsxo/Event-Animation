let tID;
function stopAnime() {
clearInterval(tID);
}
function animeScript() {
let position = 512;
const interval = 100;
const diff = 512;
tID = setInterval ( () => {
document.getElementById("image").style.backgroundPosition = 
`-${position}px 0px`;

if (position < 11264)
{ position = position + diff;}

else 
{ position = 512; }

}
, interval );
}

