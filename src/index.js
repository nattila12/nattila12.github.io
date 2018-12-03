


function initMenu(){
  var links = document.querySelectorAll("#top-menu-bar a");
 for(var i=0; i<links.length; i++ ){
   //console.log(links[i].getAttribute('data-page'), links[i]);
   links[i].onclick = function(){
     
     $('.page-block').hide();
     var page = this.getAttribute('data-page');
     
     $('#' + page + "-page").fadeIn();
    }
  }

}


function initSkillsPage(){
  var skills = [
    {name: 'js', endorsments:7, endorsedBy: 'Andrei'},
    {name: 'html', endorsments:6, endorsedBy: 'Andrea'},
    {name: 'css', endorsments:2, endorsedBy: ''}
  ];
  var resultList = document.querySelector('#skills-page ul');

  var listItems = skills.map(function(skill) {
    var endorsedBy = '- Endorsed by';
    if(skill.endorsedBy == ""){
      endorsedBy = "";
    }
    var name = skill.name.toUpperCase();
    return `<li> ${name}
     <span style="color:gray">- ${skill.endorsments} ${endorsedBy}</span> 
     ${skill.endorsedBy}</li>`;
  });

  resultList.innerHTML = listItems.join('');

}

initMenu();

$('#skills-page').show();
initSkillsPage();