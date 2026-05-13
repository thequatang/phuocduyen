window.onload = function () {
  init();
  setupPanelToggle();
  setupLetterPopup();

  // LOAD ẢNH SAU KHI INIT
  const imageList = [
    "image/anh1.jpg",
    "image/anh2.jpg",
    "image/anh3.jpg",
    "image/anh4.jpg",
    "image/anh5.jpg",
    "image/anh6.jpg",
    "image/anh7.jpg",
    "image/anh8.jpg",
    "image/anh9.jpg",
    "image/anh10.jpg",
    "image/anh11.jpg",
    "image/anh12.jpg",
    "image/anh13.jpg",
    "image/anh14.jpg",
    "image/anh15.jpg",
    "image/anh16.jpg",
    "image/anh17.jpg",
    "image/anh18.jpg",
    "image/anh19.jpg",
    "image/anh20.jpg",
    "image/anh21.jpg",
  ];

  imageList.forEach((src, index) => {
    const img = new Image();

    img.onload = function () {
      console.log("Đã tải:", src);
      createImageMesh(img, index, 0);
    };

    img.src = src;
  });
};
