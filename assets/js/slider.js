const folder = "./img/visualessay/";

const images = [
  {
    name: " 1.png",
    size: 1,
    caption: "A miner standing with his back to the viewer, holding a light bulb. Etude to the painting Coal Miners. Shift [Шахтар, що стоїть спиною до глядача, з лампочкою в руках. Етюд до картини “Вуглекопи. Зміна”], Nikolay Kasatkin, oil on canvas, 1895",
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
    name: " 2.png",
    size: 1,
    caption: "Abandoned People, Valerii Miloserdov, [Покинуті люди, Валерій Милосердов], 1994-1999",
  },
  {
    name: " 3.png",
    size: 1,
    caption: "The Chimborazo seen from the Plateau of Tapia, Alexander Von Humboldt, the first scholar to link colonialism to environmental degradation and the subjugation of local communities",
  },
  {
    name: " 4.png",
    size: 0.8,
    caption: "6test",
  },
  {
    name: "5.jpg",
    size: 0.7,
    caption: "7test",
  },
  {
    name: " 6.png",
    size: 1,
    caption: "test",
  },
  {
    name: " 7.png",
    size: 1,
    caption: "test",
  },
  {
    name: " 8.png",
    size: 1,
    caption: "test",
  },
  {
    name: " 9.png",
    size: 1,
    caption: "test",
  },
  {
    name: " 10.png",
    size: 1,
    caption: "test",
  },
  {
    name: " 11.png",
    size: 1,
    caption: "test",
  },
  {
    name: " 12.png",
    size: 1,
    caption: "test",
  },
  {
    name: " 13.png",
    size: 1,
    caption: "test",
  },
  {
    name: " 14.png",
    size: 1,
    caption: "test",
  },
  {
    name: " 15.png",
    size: 1,
    caption: "test",
  },
  {
    name: " 16.png",
    size: 1,
    caption: "test",
  },
  {
    name: " 17.png",
    size: 1,
    caption: "test",
  },
  {
    name: " 18.png",
    size: 1,
    caption: "test",
  },
  {
    name: " 19.png",
    size: 1,
    caption: "test",
  },
  {
    name: " 20.png",
    size: 1,
    caption: "test",
  },
  {
    name: " 21.png",
    size: 1,
    caption: "test",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const sliderContainer = document.getElementById("slider-container");
  const captionsBlock = document.getElementsByClassName('captions')[0];

  let currentIndex = 0;

  const insertImages = () => {
    images.forEach((image) => {
      const img = document.createElement("img");
      img.src = folder + image.name;
      slider.appendChild(img);
      img.style.height = image.size * 100 + "%";
    });
  };
  
  const updateSlider = () => {
    const caption = images[currentIndex].caption;
    captionsBlock.innerHTML = caption;
    const imagesInSlider = slider.children;
    let leftBorderCoordinate = 0;
    for (let i = 0; i < currentIndex; i++) {
      leftBorderCoordinate += imagesInSlider[i].getBoundingClientRect().width;
    }

    const newPosition = -leftBorderCoordinate + "px";

    slider.style.transform = "translateX(" + newPosition + ")";
  };


  insertImages();
  updateSlider()

  
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
});
