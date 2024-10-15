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
  displayCards(electronics, 'electronics-container'); // Display electronics in electronics-container
  displayCards(clothes, 'clothes-container'); // Display clothes in clothes-container
  displayCards(footwear, 'footwear-container'); // Display footwear in footwear-container
  
  // Function to display products dynamically
  function displayCards(products, containerId) {
    const container = document.getElementById(containerId); // Get the container by ID
  
    products.forEach(product => {
      const cardDiv = document.createElement('div'); // Create a card for each product
      cardDiv.classList.add('card'); // Add the "card" class
  
      const img = document.createElement('img'); // Create an image element
      img.src = product.imgsrc; // Set the image source
      cardDiv.appendChild(img); // Append image to the card
  
      const txt = document.createElement('p'); // Create a paragraph for the title
      txt.textContent = product.txt; // Set the title
      cardDiv.appendChild(txt); // Append title to the card
  
      const description = document.createElement('p'); // Create a paragraph for the description
      description.textContent = product.description; // Set the description text
      cardDiv.appendChild(description); // Append description to the card
  
      const price = document.createElement('p'); // Create a paragraph for the price
      price.textContent = `$${product.price}`; // Set the price
      cardDiv.appendChild(price); // Append price to the card
  
      const btn = document.createElement('button'); // Create a button element
      btn.textContent = product.btn; // Set button text to "Add to cart"
      cardDiv.appendChild(btn); // Append button to the card
  
      container.appendChild(cardDiv); // Append the complete card to the container
    });
  }
  