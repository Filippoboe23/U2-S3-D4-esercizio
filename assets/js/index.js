document.getElementById("load-images-btn").addEventListener("click", function () {
  const apiKey = "zmo4vt5LAI8GgUzT2lTLfv8z7uf6QjWXKnM06Rnt1XtbQqP9AjTurqes";

  const url = "https://api.pexels.com/v1/search?query=sport";
  fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: apiKey
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const imageContainer = document.querySelector(".album .container .row");
      imageContainer.innerHTML = "";
      data.photos.forEach((photo) => {
        const imgElement = document.createElement("div");
        imgElement.classList.add("col-md-4");
        imgElement.innerHTML = `
          <div class="card mb-4 shadow-sm">
            <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${photo.photographer}</h5>
              <p class="card-text">Photo by ${photo.photographer}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary hide-btn">Hide</button>
                </div>
                <small class="text-muted">${photo.width}x${photo.height}</small>
              </div>
            </div>
          </div>
        `;
        imageContainer.appendChild(imgElement);
        const hideButton = imgElement.querySelector(".hide-btn");
        hideButton.addEventListener("click", function () {
          imgElement.style.display = "none";
        });
      });
    })
    .catch((error) => {
      console.error("There was an error with the fetch operation:", error);
    });
});
document.getElementById("load-secondary-images-btn").addEventListener("click", function () {
  const apiKey = "zmo4vt5LAI8GgUzT2lTLfv8z7uf6QjWXKnM06Rnt1XtbQqP9AjTurqes";

  const url = "https://api.pexels.com/v1/search?query=nature";
  fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: apiKey
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const imageContainer = document.querySelector(".album .container .row");
      imageContainer.innerHTML = "";
      data.photos.forEach((photo) => {
        const imgElement = document.createElement("div");
        imgElement.classList.add("col-md-4");
        imgElement.innerHTML = `
            <div class="card mb-4 shadow-sm ">
              <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${photo.photographer}</h5>
                <p class="card-text">Photo by ${photo.photographer}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary hide-btn">Hide</button>
                  </div>
                  <small class="text-muted">${photo.width}x${photo.height}</small>
                </div>
              </div>
            </div>
          `;
        imageContainer.appendChild(imgElement);
        const hideButton = imgElement.querySelector(".hide-btn");
        hideButton.addEventListener("click", function () {
          imgElement.style.display = "none";
        });
      });
    })
    .catch((error) => {
      console.error("There was an error with the fetch operation:", error);
    });
});
