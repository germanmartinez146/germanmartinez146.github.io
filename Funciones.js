

let HideText_btns = document.getElementById('HideText_btns');

let HideText = document.getElementById('HideText');

HideText_btns.addEventListener('click', toggleText);

function toggleText() {
  HideText.classList.toggle('show')

if(HideText.classList.contains('show')) {
HideText_btns.innerHTML= 'Leer Menos'
}

else(HideText_btns.innerHTML= 'Contacto de referencia')

}



let Contacto2 = document.getElementById('Contacto2');

let HideTextAndres = document.getElementById('HideTextAndres');

Contacto2.addEventListener('click',toggle);

function toggle() {
  HideTextAndres.classList.toggle('show1')
  
  
  if(HideTextAndres.classList.contains('show1')) {
    Contacto2.innerHTML= 'Leer Menos'
    }
    
    else(Contacto2.innerHTML= 'Contacto de referencia')
    
    
}



let Contacto3 = document.getElementById('Contacto3');

let HideTextSonia = document.getElementById('HideTextSonia');

Contacto3.addEventListener('click',toggleSonia);

function toggleSonia() {
  HideTextSonia.classList.toggle('show2')
  
  
  if(HideTextSonia.classList.contains('show2')) {
    Contacto3.innerHTML= 'Leer Menos'
    }
    
    else(Contacto3.innerHTML= 'Contacto de referencia')
    
    
}
