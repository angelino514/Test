// add menu 

let button_menu = document.querySelector('.button-menu')

button_menu.addEventListener('click' , ()=>{
 
 let div_navbar = document.querySelector('.div-navbar')
 
 div_navbar.classList.add('div-navbar-acivo')
 
})

// remove menu

let button_remove = document.querySelector('.button-remove')

button_remove.addEventListener('click' , ()=>{
 
 let div_navbar = document.querySelector('.div-navbar')

   div_navbar.classList.remove('div-navbar-acivo')
 
})

let link = document.querySelectorAll('.link')

link.forEach((link_element)=>{
  link_element.addEventListener('click', ()=>{
    let link_activo = document.querySelector('.link-activo')
    link_activo.classList.remove('link-activo')
    
    link_element.classList.add('link-activo')
  })
})