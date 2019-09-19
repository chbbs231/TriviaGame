/*const questions= [{
 q1 = `Which movie features Bruce Willis as John McClane, a New York police officer, taking on a gang of criminals in a Los Angeles skyscraper on Christmas Eve?`,
  choices= `A.) Die hard
            B.) The Whole Nine Yards
            C.) Red
            D.) Tears of the Sun`
          },{
  q2=`What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?`,
  choices= `A.) ryan Newman
            B.) Frodo
            C.) John M. Brinnin
            D.) Mumble`
          },{
  q3 =`Which 1997 science fiction movie starring Will Smith and Tommy Lee Jones tells the story of a secret agency that polices alien refugees who are living on earth disguised as humans?`,
  choices= `A.) Wild Wild West
            B.) MIB
            C.) Independence day
            D.) Hancock`
          },{
  q4 = `Which Tom Hanks movie won the Academy Award for Best Picture in 1994?`,
  choices = `A.) Toy Story
             B.) Forest Gump
             C.) Saving Private Ryan
             D.) Vault of Horrors 1` 
},{
  q5 = ` Who played Jack Dawson in the 1997 epic Titanic?`,
  choices = `A.) Keanu Reeves
             B.) Tom Hanks
             C.) Ryan Reynolds
             D.) Leonardo DiCaprio
`}
]
  */
  
M.Modal.init(document.querySelectorAll('.modal'),{})

const starttrv = () =>{
  M.Modal.getInstance(document.getElementById('game')).open()
}
const next = () =>{
 M.Modal.getInstance(document.getElementById('nextquest')).close()
}

document.getElementById('starttrv').addEventListener('click', starttrv)
  
document.getElementById('nextquest').addEventListener('click', nextquest)
