const main = document.getElementsByTagName("main").item(0);
const mainProds = document.getElementById("mainProds");
const ulMenu = document.getElementById("ulMenu");
const URLMain="https://fakestoreapi.com/products/";



function getData(cat){
    
    const options = {"method": "GET"}
    fetch(URLMain+cat,options)
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


function getCategories(){
    const options = {"method": "GET"};
    fetch(URLMain + "categories/", options)
    .then((response) => {
       response.json().then((res)=>{
      //  console.log("categories:",res);
       res.forEach((cat)=>{
        ulMenu.insertAdjacentHTML("afterbegin",
        `<li><a class="dropdown-item" style="cursor:pointer;" onclick="getData('category/${(cat.replace("'","%27"))}');">${cat}</a></li>`);
       });
    });
})
      
    .catch((err)=> {
        main.insertAdjacentHTML("beforeend",`<div class ="alert alert-danger" role ="alert"
            ${err.message}
            </div>`);
    });

}//getCategories





function createCards(prods) {
mainProds.innerHTML="";
    prods.forEach(p => {
        console.log(p.id, p.title, p.price);
        mainProds.insertAdjacentHTML("beforeend", 
            ` <div class ="col-md-4 mb-4">
            <div class="card h-100">
            <img src = "${p.image}" class="card-img-top"alt="${p.title}">
                <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <p class="card-text">${p.description}</p>
                    <a href="#" class="btn btn-success">¡Comprar!</a>
                </div>
            </div>`
            
        );
    });
   /* for (let p = 0; p < 20; p++) { //aplicando un bucle
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
        );*/
    }


    getCategories();
    getData("");


