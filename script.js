var searchForm = document.querySelector('#searchForm')
searchForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    console.log("Submitted form")
    const searchTerm = searchForm.elements.query.value;
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    addImg(response.data)
})

var addImg = (shows) => {
    for (let result of shows) {
        if(result.show.image) {
    const img = document.createElement('img');
    img.src = result.show.image.medium;
    document.body.append(img)
    }
    }
}