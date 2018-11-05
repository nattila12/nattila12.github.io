function learnVariables() {
  console.info(0);

  function sayWellcome() {
    console.info("Salut " + prenume + ",bine ai venit la noi!");
  }

  var nume = "Attila";
  var prenume = "Nagy";
  var owner = "Attila's";
  var msg1 = 'ai zis "Atty"?';
  var msg2 = 'Nu, am zis "Attila"';
  var template = `Text cu ghilimele "sau simple'`;
  sayWellcome();

  var skills = ["html", "css", "js"];

  prenume = "Atty";

  console.info("toate variabilele au fost initializate");
  console.log(nume);
  console.debug("cum te cheama? -" + prenume);
  sayWellcome();
}
//learnVariables();

//schimb valutar
var cursEur = 4.5;
var myEur = 20;
var myRon = 0;
var friendEur = 100;
var friendRon = 0;
//operatori  * / + -

myRon = myEur * cursEur;
console.info("eu am " + myRon + "Ron");

friendRon = friendEur * cursEur - (friendEur * 1) / 100;
console.info("tu ai " + friendRon + "Ron");

var ATMFunds = 50000;
var funds = 5000;

function getExtractFee(amount) {
  var comision = amount * 0.01;
  if (comision < 2.5) {
    comision = 2.5;
    console.warn("comision minim aplicat");
  }
  return comision;
}

//TODO implement
function checkExtractPermission() {
  return true;
}

function extractFromAtm(amount) {
  console.info("==== ==== ==== ====");
  console.info("suma extrasa este: " + amount);
  var comision = getExtractFee(amount);

  var totalExtract = amount + comision;

  if (totalExtract > funds) {
    console.error("insufficient funds");
    return;
  }
  if (ATMFunds < totalExtract) {
    console.error("ATM insufficient funds");
    return;
  }
  funds = funds - totalExtract;
  //ATMFunds = ATMFunds - ammount;
  ATMFunds -= amount;

  console.info("comision aplicat:" + comision);
  console.info("sold curent:" + funds);
  console.info("==== ==== ==== ====");
  console.info("==== ==== ==== ====");
}

extractFromAtm(1005); // nu e multiplu de 10
extractFromAtm(100000); // solduri insuficiente
extractFromAtm(3000);
extractFromAtm(3000);
extractFromAtm(100);
