var searchForm = document.querySelector("#searchForm");
var pictureDiv = document.querySelector(".pictures")


searchForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  console.log("Submitted form");
  const searchTerm = searchForm.elements.query.value;
  const config = { params: { q: searchTerm } };
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows`,
    config
  );
  addImg(response.data);
  searchForm.elements.query.value = "";
});

var addImg = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      pictureDiv.append(img);
    }
  }
};
