function $(id){
  return document.getElementById(id);
}

function hide(id){
  $(id).style.display = "none";
}

function show(id){
  $(id).style.display = "block";
}



function showHomePage() {
  hide("skills-page");
  hide("languages-page");
  show("home-page");
}


function showSkillsPage() {
  hide("home-page");
  hide("languages-page");
  show("skills-page");

}


function showLimbiCunoscutePage() {
  hide("home-page");
  hide("skills-page");
  show("languages-page");
}


$("home-menu").onclick = showHomePage;
$("skills-menu").onclick = showSkillsPage;
$("languages-menu").onclick = showLimbiCunoscutePage;