var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("Give your name ");
console.log("Welcome 🙏 to call of duty quiz "+userName);
var userAge = readlineSync.question("Whats your age?");
if (userAge >= 18){
  function play(question,answer){
    console.log(question);
    var userAnswer = readlineSync.question("give your answer-\n");
    if (userAnswer.toUpperCase()==answer){
      score+= 1;
      console.log("Right");
    }
    else{
      score-= 1;
      console.log("wrong");
    }
    console.log("current score "+ score);
  }
  const playInfo = [
    {
      question : "What is the latest call of duty title game?\na.Mordern warfare 2019\tb.Vanguard\n",
      answer: "VANGUARD"
    },
    {
      question : "What was the last black ops series title launched?\na.Cold war\tb.Mordern warfare 3\n",
      answer : "COLD WAR"
    },
    {
      question : "How many mordern warfare series is made till date?\na.6\tb.4\n",
      answer : 4
    },
    {
      question : "What is the latest upcoming title in 2022?\na.Mordern warfare 2022\tb.Vanguard\n",
      answer : "MORDERN WARFARE 2022"
    }
  ];
  for(let i = 0; i < playInfo.length; i++){
    play(playInfo[i].question,playInfo[i].answer);
  }
  console.log("Total score of yours"+ score);
}
else{
  console.log("These quiz is for 18+ play when you get older");
}
var oldScore = 0;
const leaderBoards = [
  {
  name: "Adarsh Balika",
  score: 3
},
  {
    name: "goodfellows",
    score: 3
  }
  ];
console.log("-----------------");
console.log("look at our leaderboards");
for(let i = 0 ; i < leaderBoards.length; i++){
  console.log("Name: "+leaderBoards[i].name);
  console.log("score: "+leaderBoards[i].score);
  if(leaderBoards[i].score >= oldScore){
  oldScore = leaderBoards[i].score ;
}
}
if (score > oldScore)
{
  console.log("you are one of the top scorer")
  console.log("Yours will be updated soon");
}