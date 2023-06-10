window.onload = () => {
    const element = document.getElementById('container');
    const elementChild = document.getElementById('elemento');

    /*
        eventos de mouse: mouseup,  
            mouseenter => ao entrar o mouse
            mousedown => é o mesmo que click
            contextmenu => click botao direito
    */
    
    element.addEventListener("dragend",(event)=>{
        
        //alert(elementChild.offsetWidth+'-'+elementChild.offsetHeight+'-'+elementChild.offsetParent+'-'+elementChild.offsetLeft+'-'+element.offsetTop)        
        x = event.clientX;
        y = event.clientY;
        elementChild.style.top = (y-10-Math.floor((elementChild.offsetHeight/2))) + "px";
        elementChild.style.left = (x-10-Math.floor((elementChild.offsetWidth/2))) + "px";
    })

    element.addEventListener("click",(event)=>{
        event.clientX = 200;
        event.clientY = 200;
    })
}