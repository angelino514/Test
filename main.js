// add menu button 

let button_Menu = document.querySelector('.button-menu')

button_Menu.addEventListener('click', ()=>{
  let div_Navbar = document.querySelector('.div-navbar')
  
  div_Navbar.classList.add('activo-Navbar')
})

// button-WatsAp remove


let remoVe = document.querySelector('.remove')

remoVe.addEventListener('click' , ()=>{
  let div_Navbar = document.querySelector('.div-navbar')

   div_Navbar.classList.remove('activo-Navbar')
  
})


// link add link_Activo

let link = document.querySelectorAll('.link')

link.forEach((link_element)=>{
  link_element.addEventListener('click' , ()=>{
    let link_activo = document.querySelector('.link-activo')
    link_activo.classList.remove('link-activo')
    
    link_element.classList.add('link-activo')
  })
})