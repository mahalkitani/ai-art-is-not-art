var factList = [
  "Art comes in many forms. AI does not just scrape and plagiarize images, but also writing, music, and vocals/voices.",
  "An AI-generated image titled 'Théâtre D'opéra Spatial' won first place at the Colorado State Fair's fine arts competition in 2022.",
  "Artists aren't born as artists. The only real talent they are born with is the will to create, and the rest of their skill comes from hard work.",
  "You don't have to be an artist to appreciate hard work. All your average kindergarteners understand what it's like to make something with love.",
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

// Only add event listener if the button exists (on info.html page)
if (myButton) {
  myButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
