
// function initMenu(){
//   var links = document.querySelectorAll("#top-menu-bar a");
//  for(var i=0; i<links.length; i++ ){
//    //console.log(links[i].getAttribute('data-page'), links[i]);
//    links[i].onclick = function(){
     
//      $('.page-block').hide();
//      var page = this.getAttribute('data-page');
     
//      $('#' + page + "-page").fadeIn();
//     }
//   }

// }

// function displaySkills(skills){
//   var resultList = document.querySelector('#skills-page ul');

//   var listItems = skills.map(function(skill) {
//     var endorsedBy = '- Endorsed by';
//     if(skill.endorsedBy == ""){
//       endorsedBy = "";
//     }
//     var name = skill.name.toUpperCase();
//     return `<li> ${name}
//      <span style="color:gray">- ${skill.endorsments} ${endorsedBy}</span> 
//      ${skill.endorsedBy}</li>`;
//   });

//   resultList.innerHTML = listItems.join('');

// }

// function initSkillsPage(){
//   // console.info('first step in initSkillsPage');
  
//   $.ajax('data/skills.json').done(function(skills){
//     console.info('skills from server', skills);
//     displaySkills(skills);

//   });
// }


// initMenu();
// $('#skills-page').show();
// initSkillsPage();




function initMenu() {
  var links = document.querySelectorAll("#top-menu-bar a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      $('.page-block').hide()
      var page = this.getAttribute('data-page');
      $('#' + page + "-page").fadeIn();
    };
  }
}

function initSkillsPage() {
  var skills = [
    {name: 'HTML', endorsments : 7, endorsedBy: 'Cristian'},
    {name: 'CSS', endorsments : 6, endorsedBy: 'Andrei'},
    {name: 'JS', endorsments : 3, endorsedBy: 'Matei'},
    {name: 'SQL', endorsments : 3, endorsedBy: ''},
    {name: 'mySQL', endorsments : 3, endorsedBy: ''}
  ];
  var resultList = document.querySelector('#skills-page ul');

var listItems = skills.map(function(skill) {
  var endorsedBy = ' - Endorsed by'
  if (skill.endorsedBy == "") {
    endorsedBy = "";
  }
  var name = skill.name.toUpperCase();
  return `<li>${name}
  <span style="color: gray">- ${skill.endorsments} ${endorsedBy}</span> 
  ${skill.endorsedBy}
  </li>`;
});
  resultList.innerHTML = listItems.join('');
}

initMenu();
$('#skills-page').fadeIn();
initSkillsPage();
