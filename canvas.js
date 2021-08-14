function initCanvas(){
    
    // canvas.height='100px';
    c = []
    console.log(canvas)
    for(var i =0;i<canvas.length;i++){
        c[i] = canvas[i].getContext('2d');
        var w = Math.floor(canvas[i].width*Math.random()+1)
        var h = Math.floor(canvas[i].height*Math.random()+1)
        c[i].fillStyle='blue';
        c[i].fillRect(w,h,20,20)
    }
    
}

var canvas = document.getElementById("main-canvas")
c = canvas.getContext('2d');
canvas.width=window.innerWidth-20;
canvas.height=window.innerHeight-20;
// var w = Math.floor(canvas.width*Math.random()+1)
// var h = Math.floor(canvas.height*Math.random()+1)
c.beginPath()

c.lineTo(canvas.width+5,0)
c.lineTo(0,canvas.height)
c.lineTo(0,0)
c.fillStyle = '#e29578';
c.fill()
c.closePath()
