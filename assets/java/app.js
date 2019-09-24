let counter =15;
let currentQuest =2;
let score =0;
let timer;

const question = document.getElementById(`quiz`)
const count = document.getElementById(`timer`)
const progress = document.getElementById( `score`)

const tQuestions= [
  {
  question:`Which movie features Bruce Willis as John McClane, a New York police officer, taking on a gang of criminals in a Los Angeles skyscraper on Christmas Eve?`,
  choices: [ `Die hard`,
            `The Whole Nine Yards`,
            `Red`,
            `Tears of the Sun`,],
  correctans: `Die Hard`
     },
     {
  question:`What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?`,
  choices: [  `Ryan Newman`,
              `Frodo`,
              `John M. Brinnin`,
              `Mumble`,],
  correctans: `Frodo`
          },
          {
  question: `Which 1997 science fiction movie starring Will Smith and Tommy Lee Jones tells the story of a secret agency that polices alien refugees who are living on earth disguised as humans?`,
  choices: [ `Wild Wild West`,
              `MIB`,
              `Independence day`,
              `Hancock`,],
  correctans: `MIB`
          },
          {
  question: `Which Tom Hanks movie won the Academy Award for Best Picture in 1994?`,
  choices: [ `Toy Story`,
             `Forest Gump`,
             `Saving Private Ryan`,
             `Vault of Horrors 1`,],
  correctans: `Forest Gump`
},{
  question: ` Who played Jack Dawson in the 1997 epic Titanic?`,
  choices: [ `Keanu Reeves`,
             `Tom Hanks`,
             `Ryan Reynolds`,
             `Leonardo DiCaprio`,],
   correctans:`Leonardo DiCaprio`
}
]
function renderQuestion(){
   const question  = tQuestions[currentQuest].question;
   const choices = tQuestions[currentQuest].choices;

  
  quiz.innerHTML = (`<h1>`+ question +`</h1>`);
  choices.innerHTML = (`<h2>`+ choices +`</h2>`);
}
  
renderQuestion();

function loadchoices (choices){
  let result = ``;
  for (let i = 0; i < choices.length; i++){
    results += `<p class = "choices" data-answers="${choices[i]}">${choices[i]}</P>`;
  }
  return result;
}
M.Modal.init(document.querySelectorAll('.modal'),{})
M.Modal.getInstance(document.getElementById('game',)).open();
document.getElementById('starttrv').addEventListener('click', starttrv)
document.getElementById('nextquest').addEventListener('click', nextquest).open();


  


  
 
    
  
  





const next = () =>{
const nextquest = tQuestions.length -1;}

