var questionsArray=new Array();
mute=false;
counter = 0;
function Question(q,a1,a2,a3,a4,lev,right)
{
    this.id= counter++;
    this.question=q;
    this.answer1=a1;
    this.answer2=a2;
    this.answer3=a3;
    this.answer4=a4;
    this.level=lev;
    this.rightAnswer=right;
}
function Player(id,name,gender,score){
 							this.id=id;
 							this.name=name;
 							this.gender=gender;
 							this.score=score;
 					}

$(document).ready(function(){
    $("#volumeChange").click(function() {    
        var _this = $(this);
        var current = _this.attr("src");
        var swap = _this.attr("data-swap");     
        _this.attr('src', swap).attr("data-swap",current); 
        togglePlay();
    });
    $.getJSON("JSON/Easy.json", function(data) {
        var questionNumbers=getQuestionNumbers(data.Questions.length -1);
        for(var i = 0; i <questionNumbers.length; i++) {
            var index=questionNumbers[i];
            var question=data.Questions[index].question;
            var answer1=data.Questions[index].content[0];
            var answer2=data.Questions[index].content[1];
            var answer3=data.Questions[index].content[2];
            var answer4=data.Questions[index].content[3];
            var right=data.Questions[index].correct;
            var q=new Question(question,answer1,answer2,answer3,answer4,"Easy",right);
            questionsArray.push(q);
        }
       
    });
    $.getJSON("JSON/Middle.json", function(data) {
        var questionNumbers=getQuestionNumbers(data.Questions.length -1);
        for(var i = 0; i <questionNumbers.length; i++) {
            var index=questionNumbers[i];
            var question=data.Questions[index].question;
            var answer1=data.Questions[index].content[0];
            var answer2=data.Questions[index].content[1];
            var answer3=data.Questions[index].content[2];
            var answer4=data.Questions[index].content[3];
            var right=data.Questions[index].correct;
            var q=new Question(question,answer1,answer2,answer3,answer4,"Middle",right);
            questionsArray.push(q);
        }
       
    });
    $.getJSON("JSON/Hard.json", function(data) {
        var questionNumbers=getQuestionNumbers(data.Questions.length -1);
        for(var i = 0; i <questionNumbers.length; i++) {
            var index=questionNumbers[i];
            var question=data.Questions[index].question;
            var answer1=data.Questions[index].content[0];
            var answer2=data.Questions[index].content[1];
            var answer3=data.Questions[index].content[2];
            var answer4=data.Questions[index].content[3];
            var right=data.Questions[index].correct;
            var q=new Question(question,answer1,answer2,answer3,answer4,"Hard",right);
            questionsArray.push(q);
            window.localStorage.setItem("currentlevel","0");
            displayQuestion();
        }
    });
});

function init()
{
    $("#btn1").click(function() { 
        $(this).attr("class","ansitemcheck");
        disableAll();
        var check=checkAnswer(1);
         setTimeout(function(){
            playAudio(check);
            if(check)
            {
                $("#btn1").attr("class","rightans");
                var currentlevel=window.localStorage.getItem("currentlevel");
                currentlevel=parseInt(currentlevel);
                
                setTimeout(function(){
                    currentlevel++;
                    window.localStorage.setItem("currentlevel",currentlevel);
                     displayQuestion();
                },4000);
            }
            else
            {
                $("#btn1").attr("class","wrongans");
                var i=rightAnsIndex();
                $("#btn"+i).attr("class","rightans");
                lose();
                document.getElementById("loseDiv").style.visibility= 'visible';
            }
          },4000);
    });
    $("#btn2").click(function() { 
        $(this).attr("class","ansitemcheck");
        disableAll();
        var check=checkAnswer(2);
        setTimeout(function(){
            playAudio(check);
            if(check)
            {
                $("#btn2").attr("class","rightans");
                var currentlevel=window.localStorage.getItem("currentlevel");
                currentlevel=parseInt(currentlevel);
                
                setTimeout(function(){
                    currentlevel++;
                    window.localStorage.setItem("currentlevel",currentlevel);
                     displayQuestion();
                },4000);
            }
            else
            {
                $("#btn2").attr("class","wrongans");
                var i=rightAnsIndex();
                $("#btn"+i).attr("class","rightans");
                lose();
                document.getElementById("loseDiv").style.visibility= 'visible';
            }
        },4000);
    });
    $("#btn3").click(function() {
        $(this).attr("class","ansitemcheck");
        disableAll();
        var check=checkAnswer(3);
        setTimeout(function(){
            playAudio(check);
            if(check)
            {
                $("#btn3").attr("class","rightans");
                var currentlevel=window.localStorage.getItem("currentlevel");
                currentlevel=parseInt(currentlevel);
                
                setTimeout(function(){
                    currentlevel++;
                    window.localStorage.setItem("currentlevel",currentlevel);
                     displayQuestion();
                },4000);
            }
            else
            {
                $("#btn3").attr("class","wrongans");
                var i=rightAnsIndex();
                $("#btn"+i).attr("class","rightans");
                lose();
                document.getElementById("loseDiv").style.visibility= 'visible';
            }
        },4000);
    });
    $("#btn4").click(function() { 
        $(this).attr("class","ansitemcheck");
        disableAll();
        var check=checkAnswer(4);
        setTimeout(function(){
            playAudio(check);
            if(check)
            {
                $("#btn4").attr("class","rightans");
                var currentlevel=window.localStorage.getItem("currentlevel");
                currentlevel=parseInt(currentlevel);
                
                setTimeout(function(){
                    currentlevel++;
                    window.localStorage.setItem("currentlevel",currentlevel);
                     displayQuestion();
                },4000);
            }
            else
            {
                $("#btn4").attr("class","wrongans");
                var i=rightAnsIndex();
                $("#btn"+i).attr("class","rightans");
                lose();
                document.getElementById("loseDiv").style.visibility= 'visible';
            }
         },4000);
    });
    $("#call").click(function() {
        $("#helpdiv").css('visibility','visible');
        $("#call").fadeTo('fast',.5);
        $("#call").unbind('click');
    });
    $("#half").click(function() {
         hideAnswersHelp();
        $("#half").fadeTo('fast',.5);
        $("#half").unbind('click');
    });
    $("#fans").click(function () {
        CanvasJS.addColorSet("colors",["#04195A"]);
        document.getElementById('myAudio').pause();
        document.getElementById('fansAudio').play();
        var a;
        var b;
        var c;
        var d;
        var ans =rightAnsIndex();
        if(ans==1){
        a=40;
        b=20;
        c=30;
        d=10;
        }
        else if (ans==2){
        a=15;
        b=50;
        c=30;
        d=5;
        }
        else if (ans==3){
        a=10;
        b=10;
        c=75;
        d=5;
        }
        else {
        a=1;
        b=9;
        c=25;
        d=65;
        }

      var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            backgroundColor: "#F5DEB3" ,
            title: {text: "رأى الجمهور"},
            animationDuration: 7000,
            colorSet: "colors",
            data: [{
              type: "column",
              toolTipContent: "{y}%",
              dataPoints: [
                { y: a, label: "أ" },
                { y: b, label: "ب" },
                { y: c, label: "ج" },
                { y: d, label: "د" },
              ]
            }]
          });

          $("#chartContainer").dialog({
              modal: true,
              autoOpen: false,
              width: 450,
              height: 300
          }).prev(".ui-dialog-titlebar").css("background","#04195A");
            $('#chartContainer').dialog('open');
            chart.render();
            $("#fans").fadeTo('fast',.5);
            $("#fans").unbind('click');
            setTimeout(function(){
                if(!mute){
                    document.getElementById("myAudio").play();
                }
            },8000);
          });
    }

//50-50 help
function hideAnswersHelp()
{
    for(var j=1;j<=4;j++)
        $("#btn"+j).prop('disabled',true);
    
    var rightAns=rightAnsIndex();
    $("#btn"+rightAns).prop('disabled',false);
    if(rightAns==4)
        $("#btn1").prop('disabled',false);
    else
        $("#btn"+(rightAns+1)).prop('disabled',false);
        
}

//disable options and buttons when user choose an answer
function disableAll()
{
    $("#btn1").unbind('click');
    $("#btn2").unbind('click');
    $("#btn3").unbind('click');
    $("#btn4").unbind('click');
    $("#call").unbind('click');
    $("#half").unbind('click');
    $("#fans").unbind('click');
}

//status Audio
function playAudio(check)
{
    document.getElementById("myAudio").pause();
    if(check)
        document.getElementById("winAudio").play();
    else
        document.getElementById("loseAudio").play();
}

//background music
function togglePlay() {
    mute=!mute;
    var myAudio = document.getElementById("myAudio");
    return myAudio.paused ? myAudio.play() : myAudio.pause();
};

//check chosen answer
function checkAnswer(num)
{
        var currentlevel=window.localStorage.getItem("currentlevel");
        currentlevel=parseInt(currentlevel);
        var q=questionsArray[currentlevel];
        var ans;
        if(num==1)
            ans=q.answer1;
        else if(num==2)
            ans=q.answer2;
        else if(num==3)
            ans=q.answer3;
        else
            ans=q.answer4;
        if(ans==q.rightAnswer){
                return true;
            }
        else{
            return false;
        }
}

//rightAnswer
function rightAnsIndex()
{
    var currentlevel=window.localStorage.getItem("currentlevel");
    currentlevel=parseInt(currentlevel);
    var q=questionsArray[currentlevel];
    var rightIndex=0;
    if(q.answer1==q.rightAnswer)
        rightIndex=1;
    else if(q.answer2==q.rightAnswer)
        rightIndex=2;
     else if(q.answer3==q.rightAnswer)
         rightIndex=3;
    else
        rightIndex=4;
    return rightIndex;
}

//get random questions
function getQuestionNumbers(max) {
    var numbers=new Array();
    for(var i=0;i<5;i++)
    {
        var x = Math.floor((Math.random() * max) + 1);
        if(!numbers.includes(x))
            numbers.push(x);
        else
            i--;
    }
    return numbers;
}

//display question
function displayQuestion()
{
    setAllToDefault();
    var currentlevel=window.localStorage.getItem("currentlevel");
    currentlevel=parseInt(currentlevel);
    if(currentlevel<15)
        {
            var test=questionsArray[currentlevel];
            document.getElementById("questiontext").textContent =test.question;
            document.getElementById("btn1").textContent ="ا - "+test.answer1;
            document.getElementById("btn2").textContent ="ب - "+test.answer2;
            document.getElementById("btn3").textContent ="ج - "+test.answer3;
            document.getElementById("btn4").textContent ="د - "+test.answer4;
            $("#lvl"+(currentlevel+1)).addClass("active");
            if(currentlevel!=0)
                $("#lvl"+(currentlevel)).removeClass("active");
            if(!mute)
                {
                    var myAudio = document.getElementById("myAudio");
                    myAudio.play();
                }
        }
    else
        {
            updateScore("1000000");
            var win=window.open("winner.html","_self");
            setTimeout(
            function ( )
            {
                win.close();
                window.open("scores.html","_self");
            }, 3000 );
        }
}

function setAllToDefault()
{
    for(var x=1;x<=4;x++)
        {
            $("#btn"+x).prop('disabled',false);
            $("#btn"+x).attr("class","ansitem");
        }
    init();
}

function getScore()
{
    var currentlevel=window.localStorage.getItem("currentlevel");
    currentlevel=parseInt(currentlevel);
    var score="0";
    switch(currentlevel)
        {
            case 1:
                score="100";
                break;
            case 2:
                score="200";
                break;
            case 3:
                score="300";
                break;
            case 4:
                score="500";
                break;
            case 5:
                score="1000";
                break;
            case 6:
                score="2000";
                break;
            case 7:
                score="4000";
                break;
            case 8:
                score="8000";
                break;
            case 9:
                score="16000";
                break;
            case 10:
                score="32000";
                break;
            case 11:
                score="64000";
                break;
            case 12:
                score="125000";
                break;
            case 13:
                score="250000";
                break;
            case 14:
                score="500000";
                break;
            case 15:
                score="1000000";
                break;
            default:
                break;
        }
    return score;
}

function cancelplay()
{
    var s=getScore();
    updateScore(s);
}

function lose(){
    var currentlevel=window.localStorage.getItem("currentlevel");
    currentlevel=parseInt(currentlevel);
    var score="";
    var sr="";
    if(currentlevel<4){score="0"; sr="icons/1.png";}
    else if (currentlevel<9){score="1,000";sr="icons/2.png";}
    else if (currentlevel<14){score="32,000";sr="icons/3.png";}
    else{score="1,000,000";}
    updateScore(score);
    document.getElementById("cheque").src=sr;
    setTimeout(function(){
        window.open("scores.html","_self");
    },4000);
}

function savePlayer( idd , name , gender , scoreN){
    id=idd;
    score=scoreN;
    player=new Player(id,name,gender,score);
    arr=JSON.parse(window.localStorage.getItem('myArray'));
    var playerJosn = JSON.stringify(player);
    window.localStorage.setItem(id,playerJosn);
}

function updateScore(scoreNum){
		var playID = window.localStorage.getItem('PlayerID');
		var play = JSON.parse(window.localStorage.getItem(playID));
        Number(scoreNum);
		play.score = scoreNum;
		savePlayer(play.id , play.name , play.gender , play.score);
	}