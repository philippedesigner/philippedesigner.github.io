let size = 50;
let dimension = 60;
//let mouseX = 0;
//let mouseY = 0; 

//GET MOUSE POSITION
document.addEventListener('mousemove', trackMouse);

function trackMouse(event){
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    console.log('Mouse position: '+mouseX+', '+mouseY );
    let newMouse = document.createElement('div');
    newMouse.style='=position: absolute; width: 60px; height: 60px; background-color: black; z-index:5; margin-left:' + mouseX - (dimension/2)+'px; margin-top:'+mouseY- (dimension/2)+'px;';
    document.getElementById('body').appendChild(newMouse);
}

function setInterval(){

}