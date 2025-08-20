button = document.getElementById("butt");
imageElement = document.getElementById("img");
const imagesA = ['img/A/Abyss.jpg', 'img/A/Aizawa.jpg', 'img/A/All might.jpg', 'img/A/Aira.jpg', 'img/A/Akame.jpg', 'img/A/Akraptor.jpg', 'img/A/Anya.jpg'];
const imagesB = ['img/B/Bakugo.jpg', 'img/B/Bokuto.jpg', 'img/B/BonClay.jpg', 'img/B/Brook.jpg', 'img/B/Benimaru.jpg'];
const imagesC = ['img/C/Charmi.jpg', 'img/C/Chopper.jpg', 'img/C/Crocodile.jpg'];
const imagesD = ['img/D/Dabi.jpg', 'img/D/Doflamingo.jpg'];
const imagesE = [];
const imagesF = ['img/F/Feitan.jpg', 'img/F/Fern.jpg'];
const imagesG = ['img/G/Gen.jpg', 'img/G/Gabimaru.jpg', 'img/G/Gon.jpg', 'img/G/Giyuu.jpg'];
const imagesH = ['img/H/Hairo.jpg', 'img/H/Hyouga.jpg', 'img/H/Hibana.jpg', 'img/H/Hoshina.jpg', 'img/H/Hanma.jpg', 'img/H/Heisuke.jpg', 'img/H/Heiten.jpg', 'img/H/Himmel.jpg'];
const imagesI = ['img/I/Itachi.jpg'];
const imagesJ = ['img/J/Jinbei.jpg', , 'img/J/Jiraiya.jpg', 'img/J/Juyuu.jpg'];
const imagesK = ['img/K/Kaidou.jpg', 'img/K/Kakashi.jpg', 'img/K/Kaldo.jpg', 'img/K/Katakuri.jpg', 'img/K/Kazuma.jpg', 'img/K/Kid.jpg', 'img/K/Kokomi.jpg', 'img/K/Kuboyasu.jpg', 'img/K/Kageyama.jpg', 'img/K/Kenma.jpg', 'img/K/Kilua.jpg', 'img/K/Koby.jpg', 'img/K/Komamura.jpg', 'img/K/Khun.jpg', 'img/K/Kaneki.jpg', 'img/K/Kikoru.jpg'];
const imagesL = ['img/L/Lance.jpg', 'img/L/Law.jpg', 'img/L/Luna.jpg', 'img/L/Lero ro.jpg', 'img/L/Laure.jpg'];
const imagesM = ['img/M/Macaron.jpg', 'img/M/Mash.jpg', 'img/M/Minato.jpg', 'img/M/Mob.jpg', 'img/M/Mina Ashiro.jpg', 'img/M/Mitsui.jpg', 'img/M/Mitsuri.jpg', 'img/M/Mitsuya.jpg'];
const imagesN = ['img/N/Nami.jpg', 'img/N/Nendou.jpg', 'img/N/Noelle.jpg', 'img/N/Nagisha.jpg'];
const imagesO = ['img/O/Obanai.jpg'];
const imagesP = ['img/P/Pain.jpg', 'img/P/Perona.jpg', 'img/P/Prince.jpg'];
const imagesQ = [];
const imagesR = ['img/R/Regen.jpg', 'img/R/Robin.jpg', 'img/R/Rukia.jpg', 'img/R/Rukawa.jpg', 'img/R/Reo.jpg'];
const imagesS = ['img/S/Saiki.jpg', 'img/S/Saitama.jpg', 'img/S/Sanji.jpg', 'img/S/Senku.jpg', 'img/S/Shisui.jpg', 'img/S/Smoker.jpg', 'img/S/Suga.jpg', 'img/S/Suika.jpg', 'img/S/Sakamoto.jpg', 'img/S/Sanemi.jpg', 'img/S/Shiba hakai.jpg', 'img/S/Shin.jpg', 'img/S/Shinobu kotsou.jpg', 'img/S/Shishiba.jpg'];
const imagesT = ['img/T/Tobi.jpg', 'img/T/Tobirama.jpg', 'img/T/Tokoyami.jpg', 'img/T/Toritsuka.jpg', 'img/T/Toshiro.jpg', 'img/T/Tomoe.jpg', 'img/T/Tanjiro.jpg'];
const imagesU = ['img/U/Ussop.jpg', 'img/U/Uta.jpg'];
const imagesV = [];
const imagesW = [];
const imagesX = ['img/X/Xeno.jpg'];
const imagesY = ['img/Y/Yamato.jpg', 'img/Y/Yu Ishigami.jpg'];
const imagesZ = [];
let images = [];
let stopTime = 0;
let interval;


function changeImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    imageElement.src = images[randomIndex];
}

function stopChangingImages() {
    clearInterval(interval);
}

button.addEventListener('click', () => { 
  if (interval){
    clearInterval(interval);
  } 
  let slct = document.getElementById("select").value;
    
  stopTime = Math.floor(Math.random() * (5000 - 3000 + 1)) + 2000;
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
    Y: imagesY
    Z: imagesZ
  }
  images = imageSets[slct] || [];
  
  interval = setInterval(changeImage, 50);
  setTimeout(stopChangingImages, stopTime);

button = document.getElementById("butt");
imageElement = document.getElementById("img");
const imagesA = ['img/A/Abyss.jpg', 'img/A/Aizawa.jpg', 'img/A/All might.jpg', 'img/A/Aira.jpg', 'img/A/Akame.jpg', 'img/A/Akraptor.jpg', 'img/A/Anya.jpg'];
const imagesB = ['img/B/Bakugo.jpg', 'img/B/Bokuto.jpg', 'img/B/BonClay.jpg', 'img/B/Brook.jpg', 'img/B/Benimaru.jpg'];
const imagesC = ['img/C/Charmi.jpg', 'img/C/Chopper.jpg', 'img/C/Crocodile.jpg'];
const imagesD = ['img/D/Dabi.jpg', 'img/D/Doflamingo.jpg'];
// const imagesE = [];
const imagesF = ['img/F/Feitan.jpg', 'img/F/Fern.jpg'];
const imagesG = ['img/G/Gen.jpg', 'img/G/Gabimaru.jpg', 'img/G/Gon.jpg', 'img/G/Giyuu.jpg'];
const imagesH = ['img/H/Hairo.jpg', 'img/H/Hyouga.jpg', 'img/H/Hibana.jpg', 'img/H/Hoshina.jpg', 'img/H/Hanma.jpg', 'img/H/Heisuke.jpg', 'img/H/Heiten.jpg', 'img/H/Himmel.jpg'];
const imagesI = ['img/I/Itachi.jpg'];
const imagesJ = ['img/J/Jinbei.jpg', , 'img/J/Jiraiya.jpg', 'img/J/Juyuu.jpg'];
const imagesK = ['img/K/Kaidou.jpg', 'img/K/Kakashi.jpg', 'img/K/Kaldo.jpg', 'img/K/Katakuri.jpg', 'img/K/Kazuma.jpg', 'img/K/Kid.jpg', 'img/K/Kokomi.jpg', 'img/K/Kuboyasu.jpg', 'img/K/Kageyama.jpg', 'img/K/Kenma.jpg', 'img/K/Kilua.jpg', 'img/K/Koby.jpg', 'img/K/Komamura.jpg', 'img/K/Khun.jpg', 'img/K/Kaneki.jpg', 'img/K/Kikoru.jpg'];
const imagesL = ['img/L/Lance.jpg', 'img/L/Law.jpg', 'img/L/Luna.jpg', 'img/L/Lero ro.jpg', 'img/L/Laure.jpg'];
const imagesM = ['img/M/Macaron.jpg', 'img/M/Mash.jpg', 'img/M/Minato.jpg', 'img/M/Mob.jpg', 'img/M/Mina Ashiro.jpg', 'img/M/Mitsui.jpg', 'img/M/Mitsuri.jpg', 'img/M/Mitsuya.jpg'];
const imagesN = ['img/N/Nami.jpg', 'img/N/Nendou.jpg', 'img/N/Noelle.jpg', 'img/N/Nagisha.jpg'];
const imagesO = ['img/O/Obanai.jpg'];
const imagesP = ['img/P/Pain.jpg', 'img/P/Perona.jpg', 'img/P/Prince.jpg'];
// const imagesQ = [];
const imagesR = ['img/R/Regen.jpg', 'img/R/Robin.jpg', 'img/R/Rukia.jpg', 'img/R/Rukawa.jpg', 'img/R/Reo.jpg'];
const imagesS = ['img/S/Saiki.jpg', 'img/S/Saitama.jpg', 'img/S/Sanji.jpg', 'img/S/Senku.jpg', 'img/S/Shisui.jpg', 'img/S/Smoker.jpg', 'img/S/Suga.jpg', 'img/S/Suika.jpg', 'img/S/Sakamoto.jpg', 'img/S/Sanemi.jpg', 'img/S/Shiba hakai.jpg', 'img/S/Shin.jpg', 'img/S/Shinobu kotsou.jpg', 'img/S/Shishiba.jpg'];
const imagesT = ['img/T/Tobi.jpg', 'img/T/Tobirama.jpg', 'img/T/Tokoyami.jpg', 'img/T/Toritsuka.jpg', 'img/T/Toshiro.jpg', 'img/T/Tomoe.jpg', 'img/T/Tanjiro.jpg'];
const imagesU = ['img/U/Ussop.jpg', 'img/U/Uta.jpg'];
// const imagesV = [];
// const imagesW = [];
const imagesX = ['img/X/Xeno.jpg'];
const imagesY = ['img/Y/Yamato.jpg', 'img/Y/Yu Ishigami.jpg'];
// const imagesZ = [];
let images = [];
let stopTime = 0;
let interval;


function changeImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    imageElement.src = images[randomIndex];
}

function stopChangingImages() {
    clearInterval(interval);
}

button.addEventListener('click', () => { 
  if (interval){
    clearInterval(interval);
  } 
  let slct = document.getElementById("select").value;
    
  stopTime = Math.floor(Math.random() * (5000 - 3000 + 1)) + 2000;
  let imageSets = {
    A: imagesA,
    B: imagesB,
    C: imagesC,
    D: imagesD,
    // E: imagesE,
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
    // Q: imagesQ,
    R: imagesR,
    S: imagesS,
    T: imagesT,
    U: imagesU,
    // V: imagesV,
    // W: imagesW,
    X: imagesX,
    Y: imagesY
    // Z: imagesZ
  }
  images = imageSets[slct] || [];
  
  interval = setInterval(changeImage, 50);
  setTimeout(stopChangingImages, stopTime);
});