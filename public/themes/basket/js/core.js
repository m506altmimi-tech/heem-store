let products = [
  [
    "../img/perfume_1.jpeg",
    "عطر فاخر",
    "130",
    "استمتع بتجربة عطرية استثنائية مع عطر فاخر، الذي يجسد الفخامة والأناقة في كل رشة.",
  ],
  [
    "../img/perfume_2.jpeg",
    "عطر فاخر",
    "130",
    "استمتع بتجربة عطرية استثنائية مع عطر فاخر، الذي يجسد الفخامة والأناقة في كل رشة.",
  ],
  [
    "../img/perfume_3.jpeg",
    "عطر فاخر",
    "130",
    "استمتع بتجربة عطرية استثنائية مع عطر فاخر، الذي يجسد الفخامة والأناقة في كل رشة.",
  ],
  [
    "../img/perfume_4.jpeg",
    "عطر فاخر",
    "130",
    "استمتع بتجربة عطرية استثنائية مع عطر فاخر، الذي يجسد الفخامة والأناقة في كل رشة.",
  ],
  [
    "../img/perfume_5.jpeg",
    "عطر فاخر",
    "130",
    "استمتع بتجربة عطرية استثنائية مع عطر فاخر، الذي يجسد الفخامة والأناقة في كل رشة.",
  ],
  [
    "../img/perfume_6.jpeg",
    "عطر فاخر",
    "130",
    "استمتع بتجربة عطرية استثنائية مع عطر فاخر، الذي يجسد الفخامة والأناقة في كل رشة.",
  ],
  [
    "../img/perfume_6.jpeg",
    "عطر فاخر",
    "130",
    "استمتع بتجربة عطرية استثنائية مع عطر فاخر، الذي يجسد الفخامة والأناقة في كل رشة.",
  ],
  [
    "../img/perfume_6.jpeg",
    "عطر فاخر",
    "130",
    "استمتع بتجربة عطرية استثنائية مع عطر فاخر، الذي يجسد الفخامة والأناقة في كل رشة.",
  ],
];

let fav_products = JSON.parse(localStorage.getItem("fav_products")) || [];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let current_product = JSON.parse(localStorage.getItem("current_product")) || 0;

function saveData() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("fav_products", JSON.stringify(fav_products));
  localStorage.setItem("current_product", JSON.stringify(current_product));
}

function createCards(list, containerId, options = {}, countPro = 0) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  //number of products
  let countProducts = countPro;
  for (let i = 0; i < countProducts; i++) {
    //Create Card Product
    const product_card = document.createElement("a");
    product_card.className = "product_card";
    product_card.href = "../html/product_info.html";

    const card = document.createElement("div");
    card.className = "card";

    //Create Card image
    const card_img = document.createElement("div");
    card_img.className = "card_img";

    //Create image
    const img = document.createElement("img");
    img.src = list[i][0];
    card_img.appendChild(img);

    //Create Card Content
    const card_content = document.createElement("div");
    card_content.className = "card_content";

    //Create Details
    const title = document.createElement("h3");
    title.textContent = list[i][1];

    const price = document.createElement("h5");
    price.textContent = list[i][2] + " $";

    const des = document.createElement("p");
    des.textContent = list[i][3];

    //Add Details In Card Content
    card_content.appendChild(title);
    card_content.appendChild(price);
    card_content.appendChild(des);

    if (options.showCart) {
      //Create button >> add to cart
      const btnCart = document.createElement("button");
      btnCart.textContent = "اضف للسلة";
      btnCart.className = "add-to-cart";
      btnCart.onclick = function (e) {

        e.preventDefault();
        // let exists = -1;
        // for(let j = 0; j < cart.length; j++) {
        //   let item = cart[j];
        //   if (item[0] === list[i][0]){
        //     exist = j;
        //     break;
        //   }
        // }
        const exists = cart.findIndex((item) => item[0] === list[i][0]);

        if (exists === -1) {
          cart.push(list[i]);
          saveData();
        }
      };

      //Add button to Card product
      card_content.appendChild(btnCart);
    }

    if (options.removeCart) {
      //Create button >> remove from cart

      const btnRemoveCart = document.createElement("button");
      btnRemoveCart.textContent = "ازالة من السلة";
      btnRemoveCart.className = "remove-from-cart";
      btnRemoveCart.onclick = function (e) {

        e.preventDefault();
        // const exists = -1;
        // for(let j = 0; j < cart.length; j++) {
        //   let item = cart[j];
        //   if (item[0] === list[i][0]){
        //     cart.splice(j, 1);
        //     saveData();
        //     break;
        //   }
        // }

        const index = cart.findIndex((item) => item[0] === list[i][0]);

        if (index !== -1) {
          cart.splice(index, 1);
          saveData();
        }
      };

      //Add button to Card product
      card_content.appendChild(btnRemoveCart);
    }

  product_card.onclick = function () {     ///////
      localStorage.setItem("current_product", JSON.stringify(list[i]));
    };

    //display non_heart icon
    if (options.showFav) {
      const heart_icon = document.createElement("img");
      heart_icon.className = "bx-heart";
      heart_icon.alt = "اضف للمفضلات";
      heart_icon.src = "../img/nonc_heart.png";

      // const isFav;
      // for(let j = 0; j < fav_products.length; j++) {
      //   let item = fav_products[j];
      //   if(item[0] === list[i][0]){
      //     isFav = true;
      //   }
      // }
      const isFav =
        fav_products.findIndex((item) => item[0] === list[i][0]) !== -1;

      if (isFav) {
        heart_icon.src = "../img/heart.png";
      }

      const btnFav = document.createElement("button");
      btnFav.appendChild(heart_icon);

      btnFav.onclick = function (e) {
        e.preventDefault();

        const index = fav_products.findIndex((item) => item[0] === list[i][0]);


        if (index === -1) {
          fav_products.push(list[i]);
          heart_icon.src = "../img/heart.png";
        } else {
          fav_products.splice(index, 1);
          heart_icon.src = "../img/nonc_heart.png";
        }

        saveData();
      };

      card_img.appendChild(btnFav);
    }

    //Add Card_img and Card_content in Card
    card.appendChild(card_img);
    card.appendChild(card_content);
    product_card.appendChild(card);

    //Add Card in Container
    container.appendChild(product_card);
  }
}
