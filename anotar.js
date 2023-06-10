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
    elementChild.style.top  = (y) + "px";
    elementChild.style.left = (x) + "px";
})

        //padding <= 10px / border <= 20px / margin <= 30px 
        //left <= 50px / width <= 45px / scrool <= 25px / barra rolagem <= 15px
        //alert(elementChild.offsetWidth) //(padding*2 + border*2 + 
                                        //width) ignora o conteudo
        //alert(elementChild.clientWidth) //(conteudo visivel + padding) sem a barra de rolagem
        //alert(elementChild.scrollWidth) //(conteudo visivel + conteudo invisivel(incluindo o padding| excluindo a borda e barra de rolagem))
        //alert(elementChild.clientLeft) // (borda)
        //alert(elementChild.offsetLeft) //(margin + left)
        
        const style = getComputedStyle(elementChild); //todas os estios css do elemento
        //console.log(style.getPropertyValue('margin-left')) //pegar a margem esquerda
        //console.log(style.getPropertyValue('border-left-width')) //pegar a espessura da borda esquerda

        //tamanho da barra de rolagem independente da borda
        let sizeBorderPlusScrollBar = elementChild.offsetHeight - elementChild.clientHeight
        let sizeBorder = (style.getPropertyValue('border-left-width').replace("px","")*1)+(style.getPropertyValue('border-right-width').replace("px","")*1)
        let tamanho = sizeBorderPlusScrollBar - sizeBorder
        alert(tamanho)
        
        //alert(elementChild.offsetWidth+'-'+elementChild.offsetHeight+'-'+elementChild.offsetParent+'-'+elementChild.offsetLeft+'-'+element.offsetTop)        


        event.offsetX
        event.clientX
        event.movementX
        event.pageX