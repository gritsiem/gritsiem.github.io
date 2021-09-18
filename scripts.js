function getRandomColor(){for(var o="#",t=0;t<6;t++)o+="0123456789ABCDEF"[Math.floor(16*Math.random())];return o}function makeHTML(o){console.log(o);let t="";o.map(o=>{color1=getRandomColor(),color2=getRandomColor(),angle=360*Math.random(),t+=`
        <div class="col">
        <div class="card h-100">
        <div class="card-img" style="background: linear-gradient(${angle}deg, ${color1}, ${color2}); border:none; height:100px; opacity:0.4" ></div>
        <div class="card-img-overlay">
          <h5 class="card-title">${o.title}</h5>
          <p class="card-text">${o.description}</p>
        </div>
        <div class="card-footer">
        <a href="${o.link}" target="blank">Find out more</a>
        </div>
        </div>
      </div>`});o=document.getElementById("portfolio");tabcontent=o.querySelector(".cards-row"),tabcontent.innerHTML=t}function getProjects(){var o=new XMLHttpRequest;o.open("GET","https://portfolio-b754d-default-rtdb.asia-southeast1.firebasedatabase.app/projects.json",!0),o.onload=function(){200<=o.status&&o.status<400?makeHTML(JSON.parse(o.responseText)):console.log("oops")},o.onerror=function(){},o.send()}getProjects();
function explore(){intro=document.querySelectorAll(".intro .col"),introparent=intro[0].parentNode.parentNode,console.log(introparent);for(var e=0;e<intro.length;e++)intro[e].classList.add("explore-anim");introparent.classList.add("pull-up"),document.querySelector(".more-about").style.display="block",elm.parentNode.style.display="none"}elm=document.querySelector(".explore-button p"),elm.addEventListener("click",explore),elm.addEventListener("onscroll",function(e){this.oldScroll<this.scrollY&&explore(),this.oldScroll=this.scrollY}),skilcells=document.getElementsByClassName("skill-cell");