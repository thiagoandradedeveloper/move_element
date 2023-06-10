window.onload = () => {
    const element = document.getElementById('container');
    const elementChild = document.getElementById('elemento');
    
    element.addEventListener("dragend",(event)=>{        
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