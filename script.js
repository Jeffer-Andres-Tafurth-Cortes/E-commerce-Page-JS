// Modal Image Section
let image = document.getElementById('imageProduct');
let modal = document.getElementById('myModal');
let modalImg = document.getElementById('imageModal');

image.addEventListener('click', () => {
  modal.style.display = 'block';
  modalImg.src = image.src;
})

function closeModal(){
  modal.style.display = 'none';
}

let prevBtn = document.getElementById('toLeft');
let nextBtn = document.getElementById('toRight');

prevBtn.addEventListener('click', () => {
  
})

nextBtn.addEventListener('click', () => {

})

//MobileNavBtn
let mobileBtn = document.getElementById('mobileNavBtn');
let mobileModal = document.getElementById('mobileModal');
let modalNav = document.getElementById('nav-menu-modal');

mobileBtn.addEventListener("click", ()=>{
  mobileModal.style.display = 'block';
})

function closeMobileNavBar(){
  mobileModal.style.display = 'none';
}

//Main Collection -> little-buy-section
let minusBtn = document.getElementById('minus');
let plusBtn = document.getElementById('plus');
let cartBtn = document.getElementById('add-to-cart');
let quantitySpace = document.getElementById('quantity');
let quantityCount = 0;

minusBtn.addEventListener('mousedown', () => {
  minusBtn.style.backgroundColor = '#a35227';
})

minusBtn.addEventListener('mouseup', () => {
  minusBtn.style.backgroundColor = '';
})

minusBtn.addEventListener('click', () => {
  quantityCount--
  quantitySpace.textContent = quantityCount;
});

plusBtn.addEventListener('mousedown', () => {
  plusBtn.style.backgroundColor = '#a35227'
})

plusBtn.addEventListener('mouseup', () => {
  plusBtn.style.backgroundColor = '';
})

plusBtn.addEventListener('click', () => {
  quantityCount++
  quantitySpace.textContent = quantityCount;
})

cartBtn.addEventListener('mousedown', () => {
  cartBtn.style.backgroundColor = '#a35227';
})

cartBtn.addEventListener('mouseup', () => {
  cartBtn.style.backgroundColor = '';
})

cartBtn.addEventListener( 'click', () => {
  alert('Item already added in the shopping cart');
});


// Footer-section
let instagram = document.getElementById('insta');
let whatsapp = document.getElementById('what');
let facebook = document.getElementById('face');

instagram.addEventListener('mousedown', () => {
  instagram.style.color = "#ea2a15";
})

instagram.addEventListener('mouseup', () => {
  instagram.style.color = '';
})

instagram.addEventListener('click', () => {
  window.open('https://www.instagram.com/');
})

whatsapp.addEventListener('mousedown', () => {
  whatsapp.style.color = '#28C244';
})

whatsapp.addEventListener('mouseup', () => {
  whatsapp.style.color = '';
})

whatsapp.addEventListener('click', () => {
  window.open('https://www.whatsapp.com/');
})

facebook.addEventListener('mousedown', () => {
  facebook.style.color = '#2865C2';
})

facebook.addEventListener('mouseup', () => {
  facebook.style.color = '';
})

facebook.addEventListener('click', () => {
  window.open('https://www.facebook.com/');
})


// Shopping Cart Functionality
let shop = document.getElementById('profile-photo');

shop.addEventListener('click', () => {
  console.log('No items in the cart');
})
