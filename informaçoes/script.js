let img = document.querySelector('img');
window.addEventListener('scroll', function(){
   let value = 1 + this.window.screenY/-600;
   img.style.opacity = value;
})