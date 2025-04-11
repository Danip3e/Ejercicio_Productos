const main = document.getElementsByTagName("main").item(0);
const URLMain="https://fakestoreapi.com/products/";


function getData(){
    fetch(URLMain)
    .then((response) => {
        console.log(response);
        response.json().then((res)=>{
            console.log(res.length);
        console.log(res[2].title);
        createCards(res); 
            });
    })
    .catch((err)=> {
        main.insertAdjacentHTML("beforeend",`<div class ="alert alert-danger" role ="alert"
            ${err.message}
            </div>`);
    });

}//getData

getData();




function createCards(prods) {
    for (let p = 0; p < 20; p++) { //aplicando un bucle
        const prod = prods [p];
        main.insertAdjacentHTML("beforeend",
            `<div class="card" style="width: 300px; margin:20px; display: inline-block;">
                <img src="${prod.image}" class="card-img-top" alt="${prod.title}">
                <div class="card-body">
                    <h5 class="card-title">${prod.title}</h5>
                    <p class="card-text">${prod.description}</p>
                    <a href="#" class="btn btn-primary">¡Comprar!</a>
                </div>
            </div>`
        );
    }


}// Create cards
createCards(res);