const arr = [
  {
    id: "89776",
    question: "Koji je najveci organ u ljudskom telu?",
    answers: ["bubreg", "koza", "mozak", " pluca"],
    points: 5,
    correct: "koza",
  },
  {
    id: "987001",
    question: "Koliko dugo traje fudbalska utakmica?",
    answers: [70, 90, 45, 60],
    points: 5,
    correct: 90,
  },
  {
    id: "23541",
    question: "Koji je glavni grad Srbije?",
    answers: ["Novi Sad", "Beograd", "Subotica", "Novi Pazar"],
    points: 5,
    correct: "Beograd",
  },
  {
    id: "89776",
    question: "Koliko ima minut sekundi?",
    answers: [90, 45, 70, 60],
    points: 5,
    correct: 60,
  },
  {
    id: "8888",
    question: " Koliko okeana ima na svetu?",
    answers: [5, 8, 4, 6],
    points: 5,
    correct: 5,
  },
];

let currentQuestionIndex = 0; //index pitanja krece od 0,kao "[i]"  //brojac
let correctAns = 0; //poeni
const resultView = document.getElementById("page3"); //prikaz rezultata

const startQuiz = () => {
  resultView.style.display = "none"; // da se ne vidi dok ima pitanja

  if (currentQuestionIndex >= arr.length) {
    divPitanja = document.getElementById("pitanja");
    divPitanja.style.display = "none"; //kada nema vise pitanja da nam sakrije div sa pitanjem
    displayResult(); //i da se desi ova funk
  }

  let currQuestion = arr[currentQuestionIndex]; //prvo pitanje iz niza od 0 indexa ,(kao arr[i])
  console.log("Brojac", currentQuestionIndex);

  //ispisali smo pitanje
  let queDiv = document.getElementById("pitanje"); //mesto gde cemo da ispisemo pitanje
  queDiv.textContent = currQuestion.question; //pitanje

  //ispisali smo odgovore za to pitaje
  let parent = document.getElementById("odgovori"); //mesto za odgovore(div)
  currQuestion.answers.forEach((odgovor, index) => {
    //prolazimo loopom kroz sva pitanja naseg niza[i]
    let buttonEl = document.createElement("button"); //kreiramo child(gde ce da budu nasi odgovori pojedinacno)
    buttonEl.textContent = odgovor; //sta ce da pise na buttonu(odgovor ==>kao arr[i] ili item,svaki odgovor posebno)
    buttonEl.classList.add("B"); //dodeljujemo klasu iz css tim buttonima
    parent.appendChild(buttonEl); //u mesto gde ce da stoje odgovori(buttoni) ih ubacujem
    buttonEl.onclick = () => {
      //da buttoni budu klikabilni
      submitAnswer(currQuestion.id, buttonEl.textContent); // funk koja prima id i ans
    };
  });
};

const submitAnswer = (id, ans) => {
  //id- currQuestion.id , ans - buttonEl.textContent
  let currQuestion = arr[currentQuestionIndex]; //prvo pitanje od 0 indexa

  console.log(currQuestion.correct, ans);
  if (currQuestion.id === id) {
    //da li se id pitanja poklapa sa tr id?
    if (currQuestion.correct.toString() === ans.toString()) {
      //da li je tacan odgovor iz obj = naseg odgovoru
      correctAns += currQuestion.points; //ako jeste tacan dodajemo ovoj varijabli brojacu poene iz obj
    }
    currentQuestionIndex++; //ako se id poklapa,prebaci me na sledece pitanje
    let parent = document.getElementById("odgovori");
    parent.innerHTML = ""; //ovo dvoje sluzi da bi nam ocistili prosle odgovore pitanja,ako nema ovog -pitanja se nagomilavaju

    startQuiz(); //da nam ispise ponovo odgovore i pitanje
  }
};

startQuiz();

 const totalPoints= arr.reduce((prev,curr)=>{
  return prev + curr.points
 },0)
 console.log(totalPoints)

const displayResult = () => {
  const resultView = document.getElementById("page3");  //mesto za prikaz rezultata
  const bodovi = document.getElementById("bod");  //mesto za bodove
  bodovi.textContent = correctAns + "/" + totalPoints;  //da nam ispise bodove
  resultView.style.display = "block";  //da nam prikaze sad div koji smo na pocetak sakrili
  resultView.style.marginTop = "-600px";
  resultView.style.marginLeft = "400px";
};
