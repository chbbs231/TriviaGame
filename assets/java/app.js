let questions= [{
 q1 = `Which movie features Bruce Willis as John McClane, a New York police officer, taking on a gang of criminals in a Los Angeles skyscraper on Christmas Eve?`,
  choiceA: `Die hard`,
  choiceB:  `The Whole Nine Yards`,
  choiceC:  `Red`,
  choiceD:  `Tears of the Sun`,
  correct: `A`
     },{
  q2=`What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?`,
  choiceA: `Ryan Newman`,
  choiceB: `Frodo`,
  choiceC: `John M. Brinnin`,
  choiceD: `Mumble`,
  correct: `B`
          },{
  q3 =`Which 1997 science fiction movie starring Will Smith and Tommy Lee Jones tells the story of a secret agency that polices alien refugees who are living on earth disguised as humans?`,
  choiceA: `Wild Wild West`,
  choiceB: `MIB`,
  choiceC: `Independence day`,
  choiceD: `Hancock`,
  correct: `B`
          },{
  q4 = `Which Tom Hanks movie won the Academy Award for Best Picture in 1994?`,
  choiceA: `Toy Story`,
  choiceB: `Forest Gump`,
  choiceC: `Saving Private Ryan`,
  choiceD: `Vault of Horrors 1`,
  correct: `B`
},{
  q5 = ` Who played Jack Dawson in the 1997 epic Titanic?`,
  choiceA: `Keanu Reeves`,
  choiceB: `Tom Hanks`,
  choiceC:  `Ryan Reynolds`,
  choiceD: `Leonardo DiCaprio`,
  correct: `D`
}
]

  
M.Modal.init(document.querySelectorAll('.modal'),{})

const starttrv = () =>{
  M.Modal.getInstance(document.getElementById('game')).open()
}
const next = () =>{}

document.getElementById('starttrv').addEventListener('click', starttrv)
  
document.getElementById('nextquest').addEventListener('click', nextquest)
