let width
let length
let direction
let context
let iLength
let iWidth
let input=''
document.addEventListener('DOMContentLoaded', function (e) {
    
    document.addEventListener('click', function(e){
        e.preventDefault()
        getStarted()
        if(e.target.id==='render-canvas'){
            renderCanvas()
        const landscape=document.getElementById('landscape')
        landscape.innerHTML=`length: ${length-.5} Width: ${width-.5}`
        const initial=document.getElementById('initial')
        initial.innerHTML=`X: ${iLength} Y: ${iWidth} Direction: ${direction}`
        }

        
        
    })

    document.addEventListener('keypress', function(e){
        if(e.key==='l' || e.key==='L'){
            input= input+ 'L'
            turnLeft()
            
        }
        else if(e.key==='r' || e.key==='R'){
            input= input + 'R'
            turnRight()
            
        }
        else if(e.key==='m' || e.key==='M'){
            input= input+ 'M'
            moveRover()
            
        }
        else if(e.key==='Enter'){
            printOutputAndInput()
            input=''
        }
    })

    const renderCanvas=()=>{
        
        switch(direction){
            case 'N': turnNorth()
                      break;
            case 'E': turnEast()
                      break;
            case 'S': turnSouth()
                      break;
            case 'W': turnWest()
                      break;
            default: context.clearRect(0,0, 500,500)
        }
        console.log(length, width, iLength, iWidth, direction)

    }

    

    const getStarted=()=>{
        length=parseInt(document.getElementById('length').value)+.5
        width=parseInt(document.getElementById('width').value)+.5
        iLength=parseInt(document.getElementById('i-length').value)
        iWidth=parseInt(document.getElementById('i-width').value)
        direction=document.getElementById('direction').value  
    }

    const turnNorth=()=>{
        getCanvas()
        context.clearRect(0,0, 500,500)
        context.moveTo(500/length*iLength, 500-500/width*iWidth)
        context.lineTo(500/length*iLength+500/length*.5,500-500/width*iWidth)
        context.lineTo(500/length*iLength+(500/length)*.25, 500-500/width*iWidth-500/width*.5)
        context.lineTo(500/length*iLength, 500-500/width*iWidth)
        context.stroke()
        context.fillStyle='red'
        context.fill()
    }
    const turnEast=()=>{
        getCanvas()
        context.clearRect(0,0, 500,500)
        context.moveTo(500/length*iLength, 500-500/width*iWidth)
        context.lineTo(500/length*iLength,500-500/width*iWidth-500/width*.5)
        context.lineTo(500/length*iLength+(500/length)*.5, 500-500/width*iWidth-500/width*.25)
        context.lineTo(500/length*iLength, 500-500/width*iWidth)
        context.fillStyle='red'
        context.fill()
        context.stroke()
        console.log(typeof(iLength))
    }

    const turnSouth=()=>{
        getCanvas()
        context.clearRect(0,0, 500,500)
        context.moveTo(500/length*iLength, 500-500/width*(iWidth+.5))
        context.lineTo(500/length*iLength+500/length*.5,500-500/width*(iWidth+.5))
        context.lineTo(500/length*iLength+(500/length)*.25, 500-500/width*iWidth)
        context.lineTo(500/length*iLength, 500-500/width*(iWidth+.5))
        context.stroke()
        context.fillStyle='red'
        context.fill()
    }

    const turnWest=()=>{
        getCanvas()
        context.clearRect(0, 0, 500,500)
        context.moveTo(500/length*(iLength+.5), 500-500/width*iWidth)
        context.lineTo(500/length*(iLength+.5),500-500/width*(iWidth+.5))
        context.lineTo(500/length*iLength, 500-500/width*iWidth-500/width*.25)
        context.lineTo(500/length*(iLength+.5), 500-500/width*iWidth)
        context.stroke()
        context.fillStyle='red'
        context.fill()
    }

    const getCanvas=()=>{
        var plateau = document.getElementById("plateau");
        context = plateau.getContext("2d");
        context.beginPath()
    }

    const turnLeft=()=>{
        
        switch(direction){
            case 'N': turnWest()
            direction='W'
            break;
            case 'E': turnNorth()
            direction='N'
            break;
            case 'S': turnEast()
            direction='E'
            break;
            case 'W': turnSouth()
            direction='S'
        }
        
    }
    const turnRight=()=>{
        
        switch(direction){
            case 'N': turnEast()
            direction='E'
            break;
            case 'E': turnSouth()
            direction='S'
            break;
            case 'S': turnWest()
            direction='W'
            break;
            case 'W': turnNorth()
            direction='N'
        }
        
    }

    const moveRover=()=>{
        
            switch(direction){
                case 'N': 500/width*(iWidth+1.5) <= 500 && iWidth++
                renderCanvas()
                break;
                case 'E': 500/length*(iLength+1.5) <= 500 &&iLength++
                renderCanvas()
                break;
                case 'S':  500/width*(iWidth-1) >= 0 && iWidth-- 
                renderCanvas()
                break;
                case 'W': 500/length*(iLength-1)>=0 && iLength--
                renderCanvas()
                break;
            }
        
        console.log(iWidth, iLength)
    }

    const printOutputAndInput=()=>{
        let iLi=document.createElement('li')
            iLi.innerText=`${input}`
            document.getElementById('input-ul').appendChild(iLi)
            let oLi=document.createElement('li')
            oLi.innerText=`${iLength} x ${iWidth}`
            document.getElementById('output-ul').appendChild(oLi)
    }
})