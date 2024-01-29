const folder = "./img/visualessay/";

const images = [
  {
    name: "1.jpeg",
    size: 0.5,
  },
  {
    name: "2.jpg",
    size: 1,
  },
  {
    name: "3.jpg",
    size: 0.5,
  },
  {
    name: "4.jpg",
    size: 0.8,
  },
  {
    name: "5.jpg",
    size: 0.3,
  },
  {
    name: "6.jpg",
    size: 1,
  },
  {
    name: "7.jpg",
    size: 1,
  },
  {
    name: "8.jpeg",
    size: 1,
  },
  {
    name: "9.jpg",
    size: 1,
  },
  {
    name: "10.jpg",
    size: 1,
  },
  {
    name: "11.jpg",
    size: 1,
  },
  {
    name: "12.jpg",
    size: 1,
  },
  {
    name: "13.jpg",
    size: 1,
  },
  {
    name: "14.png",
    size: 1,
  },
  {
    name: "15.jpg",
    size: 1,
  },
  {
    name: "16.png",
    size: 1,
  },
  {
    name: "17.jpg",
    size: 1,
  },
  {
    name: "18.png",
    size: 1,
  },
  {
    name: "19.jpg",
    size: 1,
  },
  {
    name: "20.jpg",
    size: 1,
  },
  {
    name: "21.png",
    size: 1,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const sliderContainer = document.getElementById("slider-container");
  let currentIndex = 0;

  const insertImages = () => {
    images.forEach((image) => {
      const img = document.createElement("img");
      img.src = folder + image.name;
      slider.appendChild(img);
      img.style.height = image.size * 100 + '%';
    });
  }

  insertImages();

  const updateSlider = () => {
    console.log(currentIndex);

    const imagesInSlider = slider.children;
    let leftBorderCoordinate = 0;
    for (let i = 0; i < currentIndex; i++) {
      leftBorderCoordinate += imagesInSlider[i].getBoundingClientRect().width;
    }

    const newPosition = -leftBorderCoordinate + "px";

    slider.style.transform = "translateX(" + newPosition + ")"
  };

  const prevSlide = () => {
    if (currentIndex !== 0) {
      currentIndex--;
      updateSlider();
    }
  };

  const nextSlide = () => {
    currentIndex++;
    updateSlider();
    if ((currentIndex-1)  % images.length === 0) {
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
