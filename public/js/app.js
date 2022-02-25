
const resultadoCarrito = document.getElementById("resultadoCarrito");

const carritoFruta = [];


// document.addEventListener("click", (e) => {
//     // console.log(e.target.dataset.bsTarget === "#exampleModal");
//     if (e.target.dataset.buton === "producto") {
//         carritoFruta.push(e.target.dataset.fruta);
//         e.target.classList.add("disabled");
//         // console.log(carritoFruta);
//         pintarCarrito();
//     }
// });



document.addEventListener("click", (e) => {
    // console.log(e.target.dataset.bsTarget === "#exampleModal");
    if (e.target.dataset.buton === "producto") {
        carritoFruta.push(e.target.dataset.fruta);
        e.target.classList.add("disabled");
        // console.log(carritoFruta);
      
        pintarCarrito();
    }
});

const pintarCarrito = () => {
    resultadoCarrito.innerHTML = "";
    carritoFruta.forEach((fruta) => {
        resultadoCarrito.innerHTML += `
        <div class="row">
            <div class="col-md-5">
                <img src="/img/${fruta}.png" alt="" class="card-img-top">
            </div>
        </div>
        `;
    });
};




