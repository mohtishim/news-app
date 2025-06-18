let showData = document.getElementById('showData');

let input = document.getElementById('input');

let getData = () =>{
    let apiUrl = `https://newsapi.org/v2/everything?q=${input.value}&from=2025-05-14&sortBy=publishedAt&apiKey=165f0e71cc9446c4a5ab1033bad26a46`;

    fetch(apiUrl)
    .then((res)=> res.json())
    .then((data) => {
        console.log(data.articles);
        data.articles.forEach((e,i) => {
            console.log(e)
            showData.innerHTML += `<div class="card" style="width: 18rem;">
  <img src=${e.urlToImage}
 class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${e.title}</h5>
    <p class="card-text">${e.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
        });

    })
    .catch((err)=> {console.log(err)})
    
}