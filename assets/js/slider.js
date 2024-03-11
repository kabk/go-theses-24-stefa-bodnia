const folder = "./img/visualessay/";

const images = [
  {
    name: " 1.png",
    size: 1,
    caption: "A miner standing with his back to the viewer, holding a light bulb. Etude to the painting Coal Miners. Shift, Nikolay Kasatkin, oil on canvas, 1895",
  },
  {
    name: "1 .png",
    size: 0.15,
    caption: "1 Kopiika, 1992. Coin was produced in Luhansk, Ukraine",
  },
  {
    name: "1.png",
    size: 1,
    caption: "Abandoned People, Valerii Miloserdov, [Покинуті люди, Валерій Милосердов], 1994-1999.",
  },
  {
    name: "2.jpg",
    size: 1,
    caption: "Abandoned People, Valerii Miloserdov, [Покинуті люди, Валерій Милосердов], 1994-1999",
  },
  {
    name: " 3.png",
    size: 1,
    caption: "The Chimborazo seen from the Plateau of Tapia, Alexander Von Humboldt, the first scholar to link colonialism to environmental degradation and the subjugation of local communities",
  },
  {
    name: "4.jpg",
    size: 0.6,
    caption: "Archival photos of Donbass: courtesy of Gwent Archives and West Lothian Council",
  },
  {
    name: "5.jpg",
    size: 0.4,
    caption: "Donbas 1994-2011, Alexander Chekmenev.",
  }, 
  {
    name: " 5.jpg",
    size: 1,
    caption: "Donbas 6x6, Alexander Chekmenev, Torez, 2011.",
  },
  {
    name: " 6.png",
    size: 1,
    caption: "Miner with a lamp and tongs. Sketch for the painting “Coal Miners. Change”, Nikolay Kasatkin [Шахтар з лампою і кліщами. Ескіз до картини “Шахтарі. Зміна”, Миколай Касаткін], oil on canvas, 1895.",
  },
  {
    name: " 7.png",
    size: 1,
    caption: "Perevalsk, Donbas 1994-2011, Alexander Chekmenev.",
  },
  {
    name: "8.png",
    size: 1,
    caption: "Typical landscape in Donbass, Biletskyi V. - Small mining encyclopaedia. In 3 volumes / Edited by V.S. Biletskyi - Donetsk: Donbas, 2004.",
  },
  {
    name: "9.png",
    size: 1,
    caption: "Obligation of the Société Métallurgique russo-belgian, 1898. <br> ",
  },
  {
    name: "10.png",
    size: 1,
    caption: "Mundus subterraneus [Shape Of The Universe], Athanasius Kircher, 1665.",
  },
  {
    name: "11.png",
    size: 1,
    caption: "Belgian Bottle factory in Donetz in the early 20th century.<br>Quay and electric loading bridge in the port of Mariupol on the Sea of Azov.",
  },

  {
    name: " 13.png",
    size: 1,
    caption: "Donbas 1994-2011, Alexander Chekmenev.",
  },
  {
    name: " 14.png",
    size: 1,
    caption: "Mundus subterraneus [Shape Of The Universe], Athanasius Kircher, 1665.",
  },
  {
    name: " 15.png",
    size: 1,
    caption: "Dreamland Donbas series, Viktor Marushchenko,2003-2004.",
  },
  {
    name: " 16.png",
    size: 1,
    caption: "Grushevsky mine, Nikolay Kasatkin, oil on canvas, 1893.",
  },
  
  {
    name: " 18.png",
    size: 1,
    caption: "Interior of an above-mine room, Nikolay Kasatkin, oil on canvas, 1895.",
  },
  {
    name: "19.png",
    size: 0.9,
    caption: "Miners, End of Shift, Nikolay Kasatkin, 1895.",
  },
  {
    name: "20.jpg",
    size: 0.8,
    caption: "Donbas 1994-2011, Alexander Chekmenev.",
  },
  {
    name: " 23.png",
    size: 1,
    caption: "Miner’s portrait, sketch for the painting “Miners. Shift”, Nikolay Kasatkin, oil on canvas, 1895.",
  },
  {
    name: " 24.png",
    size: 1,
    caption: "Abandoned People, Valerii Miloserdov, [Покинуті люди, Валерій Милосердов], 1994-1999.",
  },
  {
    name: " 25.png",
    size: 1,
    caption: "De re metallica (Latin for On the Nature of Metals [Minerals]), Georgius Agricol, 1556. The first authoritative text on mining refining metals. Impact extraction.",
  },  
  {
    name: " 26.png",
    size: 1,
    caption: "Unearthing the Landscape, Stefaniia Bodnia, 2023.",
  },
  {
    name: " 27.png",
    size: 1,
    caption: "Halite is the mineral name for the substance that everyone knows as 'salt'.",
  },
  {
    name: " 28.png",
    size: 1,
    caption: "Morphology of crystals: a - b - tamarugite; c - h - pikkerringite. Eq.: a - 3500; b - 2000; c - 2000; d - 3500; e - 2000; f - 750; g - 1500; h - 2000",
  },
  {
    name: " 29.png",
    size: 1,
    caption: "Personal archive. 2016-2018.",
  },
  {
    name: " 30.png",
    size: 1,
    caption: "Personal archive. 2016-2018.",
  },
  {
    name: " 31.png",
    size: 1,
    caption: "Personal archive. 2016-2018.",
  },
  {
    name: " 34.png",
    size: 1,
    caption: "Personal archive. 2016-2018.",
  },
  {
    name: " 45.png",
    size: 1,
    caption: "Iron Ore",
  },

  {
    name: " 35.png",
    size: 1,
    caption: "Miner-puller, Nikolai Kasatkin, 1920s",
  },
  {
    name: " 36.png",
    size: 1,
    caption: "Black snow in Kramatorsk, 2009.",
  },
  {
    name: " 39.png",
    size: 1,
    caption: "Neon",
  },
  {
    name: " 40.png",
    size: 1,
    caption: "Satelite image. Sea of Azov by Jacques Descloitres, MODIS Rapid Response Team, NASA/GSFC.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  
  const slider = document.getElementById("slider");
  const sliderContainer = document.getElementById("slider-container");
  const captionsBlock = document.getElementsByClassName('captions')[0];

  let currentIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  let isAutoplayPaused = false;

  const insertImages = () => {
    images.forEach((image) => {
      const img = document.createElement("img");
      img.src = folder + image.name;
      slider.appendChild(img);
      img.style.height = image.size * 100 + "%";
    });
  };
  const updateSlider = () => {
    const caption = images[currentIndex % images.length].caption;
    captionsBlock.innerHTML = caption;
    const imagesInSlider = slider.children;
    let leftBorderCoordinate = 0;
    for (let i = 0; i < currentIndex; i++) {
      leftBorderCoordinate += imagesInSlider[i].getBoundingClientRect().width;
    }

    const newPosition = -leftBorderCoordinate + "px";

    slider.style.transform = "translateX(" + newPosition + ")";
  };

  const startAutoplay = () => {
    if (!isAutoplayPaused) {
      const intervalDuration = 4500; // Set the interval duration in milliseconds (e.g., 5000ms = 5 seconds)
      return setInterval(() => {
        nextSlide();
      }, intervalDuration);
    }
    return null;
  };

  let autoplayInterval = startAutoplay();

  const stopAutoplay = () => {
    clearInterval(autoplayInterval);
    isAutoplayPaused = true;
  };

  const resumeAutoplay = () => {
    if (isAutoplayPaused) {
      autoplayInterval = startAutoplay();
      isAutoplayPaused = false;
    }
  };

  insertImages();
  updateSlider();

  const prevSlide = () => {
    if (currentIndex !== 0) {
      currentIndex--;
      updateSlider();
      console.log(images[currentIndex]);
    }
  };

  const nextSlide = () => {
    currentIndex++;
    updateSlider();
    console.log(images[currentIndex]);

    if ((currentIndex - 1) % images.length === 0) {
      insertImages();
    }
  };

  sliderContainer.parentElement.addEventListener("click", function (event) {
    const sliderRect = sliderContainer.getBoundingClientRect();
    const clickX = event.clientX - sliderRect.left;

    if (clickX < sliderRect.width / 2) {
      prevSlide();
    } else {
      nextSlide();
    }
  });

  sliderContainer.addEventListener("mousemove", (e) => {
    if (e.clientX < sliderContainer.getBoundingClientRect().width / 2) {
      document.body.style.cursor = 'w-resize';
    } else {
      document.body.style.cursor = "e-resize";
    }
  });

  sliderContainer.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'auto';
    resumeAutoplay(); // Resume autoplay on mouseleave
  });

  sliderContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    stopAutoplay(); // Stop autoplay on touchstart
  });

  sliderContainer.addEventListener("touchmove", (e) => {
    touchEndX = e.touches[0].clientX;
  });

  sliderContainer.addEventListener("touchend", () => {
    const swipeThreshold = 50; // Adjust the threshold as needed
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > swipeThreshold) {
      prevSlide();
    } else if (swipeDistance < -swipeThreshold) {
      nextSlide();
    }

    resumeAutoplay(); // Resume autoplay on touchend
  });
});