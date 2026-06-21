document.addEventListener("DOMContentLoaded", () => {

    createCards(products, "main-container", {
        showCart: true,
        showFav: true
    }, 3);

    document.getElementById("showAll").addEventListener("click", () => {
        createCards(products, "main-container", {
            showCart: true,
            showFav: true
        }, products.length);
    });

});


document.addEventListener()