button = document.getElementById("butt");
imageElement = document.getElementById("img");
const imagesA = ['img/A/Abyss.jpg', 'img/A/All might.jpg', 'img/A/Aira.jpg', 'img/A/Aizawa.jpg', 'img/A/Akame.jpg', 'img/A/Akraptor.jpg'];
const imagesB = ['img/B/Brook.jpg', 'img/B/Benimaru.jpg', 'img/B/Bokuto.jpg', 'img/B/Bakugo.jpg', 'img/B/BonClay.jpg'];
const imagesC = ['img/C/Charmi.jpg', 'img/C/Chopper.jpg', 'img/C/Crocodile.jpg'];
const imagesD = ['img/D/Diablo.jpg'];
const imagesE = [];
const imagesF = ['img/F/Feitan.jpg', 'img/F/Fern.jpg'];
const imagesG = ['img/G/Gen.jpg', 'img/G/Gon.jpg', 'img/G/Gabimaru.jpg', 'img/G/Giyuu.jpg', 'img/G/Gobta.jpg'];
const imagesH = ['img/H/Hairo.jpg', 'img/H/Heisuke.jpg', 'img/H/Heiten.jpg', 'img/H/Hyouga.jpg', 'img/H/Hoshina.jpg', 'img/H/Himmel.jpg', 'img/H/Hibana.jpg', 'img/H/Hanma.jpg'];
const imagesI = ['img/I/Itachi.jpg'];
const imagesJ = ['img/J/Jinbei.jpg', 'img/J/Jiraiya.jpg'];
const imagesK = ['img/K/Kaidou.jpg', 'img/K/Kakashi.jpg', 'img/K/Kenma.jpg', 'img/K/Komamura.jpg', 'img/K/Khun.jpg', 'img/K/Kaneki.jpg', 'img/K/Kikoru.jpg', 'img/K/Kaldo.jpg', 'img/K/Kazuma.jpg', 'img/K/Kuboyasu.jpg', 'img/K/Kilua.jpg', 'img/K/Koby.jpg', 'img/K/Katakuri.jpg', 'img/K/Kid.jpg'];
const imagesL = ['img/L/Lance.jpg', 'img/L/Lero ro.jpg', 'img/L/Law.jpg', 'img/L/Luna.jpg'];
const imagesM = ['img/M/Mash.jpg', 'img/M/Minato.jpg', 'img/M/Mina Ashiro.jpg', 'img/M/Macaron.jpg', 'img/M/Mob.jpg', 'img/M/Mitsuri.jpg'];
const imagesN = ['img/N/Nami.jpg', 'img/N/Noelle.jpg', 'img/N/Nagisha.jpg', 'img/N/Nendou.jpg'];
const imagesO = ['img/O/Obanai.jpg'];
const imagesP = ['img/P/Pain.jpg', 'img/P/Perona.jpg', 'img/P/Prince.jpg'];
const imagesQ = [];
const imagesR = ['img/R/Rukia.jpg', 'img/R/Regen.jpg', 'img/R/Reo.jpg', 'img/R/Robin.jpg', 'img/R/Rimuru.jpg'];
const imagesS = ['img/S/Saiki.jpg','img/S/Saitama.jpg', 'img/S/Sanji.jpg', 'img/S/Senku.jpg', 'img/S/Shisui.jpg', 'img/S/Sakamoto.jpg', 'img/S/Shiba hakai.jpg', 'img/S/Shin.jpg', 'img/S/Shinobu kotsou.jpg', 'img/S/Shishiba.jpg', 'img/S/Smoker.jpg', 'img/S/Sanemi.jpg', 'img/S/Suika.jpg', 'img/S/Suga.jpg'];
const imagesT = ['img/T/Tobi.jpg', 'img/T/Tobirama.jpg', 'img/T/Tokoyami.jpg', 'img/T/Toritsuka.jpg', 'img/T/Tanjiro.jpg', 'img/T/Toshiro.jpg'];
const imagesU = ['img/U/Uta.jpg', 'img/U/Ussop.jpg'];
const imagesV = [];
const imagesW = [];
const imagesX = ['img/X/Xeno.jpg'];
const imagesY = ['img/Y/Yu Ishigami.jpg' ,  'img/Y/Yamato.jpg'];
const imagesZ = [];
let stopTime = 0;
let interval;  

/*
function changeImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    imageElement.src = images[randomIndex];
} */

function changeImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  imageElement.classList.remove('fade'); // Reset animation
  void imageElement.offsetWidth; // Trigger reflow to restart animation
  imageElement.src = images[randomIndex];
  imageElement.classList.add('fade');
}

function stopChangingImages() {
    clearInterval(interval);
}

button.addEventListener('click', () => { 
  if (interval){
    clearInterval(interval);
  } 

  let slct = document.getElementById("select").value;
    
  stopTime = Math.floor(Math.random() * (9000 - 3000 + 1)) + 2000;

  let imageSets = {
    A: imagesA,
    B: imagesB,
    C: imagesC,
    D: imagesD,
    E: imagesE,
    F: imagesF,
    G: imagesG,
    H: imagesH,
    I: imagesI,
    J: imagesJ,
    K: imagesK,
    L: imagesL,
    M: imagesM,
    N: imagesN,
    O: imagesO,
    P: imagesP,
    Q: imagesQ,
    R: imagesR,
    S: imagesS,
    T: imagesT,
    U: imagesU,
    V: imagesV,
    W: imagesW,
    X: imagesX,
    Y: imagesY,
    Z: imagesZ
  };

  images = imageSets[slct] || [];

  if (images.length === 0) {
    alert("No images found for the selected category.");
    return;
  }

  //interval = setInterval(changeImage, 50);
  interval = setInterval(changeImage, 1000);
  setTimeout(stopChangingImages, stopTime);
});
