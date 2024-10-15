let arr = [
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
      title: "Grocery",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
      title: "Mobiles",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
      title: "Fashion",
      href:'Product.html'
    },
    
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
      title: "Electronics",
    },
    
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
      title: "Home and Furtinure",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100",
      title: "Appliances",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
      title: "Travel",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
      title: "Beauty,Toys and More",
      href: "",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
      title: "Two Wheelers",
      href: "",
    },
  ];
arr.map((element)=>{
  let image = document.createElement('img');
  image.src = element.img_src;
  
  let title = document.createElement("p");
  title.innerHTML = element.title;
 
  let box = document.createElement('div');
  
  box.append(image,title);
  
 document.getElementById("categories").append(box);

});
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = cart.length;
let cartTotal = cart.reduce((total, item) => total + item.price, 0);

document.getElementById("cart-count").textContent = cartCount;
document.getElementById("cart-total").textContent = cartTotal;
document.getElementById("modal-cart-total").textContent = cartTotal;

function addToCart(product) {
    cart.push(product);
    cartCount++;
    cartTotal += product.price;
    updateCart();
    displayCartItems();
}

function removeFromCart(productIndex) {
    cartTotal -= cart[productIndex].price;
    cart.splice(productIndex, 1);
    cartCount--;
    updateCart();
    displayCartItems();
}

function updateCart() {
    document.getElementById("cart-count").textContent = cartCount;
    document.getElementById("cart-total").textContent = cartTotal;
    document.getElementById("modal-cart-total").textContent = cartTotal;
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCartItems() {
    const cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = '';
    cart.forEach((product, index) => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");

        const itemText = document.createElement("p");
        itemText.textContent = `${product.txt} - $${product.price}`;
        cartItemDiv.appendChild(itemText);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeFromCart(index);
        cartItemDiv.appendChild(removeBtn);

        cartItemsDiv.appendChild(cartItemDiv);
    });
}

function displayProduct(product, containerId) {
    const cardContainer = document.getElementById(containerId);

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const img = document.createElement('img');
    img.src = product.imgsrc;
    cardDiv.appendChild(img);

    const txt = document.createElement('p');
    txt.textContent = product.txt;
    cardDiv.appendChild(txt);

    const description = document.createElement('p');
    description.textContent = product.description;
    cardDiv.appendChild(description);

    const price = document.createElement('p');
    price.textContent = `$${product.price}`;
    cardDiv.appendChild(price);

    const btn = document.createElement('button');
    btn.textContent = product.btn;
    btn.onclick = () => addToCart(product);
    cardDiv.appendChild(btn);

    cardContainer.appendChild(cardDiv);
}

const cartModal = document.getElementById("cart-modal");
const closeModal = document.querySelector(".close");

document.querySelector(".cart").addEventListener("click", function (e) {
    e.preventDefault();
    cartModal.style.display = "block";
});

closeModal.addEventListener("click", function () {
    cartModal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
});

const electronics = [
{ imgsrc: 'https://i5.walmartimages.com/asr/d32ba11d-1b5a-4f15-a57e-19f46178ff7d.64da4aaffd886741bdec3f8d729f962b.jpeg', txt: 'Air Pods', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 1500 },
    { imgsrc: 'http://i.huffpost.com/gen/1105939/images/o-BEST-PERFORMING-WINDOWS-LAPTOP-facebook.jpg', txt: 'Laptops', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 1500 },
    { imgsrc: 'https://wonderfulengineering.com/wp-content/uploads/2020/11/10-best-Smart-Watches-Under-50-4-1024x1024.jpg', txt: 'Smart Watch', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 6500 },
    { imgsrc: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6336/6336536cv21d.jpg', txt: 'Laptops', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 3500 },
    { imgsrc: 'https://tse1.mm.bing.net/th?id=OIP.3zDWWlhSZ1F76JZ7QXeKmAHaEB&pid=Api&P=0&h=180', txt: 'Air Pods', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 7500 },
    { imgsrc: 'https://eezepc.com/wp-content/uploads/2019/09/A3391Z11-2.jpg', txt: 'Speakers', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 4500 },
    {
    imgsrc :'https://sadabahaar.pk/wp-content/uploads/2022/10/Z59-Ultra-SmartWatch-sadabahaar6.jpg',
    txt:'Smart watch',
    description:'Dimensity7050 5G',
    btn:'Add to cart',
    price:1500
        },
    
        {
    imgsrc :'https://i5.walmartimages.com/asr/79471941-7770-4ed6-8615-ea5f7b50f8be_1.d27064a1bbec8db9a8fa957d79eba245.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
    txt:'Speakers',
    description:'Dimensity7050 5G',
    btn:'Add to cart',
    price:3500
        },
];

const clothes = [
    { imgsrc: 'img1.jpeg', txt: "Men's shirt", description: 'Dimensity7050 5G', btn: 'Add to cart', price: 8000 },
    { imgsrc: 'img2.jpeg', txt: "Men's shirt", description: 'Dimensity7050 5G', btn: 'Add to cart', price: 2000 },
    { imgsrc: 'img3.jpeg', txt: 'Women T-shirt', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 5000 },
    { imgsrc: 'img4.jpeg', txt: "Men's shirt", description: 'Dimensity7050 5G', btn: 'Add to cart', price: 1000 },
    { imgsrc: 'img5.jpeg', txt:  'Women T-shirt', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 2500 },
    { imgsrc: 'img6.jpeg', txt: 'Kurtha Set', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 3000 },
    { imgsrc: 'img9.jpeg', txt: 'Kurtha Set', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 4000 },
    { imgsrc: 'img8.jpeg', txt: 'Kurtha Set', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 4000 }
];

const footwear = [
    { imgsrc: 'img13.jpeg', txt: 'Casual Sandals', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 1000 },
    { imgsrc: 'img14.jpeg', txt: 'Party Sandals', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 5000 },
    { imgsrc: 'img15.jpeg', txt: 'Formal Shoes', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 3000 },
    { imgsrc: 'img16.jpeg', txt: 'Sneakers', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 4000 }
];

electronics.forEach(product => displayProduct(product, 'electronics-container'));
clothes.forEach(product => displayProduct(product, 'clothes-container'));
footwear.forEach(product => displayProduct(product, 'footwear-container'));

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();
    const allProducts = [...electronics, ...clothes, ...footwear];

    allProducts.forEach((product, index) => {
        const cardContainer = index < electronics.length ? 'electronics-container' :
            index < electronics.length + clothes.length ? 'clothes-container' : 'footwear-container';

        const cardDiv = document.querySelector(`#${cardContainer} .card:nth-child(${index + 1})`);
        if (product.txt.toLowerCase().includes(searchValue)) {
            cardDiv.style.display = "block";
        } else {
            cardDiv.style.display = "none";
        }
      });
    });
//     
const sortSelect = document.getElementById('sort-products');

sortSelect.addEventListener('change', () => {
    if (sortSelect.value === 'low-to-high') {
        electronics.sort((a, b) => a.price - b.price);
        footwear.sort((a, b) => a.price - b.price);
        clothes.sort((a, b) => a.price - b.price);
    } else if (sortSelect.value === 'high-to-low') {
        electronics.sort((a, b) => b.price - a.price);
        clothes.sort((a, b) => a.price - b.price);
        footwear.sort((a, b) => a.price - b.price);
    } else {
        // Reset to default (normal) order
        const electronics = [
          { imgsrc: 'https://i5.walmartimages.com/asr/d32ba11d-1b5a-4f15-a57e-19f46178ff7d.64da4aaffd886741bdec3f8d729f962b.jpeg', txt: 'Air Pods', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 1500 },
              { imgsrc: 'http://i.huffpost.com/gen/1105939/images/o-BEST-PERFORMING-WINDOWS-LAPTOP-facebook.jpg', txt: 'Laptops', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 1500 },
              { imgsrc: 'https://wonderfulengineering.com/wp-content/uploads/2020/11/10-best-Smart-Watches-Under-50-4-1024x1024.jpg', txt: 'Smart Watch', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 6500 },
              { imgsrc: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6336/6336536cv21d.jpg', txt: 'Laptops', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 3500 },
              { imgsrc: 'https://tse1.mm.bing.net/th?id=OIP.3zDWWlhSZ1F76JZ7QXeKmAHaEB&pid=Api&P=0&h=180', txt: 'Air Pods', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 7500 },
              { imgsrc: 'https://eezepc.com/wp-content/uploads/2019/09/A3391Z11-2.jpg', txt: 'Speakers', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 4500 },
              {
              imgsrc :'https://sadabahaar.pk/wp-content/uploads/2022/10/Z59-Ultra-SmartWatch-sadabahaar6.jpg',
              txt:'Smart watch',
              description:'Dimensity7050 5G',
              btn:'Add to cart',
              price:1500
                  },
              
                  {
              imgsrc :'https://i5.walmartimages.com/asr/79471941-7770-4ed6-8615-ea5f7b50f8be_1.d27064a1bbec8db9a8fa957d79eba245.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
              txt:'Speakers',
              description:'Dimensity7050 5G',
              btn:'Add to cart',
              price:3500
                  },
          ];
          
          const clothes = [
              { imgsrc: 'img1.jpeg', txt: "Men's shirt", description: 'Dimensity7050 5G', btn: 'Add to cart', price: 8000 },
              { imgsrc: 'img2.jpeg', txt: "Men's shirt", description: 'Dimensity7050 5G', btn: 'Add to cart', price: 2000 },
              { imgsrc: 'img3.jpeg', txt: 'Women T-shirt', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 5000 },
              { imgsrc: 'img4.jpeg', txt: "Men's shirt", description: 'Dimensity7050 5G', btn: 'Add to cart', price: 1000 },
              { imgsrc: 'img5.jpeg', txt:  'Women T-shirt', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 2500 },
              { imgsrc: 'img6.jpeg', txt: 'Kurtha Set', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 3000 },
              { imgsrc: 'img9.jpeg', txt: 'Kurtha Set', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 4000 },
              { imgsrc: 'img8.jpeg', txt: 'Kurtha Set', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 4000 }
          ];
          
          const footwear = [
              { imgsrc: 'img13.jpeg', txt: 'Casual Sandals', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 1000 },
              { imgsrc: 'img14.jpeg', txt: 'Party Sandals', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 5000 },
              { imgsrc: 'img15.jpeg', txt: 'Formal Shoes', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 3000 },
              { imgsrc: 'img16.jpeg', txt: 'Sneakers', description: 'Dimensity7050 5G', btn: 'Add to cart', price: 4000 }
          ];
          
    }
    displayProducts(); // Call to update the displayed products
});

function displayProducts() {
    const electronicsContainer = document.getElementById('electronics-container');
    electronicsContainer.innerHTML = ''; // Clear previous display

    electronics.forEach(product => displayProduct(product, 'electronics-container'));
}

 const endTime = new Date().getTime() + 3600000; // 1 hour from now

function updateTimer() {
  const now = new Date().getTime();
  const distance = endTime - now;
  
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById('timer').innerText = `Offer ends in: ${hours}:${minutes}:${seconds}`;
  
  if (distance < 0) {
    document.getElementById('timer').innerText = "Offer ended";
  }
}

setInterval(updateTimer, 1000);