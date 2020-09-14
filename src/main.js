let width
let length
let direction
let context
let iLength
let iWidth
document.addEventListener('DOMContentLoaded', function (e) {
   
    document.addEventListener('click', function(e){
        e.preventDefault()
        if(e.target.id==='render-canvas'){
            renderCanvas()
        }
        
        
    })





    

    
    const renderCanvas=()=>{
        length=document.getElementById('length').value
        width=document.getElementById('width').value
        iLength=document.getElementById('i-length').value
        iWidth=document.getElementById('i-width').value
        direction=document.getElementById('direction').value
        console.log(length, width, iLength, iWidth, direction)
        var plateau = document.getElementById("plateau");
        context = plateau.getContext("2d");
        context.beginPath()
        context.moveTo(500/length*iLength, 500-500/width*iWidth)
        switch(direction){
            case 'N': turnNorth()
                      break;
            case 'E': context.clearRect(0,0, 500,500)
                      context.lineTo(500/length*iLength,500-500/width*iWidth-500/width*.5)
                      context.lineTo(500/length*iLength+(500/length)*.5, 500-500/width*iWidth-500/width*.25)
                      context.lineTo(500/length*iLength, 500-500/width*iWidth)
                      context.fillStyle='red'
                      context.fill()
                      context.stroke()
                      break;
            case 'S': context.clearRect(0,0, 500,500)
                      context.lineTo(500/length*iLength+500/length*.5,500-500/width*iWidth)
                      context.lineTo(500/length*iLength+(500/length)*.25, 500-500/width*iWidth+500/width*.5)
                      context.lineTo(500/length*iLength, 500-500/width*iWidth)
                      context.stroke()
                      context.fillStyle='red'
                      context.fill()
                      break;

            case 'W': context.clearRect(0,0, 500,500)
                      context.lineTo(500/length*iLength,500-500/width*iWidth-500/width*.5)
                      context.lineTo(500/length*iLength-(500/length)*.5, 500-500/width*iWidth-500/width*.25)
                      context.lineTo(500/length*iLength, 500-500/width*iWidth)
                      context.stroke()
                      context.fillStyle='red'
                      context.fill()
                      break;
            default: context.clearRect(0,0, 500,500)
        }
    }
    console.log(100*.5)

    const turnNorth=()=>{
        context.clearRect(0,0, 500,500)
        context.lineTo(500/length*iLength+500/length*.5,500-500/width*iWidth)
        context.lineTo(500/length*iLength+(500/length)*.25, 500-500/width*iWidth-500/width*.5)
        context.lineTo(500/length*iLength, 500-500/width*iWidth)
        context.stroke()
        context.fillStyle='red'
        context.fill()
    }
})