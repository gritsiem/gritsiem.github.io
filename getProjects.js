
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
function makeHTML(projects){
    console.log(projects)
    let html = ''
    // <img src="..." class="card-img-top" alt="..."> <canvas class="card-img-top"> </canvas>
    projects.map(item=>{
        color1 = getRandomColor()
        color2 = getRandomColor()
        angle = Math.random()*360
        html+= `
        <div class="col">
        <div class="card h-100">
        <div class="card-img" style="background: linear-gradient(${angle}deg, ${color1}, ${color2}); border:none; height:100px; opacity:0.4" ></div>
        <div class="card-img-overlay">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">link</small>
        </div>
        </div>
      </div>`
})

var tab = document.getElementById("portfolio")
tabcontent = tab.querySelector(".cards-row")
tabcontent.innerHTML = html;
initCanvas();
}

function getProjects(){
    var request = new XMLHttpRequest();
    var projects;
request.open('GET', 'projects.json', true);


request.onload = function(){ 
    if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    makeHTML(data.projects)
  } else {
      console.log("oops")
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};
request.send()
}

getProjects();



