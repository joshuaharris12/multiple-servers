let images = [];

function prevSlide() {
    currentIndex = Math.max(currentIndex - 1, 0);
    showImage(currentIndex);
    updateButtonVisibility();
}

function fetchImagesFromAPI(isDev) {
  if (isDev) {
    images = ["https://images.unsplash.com/photo-1506815444479-bfdb1e96c566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
     "https://images.unsplash.com/photo-1695932082210-f402f56bec39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1692544552858-1ca853c0eb67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"]
    createImageElements();
    return;
  }
  URL = "TO_ADD"
  fetch(URL) 
      .then((response) => response.json())
      .then((data) => {
          images = data.imageUrls; 
          createImageElements();
      })
      .catch((error) => {
          console.error('Error fetching images:', error);
      });
}

function createImageElements() {
  console.log("here aaass")
    const imageContainer = document.querySelector('.carousel-container');

    images.forEach((imageUrl) => {
        const imgElement = document.createElement('img');
        imgElement.classList.add('carousel-image');
        imgElement.src = imageUrl;
        imgElement.alt = 'Image';
        imgElement.className = "img"
        imageContainer.appendChild(imgElement);
    });
}

fetchImagesFromAPI(true);