let $ = document;

const music = $.querySelector("#audio");

const cover = $.querySelector("#cover");
const artistName = $.querySelector(".music-singer");
const songName = $.querySelector(".music-name");
const currentTime = $.querySelector(".time-duration");
const time = $.querySelector(".time-finish");
const musicRange = $.querySelector(".music-range");
const prevBtn = $.querySelector(".prev-btn");
const mainBtns = $.querySelectorAll(".btn");
const startBtn = $.querySelector(".start-btn");
const stopBtn = $.querySelector(".stop-btn");
const nextBtn = $.querySelector(".next-btn");

const musicList = [
  {
    id: 1,
    artist: "2Pac",
    song: "Time Back",
    url: "2Pac-Time Back",
    musicTime: "220",
    coverUrl:
      "https://berouzmusic.ir/wp-content/uploads/2019/09/Pac-Full-Album.jpg",
  },
  {
    id: 2,
    artist: "Ebi",
    song: "Akare Ghese",
    url: "03_Akhare_Ghesseh",
    musicTime: "305",
    coverUrl:
      "https://artment.ir/wp-content/uploads/2022/04/Akhare-Ghesseh_Ebi.jpg",
  },
  {
    id: 3,
    artist: "Shadmehr",
    song: "Noghte Zaef",
    url: "07_Noghte_Zaaf",
    musicTime: "238",
    coverUrl:
      "https://rapstar.info/wp-content/uploads/Image/Shadmehr%20Aghili/Images/Noghte%20Zaaf.webp",
  },
  {
    id: 4,
    artist: "Darush",
    song: "Sale 2000",
    url: "08_Sale_2000",
    musicTime: "312",
    coverUrl:
      "https://parsguitar.com/wp-content/uploads/2022/06/dariush-asemun-400x400.jpg",
  },
];

let musicIndex = 0;


