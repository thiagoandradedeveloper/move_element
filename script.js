window.onload = () => {
    const element = document.getElementById('container');
    const elementChild = document.getElementById('elemento');

    /*
        eventos de mouse: mouseup, mousedown, 
            mouseenter => ao entrar o mouse
            mousedown => é o mesmo que click
    */

    element.addEventListener("mousedown",()=>{
        alert()
    })
    
    element.addEventListener("dragend",(event)=>{

        alert(elementChild.offsetWidth+'-'+elementChild.offsetHeight+'-'+elementChild.offsetParent+'-'+elementChild.offsetLeft+'-'+element.offsetTop)        

        x = event.clientX;
        y = event.clientY;
        elementChild.style.top = (y-50) + "px";
        elementChild.style.left = (x-50) + "px";
    })

    element.addEventListener("click",(event)=>{
        event.clientX = 200;
        event.clientY = 200;
    })
}