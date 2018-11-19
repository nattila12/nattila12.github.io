function $(id){
  return document.getElementById(id);
}

function hide(id){
  $(id).style.display = "none";
}

function show(id){
  $(id).style.display = "block";
}



function hideAllPages(){
  var pages = document.querySelectorAll(".page-block");
  pages.forEach(function(page){
    
    page.style.display = "none";

  });
  
}


var links = document.querySelectorAll("#top-menu-bar a");
for(var i=0; i<links.length; i++ ){
  //console.log(links[i].getAttribute('data-page'), links[i]);
  links[i].onclick = function(){
    console.warn('hide all pages');
    hideAllPages();
    var page = this.getAttribute('data-page');
    show(page + "-page");
  }
}

show("home-page");