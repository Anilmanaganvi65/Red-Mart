
const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');

document.onclick = function (e) {
    if (e.target.id !== 'sidebar ' && e.target.id !== 'toggle') {
        toggle.classList.remove('active');
        sidebar.classList.remove('active')

    }
}

toggle.onclick = function () {
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');


}

// cart functionality

var cartclose = document.getElementById('cart-close');
var sb = document.getElementById('sidebar-cart');
var cartSidebar = document.getElementById('cart-items');

cartSidebar.onclick = function(){
  cartSidebar.classList.toggle('active-cart');
  sb.classList.toggle('active-cart');
}
cartclose.onclick = function(){
  cartSidebar.classList.toggle('cart-closser');
  sb.classList.toggle('cart-closser');
  cartSidebar.classList.remove('active-cart');
  sb.classList.remove('active-cart');
}

// reg form validation


var str= document.getElementById("str");
var pass = document.getElementById("password");
var message = document.getElementById("unknown");
pass.oninput = function(){
  if(pass.length > 0){
    message.style.display = "block";
  }
  else{
    message.style.display ="none";
  }
}



