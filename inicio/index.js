function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open');
    }
}
function enviado(){
    var text = document.getElementById('text').value;
   
    if(text == "Brasil"){
        alert('Secess')
        
    }else{
        alert('Open')
    }
}


