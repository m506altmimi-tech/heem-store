
const product_target = current_product;

const picture1 = product_target[0];
const tit1 = product_target[1];
const prc1 = product_target[2];
const des1 = product_target[3];



function createDetails(des, prc, tit, picture) {

  //Create gallery div
  const product = document.createElement("div");
  product.className = "product";

  //Create image div
  const main_image = document.createElement("div");
  main_image.className = "main_image";

  //Create link image
  const mainImage = document.createElement("img");
  mainImage.id = "mainImage";
  mainImage.src = picture;
  mainImage.alt = "perfume";

  //Create info div
  const product_content = document.createElement("div");
  product_content.className = "product_content";

  //Create title
  const product_tit = document.createElement("h1");
  product_tit.textContent = tit;

  const product_prc = document.createElement("h2");
  product_prc.textContent = prc +"$";
  //Create descrption
  const product_des = document.createElement("p");
  product_des.textContent = des;
  product_des.className = "description";

  //Create rating
  const rating = document.createElement("div");
  rating.className = "rating";
  const starts = document.createElement("span");
  starts.textContent = "⭐ ⭐ ⭐ ⭐ ⭐";

  const paragraph = document.createElement("p");
  paragraph.textContent = "4.8 (120)";

  main_image.appendChild(mainImage);
  
  rating.appendChild(starts);
  rating.appendChild(paragraph);

  product_content.appendChild(product_tit);
  product_content.appendChild(rating);
  product_content.appendChild(product_prc);
  product_content.appendChild(product_des);

  product.appendChild(main_image);
  product.appendChild(product_content);
  const container = document.getElementById("conatiner_information");
  container.appendChild(product);

}

createDetails(des1, prc1, tit1, picture1);
