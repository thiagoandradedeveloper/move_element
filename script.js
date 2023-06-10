window.onload = () => {
    const element = document.getElementById('container');
    const elementChild = document.getElementById('elemento');

    let xChild;
    let yChild;

    elementChild.addEventListener("mousedown",(event)=>{
        xChild = event.offsetX
        yChild = event.offsetY
    })
    
    element.addEventListener("dragend",(event)=>{        
        x = event.clientX;
        y = event.clientY;
        elementChild.style.top = (y-yChild-8) + "px";
        elementChild.style.left = (x-xChild-8) + "px";
    })
}