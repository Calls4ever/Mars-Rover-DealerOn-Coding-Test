
//declaring variables global scale so i can access them from everywhere
let width  //width of the landscape
let length  //length of the land scape
let direction  //direction of the rover
let context //context of my canvas
let iLength //x-axis coordinate of the rover
let iWidth //y-axis coordinate of the rover
let input='' //key input from user like l, m and r
document.addEventListener('DOMContentLoaded', function (e) {
    //only does the below operations after dom content is fully loaded
    document.addEventListener('click', function(e){
        e.preventDefault()
        //this function gets the data from the form
        getStarted()

        if(e.target.id==='render-canvas'){
            //renders the canvas as user defined
            renderCanvas()
            //prints the the input from the form in the HTML page
        const landscape=document.getElementById('landscape')
        landscape.innerHTML=`length: ${length-.5} Width: ${width-.5}`
        const initial=document.getElementById('initial')
        initial.innerHTML=`X: ${iLength} Y: ${iWidth} Direction: ${direction}`
        }

        
        
    })

    document.addEventListener('keypress', function(e){
        //listening to the key pressing and doing respective actions
        if(e.key==='l' || e.key==='L'){
            input= input+ 'L'
            //turns the triangular shape left to the original position
            turnLeft()
            
        }
        else if(e.key==='r' || e.key==='R'){
            input= input + 'R'
            //turns the triangular shape right to the original position
            turnRight()
            
        }
        else if(e.key==='m' || e.key==='M'){
            input= input+ 'M'
            //moves the triangular shape to the intended direction
            moveRover()
            
        }
        else if(e.key==='Enter'){
            //prints the output and key pressings once user hits the enter key
            printOutputAndInput()
            input=''
        }
    })

    const renderCanvas=()=>{
        //determining the shape of the triangle respect to the intended direction
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

    }

    

    const getStarted=()=>{
        //getting the values from the form
        length=parseInt(document.getElementById('length').value)+.5
        width=parseInt(document.getElementById('width').value)+.5
        iLength=parseInt(document.getElementById('i-length').value)
        iWidth=parseInt(document.getElementById('i-width').value)
        direction=document.getElementById('direction').value  
    }

    const turnNorth=()=>{
        //here i drawn the triangle half size of the unit of the coordinates of the landscape
        //meaning the original area of the landscape is 500x500 and i accommodated the area
        //user like to have by dividing the original area
        //and the triangle has to be in within one unit so it can move till the end of the wall
        
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
        //description from line 86-89

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
        //description from line 86-89
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
        //description from line 86-89
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
        //turns left respect to the current direction
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
        //turns right respect to the current direction
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
        //the value of axises are incremented of decremented to see the moving effect of the rover
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
        //prints the outputs (the final coordinates of the rover) and the inputs (key commands like r,l and m)
        let iLi=document.createElement('li')
            iLi.innerText=`${input}`
            document.getElementById('input-ul').appendChild(iLi)
            let oLi=document.createElement('li')
            oLi.innerText=`${iLength} x ${iWidth}`
            document.getElementById('output-ul').appendChild(oLi)
    }
    //end of the programme
    //thanks for reading!!
})