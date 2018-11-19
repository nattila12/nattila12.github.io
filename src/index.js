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
  hide("education-page");
  hide("languages-page");
  show("home-page");
}


function showSkillsPage() {
  hide("home-page");
  hide("education-page");
  hide("languages-page");
  show("skills-page");

}

function showEducationPage() {
  hide("home-page");
  hide("skills-page");
  hide("languages-page");
  show("education-page");


}


function showLimbiCunoscutePage() {
  hide("home-page");
  hide("skills-page");
  hide("education-page");
  show("languages-page");
}


$("home-menu").onclick = showHomePage;
$("skills-menu").onclick = showSkillsPage;
$("education-menu").onclick = showEducationPage;
$("languages-menu").onclick = showLimbiCunoscutePage;