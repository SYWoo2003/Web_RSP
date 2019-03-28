var winMsg = 0; 
var drawMsg = 0; 
var loseMsg = 0;
var selectChoice = "";


function choice(userChoice) 
{
    var fm = document.frm;
  var comChoice = Math.round((Math.random() * 2) + 1)
  var msg = ""; 

  switch(userChoice)
  {
      case "1" : 
                 if (comChoice == 1) {msg += '무승부'; fm.comImg.src = "바위.png"; drawMsg++; break;} 
                 if (comChoice == 2) {msg += '승리';   fm.comImg.src = "가위.png";  winMsg++; break;} 
                 if (comChoice == 3) {msg += '패배';   fm.comImg.src = "보.png";   loseMsg++; break;}

      case "2" :
                 if (comChoice == 1) {msg += '패배';   fm.comImg.src = "바위.png"; loseMsg++; break;}
                 if (comChoice == 2) {msg += '무승부'; fm.comImg.src = "가위.png"; drawMsg++; break;} 
                 if (comChoice == 3) {msg += '승리';   fm.comImg.src = "보.png";    winMsg++; break;} 

      case "3" : 
                 if (comChoice == 1) {msg += '승리';   fm.comImg.src = "바위.png";  winMsg++; break;}
                 if (comChoice == 2) {msg += '패배';   fm.comImg.src = "가위.png"; loseMsg++; break;}
                 if (comChoice == 3) {msg += '무승부'; fm.comImg.src = "보.png";   drawMsg++; break;}
    }
    fm.msgBox.value = msg; 
    fm.msgBox2.value = winMsg + "승 " + drawMsg + "무 " + loseMsg + "패";


function goAndStop(userChoice)
{
    var fm = document.frm;
  selectChoice = userChoice; 
choice(selectChoice)
  if (userChoice == 1)
  {
      fm.userImg.src = "바위.png";  
}
  else if (userChoice == 2) 
  {
    fm.userImg.src = "가위.png";  
  }
  else if (userChoice == 3) 
  {
    fm.userImg.src = "보.png";   
  }
}
