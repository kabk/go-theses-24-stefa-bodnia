const folder = "./img/visualessay/";

const images = [
  {
    id: "image1",
    name: "06.jpg",
    size: 1,
    caption: "Coal Mine, Land Mine, The Body of Mine, \n Book, 270 x 200 mm; charcoal, digital print, comcolor, silkscreen.",
  },
  {

    name: "6.gif",
    size: 0.9,
    caption: "Coal Mine, Land Mine, The Body of Mine, \n Book, 270 x 200 mm; charcoal, digital print, comcolor, silkscreen.",
  },
  {
    id: "image2",
    name: "01.jpg",
    size: 1,
    caption: "Coal Mine, Land Mine, The Body of Mine, Prints",
  },
  {
    name: "00.jpg",
    size: 1,
    caption: "Left: The Portrait. Neon sculpture in collaboration with Alexandra Hunts.",
  },



  {
    name: "Pochen.png",
    size: 1,
    caption: "Pochen Biennale 2024, Chemnitz",
  },
  {
    name: "DSC_4232-min-2.jpg",
    size: 1,
    caption: "Pochen Biennale 2024, Chemnitz",
  }, 
  {
    name: "02-0.gif",
    size: 1,
    caption: "Kyiv Biennial 2023, visual identity with Aliona Ciobanu",
  },
  {
    name: "01-01.jpg",
    size: 1,
    caption: "Kyiv Biennial 2023, visual identity with Aliona Ciobanu",
  },

  {
    name: "NoTraces.jpg",
    size: 1,
    caption: "No Traces Left",
  },
  {
    name: "NoTraces-01.jpg",
    size: 1,
    caption: "No Traces Left",
  },

  {
    name: "MicrosoftTeams-image.png",
    size: 1,
    caption: "No Traces Left",
  },

  {
    name: "IMG_6543 copy.jpg",
    size: 1,
    caption: "Polyesther Palace, flexible publication, series of posters",
  },
  {
    name: "12.PNG",
    size: 0.6,
    caption: "Polyesther Palace, flexible publication, series of posters",
  }, 
  {
    name: "IMG_1241.JPG",
    size: 1,
    caption: "De fence, silkprinted poster, 2021",
  },
  {
    name:"IMG_1243.JPG",
    size: 1,
    caption: "De fence, silkprinted poster, 2021",
  },
  // {
  //   name:"IMG_0903.jpg",
  //   size:1,
  //   caption: "Coal Mine, Land Mine, The Body of Mine, \n Book, 270 x 200 mm; charcoal, digital print, comcolor, silkscreen.",
  // },
  {
    name:"01-min.jpg",
    size:1,
    caption: "",
  },

];



// document.addEventListener("DOMContentLoaded", () => {
  
//   const slider = document.getElementById("slider");
//   const sliderContainer = document.getElementById("slider-container");
//   const captionsBlock = document.getElementsByClassName('captions')[0];

//   let currentIndex = 0;

//   const insertImages = () => {
//     images.forEach((image) => {
//       const img = document.createElement("img");
//       img.src = folder + image.name;
//       slider.appendChild(img);
//       img.style.height = image.size * 100 + "%";
//     });

//     const intervalDuration = 2500; // Set the interval duration in milliseconds (e.g., 5000ms = 5 seconds)
//     let autoplayInterval;

//     const startAutoplay = () => {
//      autoplayInterval = setInterval(() => {
//         nextSlide();
//      }, intervalDuration);
//   };

//     const stopAutoplay = () => {
//       clearInterval(autoplayInterval);
//     };

//     // Start autoplay when the document is ready
//     startAutoplay();

//   // Stop autoplay on mouseover and resume on mouseleave
//   sliderContainer.addEventListener("mouseover", stopAutoplay);
//   sliderContainer.addEventListener("mouseleave", startAutoplay);

//   };

  
  
//   const updateSlider = () => {
//     const caption = images[currentIndex % images.length].caption;
//     captionsBlock.innerHTML = caption;
//     const imagesInSlider = slider.children;
//     let leftBorderCoordinate = 0;
//     for (let i = 0; i < currentIndex; i++) {
//       leftBorderCoordinate += imagesInSlider[i].getBoundingClientRect().width;
//     }

//     const newPosition = -leftBorderCoordinate + "px";

//     slider.style.transform = "translateX(" + newPosition + ")";
//   };


//   insertImages();
//   updateSlider()

  
//   const prevSlide = () => {
//     if (currentIndex !== 0) {
//       currentIndex--;
//       updateSlider();
//       console.log(images[currentIndex]);
//     }
//   };

//   const nextSlide = () => {
//     currentIndex++;
//     updateSlider();
//     console.log(images[currentIndex]);

//     if ((currentIndex - 1) % images.length === 0) {
//       insertImages();
//     }
//   };

//   sliderContainer.parentElement.addEventListener("click", function (event) {
//     const sliderRect = sliderContainer.getBoundingClientRect();
//     const clickX = event.clientX - sliderRect.left;

//     if (clickX < sliderRect.width / 2) {
//       prevSlide();
//     } else {
//       nextSlide();
//     }
//   });

//   sliderContainer.addEventListener("mousemove", (e) => {
//     console.log(e.clientX);
//     if (e.clientX < sliderContainer.getBoundingClientRect().width / 2) {
//       console.log('left');
//       document.body.style.cursor = 'w-resize'
//     } else {
//       document.body.style.cursor = "e-resize";

//     }

//   });
//   sliderContainer.addEventListener('mouseleave', () => {
//     document.body.style.cursor = 'auto';
//   })

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const sliderContainer = document.getElementById("slider-container");
  const captionsBlock = document.querySelector('.captions');
  let currentIndex = 0;

  // Insert images only once
 
  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = folder + image.name;
    img.id = image.id; // Assign the id from the data
    img.alt = image.caption;
  


  




  const applyStyles = () => {
    if (window.innerWidth <= 768) { // Mobile view
      img.style.width = "100vw";
      // img.style.height = "auto"; // Keep aspect ratio
    } else { // Desktop view
      img.style.height = image.size * 100 + "%";
      img.style.width = "auto"; // Allow height to dominate
    }
  };

  // Apply styles on load
  applyStyles();

  // Reapply styles on resize
  window.addEventListener("resize", applyStyles);

  slider.appendChild(img);
});




  const updateSlider = () => {
    captionsBlock.textContent = images[currentIndex % images.length].caption;
    slider.style.transform = `translateX(-${slider.children[currentIndex].offsetLeft}px)`;
  };
  

  const prevSlide = () => {
    if (currentIndex > 0) currentIndex--;
    updateSlider();
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  };

  // Handle click navigation and cursor updates
  sliderContainer.addEventListener("click", (event) => {
    if (event.clientX < sliderContainer.getBoundingClientRect().width / 2) {
      prevSlide();
    } else {
      nextSlide();
    }
  });

  let lastCursor = ''; // Track last cursor state
  sliderContainer.addEventListener("mousemove", (e) => {
    const newCursor = e.clientX < sliderContainer.getBoundingClientRect().width / 2 ? 'w-resize' : 'e-resize';
    if (newCursor !== lastCursor) {
      document.body.style.cursor = newCursor;
      lastCursor = newCursor;
    }
  });

  sliderContainer.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'auto';
  });

  // Initialize slider position
  updateSlider();
});



