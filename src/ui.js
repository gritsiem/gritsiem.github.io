elm = document.querySelector('.explore-button p')

function explore(){
    intro = document.querySelectorAll('.intro .col');
    introparent = intro[0].parentNode.parentNode;
    console.log(introparent)
    for(var i = 0; i<intro.length; i++){
        intro[i].classList.add("explore-anim");
    }
    
    introparent.classList.add("pull-up");
    document.querySelector(".more-about").style.display='block';
    elm.parentNode.style.display = 'none';
}
elm.addEventListener("click", explore);
elm.addEventListener("onscroll",function(e) {
    // print "false" if direction is down and "true" if up
    if(this.oldScroll < this.scrollY){
        explore();
    };
    this.oldScroll = this.scrollY;
});