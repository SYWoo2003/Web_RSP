var winMsg = 0; // 승리 횟수
var drawMsg = 0; // 비긴 횟수
var loseMsg = 0; // 진 횟수
var selectChoice = "";


function choice(userChoice) //fm 함수로 인해 가위,바위,보 버튼을 누르면 userchoice에 해당 값이 저장된다.
{
    var fm = document.frm; //frm이라는 form을 fm이라는 함수로 정의한다. (이미지를 바꾸고, 결과를 알리는 과정 등에서 필요)
  var comChoice = Math.round((Math.random() * 2) + 1) //0~2(+1)의 랜덤한 수를 뽑은 후 가장 가까운 정수의 값으로 리턴한다. (1 or 2 or 3)
  var msg = ""; //메시지 창으로, 승패의 유무를 알려준다.

  switch(userChoice)
  {
    // 1:바위  2:가위  3:보
      case "1" : //플레이어가 1(바위)을 선택했을 때
                 if (comChoice == 1) {msg += '무승부'; fm.comImg.src = "바위.png"; drawMsg++; break;} //만약 com이 1을 선택했을 경우, msg의 값을 무승부로 설정한다./ com의 이미지를 바위로 바꾼다./ 비긴 횟수에 1을 추가한다
                 if (comChoice == 2) {msg += '승리';   fm.comImg.src = "가위.png";  winMsg++; break;} //만약 com이 2을 선택했을 경우, msg의 값을 승리로 설정한다./ com의 이미지를 가위로 바꾼다./ 이긴 횟수에 1을 추가한다
                 if (comChoice == 3) {msg += '패배';   fm.comImg.src = "보.png";   loseMsg++; break;} //만약 com이 3을 선택했을 경우, msg의 값을 패배으로 설정한다./ com의 이미지를 보로 바꾼다./ 진 횟수에 1을 추가한다

      case "2" : //플레이어가 2(가위)을 선택했을 때
                 if (comChoice == 1) {msg += '패배';   fm.comImg.src = "바위.png"; loseMsg++; break;} //만약 com이 1을 선택했을 경우, msg의 값을 페베로 설정한다./ com의 이미지를 바위로 바꾼다./ 진 횟수에 1을 추가한다
                 if (comChoice == 2) {msg += '무승부'; fm.comImg.src = "가위.png"; drawMsg++; break;} //만약 com이 2을 선택했을 경우, msg의 값을 무승부로 설정한다./ com의 이미지를 가위로 바꾼다./ 비긴 횟수에 1을 추가한다
                 if (comChoice == 3) {msg += '승리';   fm.comImg.src = "보.png";    winMsg++; break;} //만약 com이 3을 선택했을 경우, msg의 값을 승리로 설정한다./ com의 이미지를 보로 바꾼다./ 이긴 횟수에 1을 추가한다

      case "3" : //플레이어가 3(보)을 선택했을 때
                 if (comChoice == 1) {msg += '승리';   fm.comImg.src = "바위.png";  winMsg++; break;} //만약 com이 1을 선택했을 경우, msg의 값을 승리로 설정한다./ com의 이미지를 바위로 바꾼다./ 이긴 횟수에 1을 추가한다
                 if (comChoice == 2) {msg += '패배';   fm.comImg.src = "가위.png"; loseMsg++; break;} //만약 com이 2을 선택했을 경우, msg의 값을 패배로 설정한다./ com의 이미지를 가위로 바꾼다./ 진 횟수에 1을 추가한다
                 if (comChoice == 3) {msg += '무승부'; fm.comImg.src = "보.png";   drawMsg++; break;} //만약 com이 3을 선택했을 경우, msg의 값을 무승부로 설정한다./ com의 이미지를 보로 바꾼다./ 비긴 횟수에 1을 추가한다
    }
    fm.msgBox.value = msg; // 가위바위보의 결과(msg)를 msgbox에 출력한다.
    fm.msgBox2.value = winMsg + "승 " + drawMsg + "무 " + loseMsg + "패"; // 전적('@승 @무 @패')를 msgbox2에 출력한다.
}


function goAndStop(userChoice)
{
    var fm = document.frm; //frm이라는 form을 fm이라는 변수로 정의한다 (이미지를 바꾸고, 결과를 알리는 과정 등에서 필요)
  selectChoice = userChoice; //selectchoice의 값을 userchoice의 값으로 바꾼다.
choice(selectChoice)
  if (userChoice == 1)  //만약 플레이어의 선택이 1(바위)이라면,
  {
      fm.userImg.src = "바위.png";  //플레이어의 이미지(userimg)를 바위로 바꾼다.
}
  else if (userChoice == 2)  //만약 플레이어의 선택이 2(가위)이라면,
  {
    fm.userImg.src = "가위.png";  //플레이어의 이미지(userimg)를 가위로 바꾼다.
  }
  else if (userChoice == 3)  //만약 플레이어의 선택이 3(보)이라면,
  {
    fm.userImg.src = "보.png";   //플레이어의 이미지(userimg)를 보로 바꾼다.
  }
}
