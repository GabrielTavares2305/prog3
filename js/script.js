
//Selecionando os elementos que serao manipulados
var btnMenu = document.querySelector('.btn-menu');
var menuSidebar = document.querySelector('.menu-sidebar');

// Add o evento de clique ao botao

btnMenu.addEventListener('click',function(){

    menuSidebar.classList.toggle('.menu-sidebar-show');
})

function abrirModal(){
    //alert('abrir modal')
    document.querySelector('.bg-modal').style.visibility='visible';
}

function fecharModal(){
    //alert('fechar modal')
    document.querySelector('.bg-modal').style.visibility='hidden';
}