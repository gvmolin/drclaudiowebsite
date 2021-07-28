if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', pronto)
} else {
    pronto()
}

function pronto(){
    var menu = document.querySelector(".menu")
    var hamburguer = document.querySelector(".botao-hamburguer")
    hamburguer.addEventListener(
        'click', ()=>{
            if(menu.style.display === 'none'){
                menu.style.display = 'block'
            }
            else{
                menu.style.display = 'none'
            }
        }
    )
}
