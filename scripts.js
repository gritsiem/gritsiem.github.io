function getRandomColor(){for(var e="#",o=0;o<6;o++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function makeHTML(e){console.log(e);let o="";e.map(e=>{color1=getRandomColor(),color2=getRandomColor(),angle=360*Math.random(),o+=`
        <div class="col">
        <div class="card h-100">
        <div class="card-img" style="background: linear-gradient(${angle}deg, ${color1}, ${color2}); border:none; height:100px; opacity:0.4" ></div>
        <div class="card-img-overlay">
          <h5 class="card-title">${e.title}</h5>
          <p class="card-text">${e.description}</p>
        </div>
        <div class="card-footer">
        <a href="${e.link}" target="blank">Find out more</a>
        </div>
        </div>
      </div>`}),e=document.getElementById("portfolio"),tabcontent=e.querySelector(".cards-row"),tabcontent.innerHTML=o}function getProjects(){var e=new XMLHttpRequest;e.open("GET","https://portfolio-b754d-default-rtdb.asia-southeast1.firebasedatabase.app/projects.json",!0),e.onload=function(){200<=e.status&&e.status<400?makeHTML(JSON.parse(e.responseText)):console.log("oops")},e.onerror=function(){},e.send()}function explore(){intro=document.querySelectorAll(".intro .col"),introparent=intro[0].parentNode.parentNode,console.log(introparent);for(var e=0;e<intro.length;e++)intro[e].classList.add("explore-anim");introparent.classList.add("pull-up"),document.querySelector(".vio").classList.add("skew"),document.querySelector(".more-about").style.display="block",elm.parentNode.style.display="none"}getProjects(),elm=document.querySelector(".explore-button p"),elm.addEventListener("click",explore),elm.addEventListener("onscroll",function(e){this.oldScroll<this.scrollY&&explore(),this.oldScroll=this.scrollY}),skilcells=document.getElementsByClassName("skill-cell");