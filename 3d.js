const cubo =document.getElementById('cuboDiv');
cubo.addEventListener('mousemove',(e)=>{
    cubo.style='transform: rotateY('+
     (e.layerX*1.5)+'deg) rotateX('+Math.abs(-e.layerY*1.5)+'deg);';});
    
