

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

// var cartclose = document.getElementById('cart-close');
// var sb = document.getElementById('sidebar-cart');

// if(cartclose.onclick = true){
//   sb.style.display="none";
// }
// else{

// }



// reg form validation


var str= document.getElementById("str");
var pass = document.getElementById("password");
var message = document.getElementById("unknown");
pass.addEventListener('input', ()=>{
  if(pass.value.length > 0){
    message.style.display = "block"
  }
  else{
    message.style.display ="none"
  }
})