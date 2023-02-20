
counter = 0;
var questionsArray=new Array();
var easyLength,midLength,hardLength;
var easyCounter=0,midCounter=0,hardCounter=0;
$(document).ready(function() {
	$.getJSON("JSON/Easy.json", function(data) {
        easyLength=data.Questions.length;
        for(var i = 0; i <data.Questions.length; i++) {
            var ques=new Question();
            ques.question=data.Questions[i].question;
            ques.answer1=data.Questions[i].content[0];
            ques.answer2=data.Questions[i].content[1];
            ques.answer3=data.Questions[i].content[2];
            ques.answer4=data.Questions[i].content[3];
            ques.rightAnswer=data.Questions[i].correct;
            ques.level="Easy"
            display(ques);

        }
    });
    $.getJSON("JSON/Middle.json", function(data) {
        midLength=data.Questions.length;
        for(var i = 0; i <data.Questions.length; i++) {
            var ques=new Question();
            ques.question=data.Questions[i].question;
            ques.answer1=data.Questions[i].content[0];
            ques.answer2=data.Questions[i].content[1];
            ques.answer3=data.Questions[i].content[2];
            ques.answer4=data.Questions[i].content[3];
            ques.rightAnswer=data.Questions[i].correct;
            ques.level="Middle"
            display(ques);

        }
       
    });
    $.getJSON("JSON/Hard.json", function(data) {
        hardLength=data.Questions.length;
        for(var i = 0; i <data.Questions.length; i++) {
            var ques=new Question();
            ques.question=data.Questions[i].question;
            ques.answer1=data.Questions[i].content[0];
            ques.answer2=data.Questions[i].content[1];
            ques.answer3=data.Questions[i].content[2];
            ques.answer4=data.Questions[i].content[3];
            ques.rightAnswer=data.Questions[i].correct;
            ques.level="Hard"
            display(ques);

        }
       
    });
});


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

function add()
{
    var ques=new Question();
    ques.question=document.getElementById("ques").value;
    ques.answer1=document.getElementById("ans1").value;
    ques.answer2=document.getElementById("ans2").value;
    ques.answer3=document.getElementById("ans3").value;
    ques.answer4=document.getElementById("ans4").value;
    var radioButtons=document.getElementsByName("ans");
    for(var i=0;i<radioButtons.length;i++){
        if(radioButtons[i].checked)
        {
            if(i==0)
            ques.rightAnswer=  ques.answer1;
            else if(i==1)
            ques.rightAnswer=  ques.answer2;
            else if(i==2)
            ques.rightAnswer=  ques.answer3;
            else
            ques.rightAnswer=  ques.answer4;
            
            break;
        }
    }
    
    ques.level=document.getElementById("lev").value;
    questionsArray.push(ques);
    var data = {"question":ques.question,"answer1":ques.answer1};

    display(ques);
}
(function(console) {
  save = function(data, filename) {
      if (!data) {
         console.error('Console.save: No data');
         return;
      }
      if (!filename) {
         filename = "console.json";
      }
      if (typeof data === "object") {
         data = JSON.stringify(data, undefined, 4);
      }
      var blob = new Blob([data], {type:"text/json"});
      var e = document.createEvent("MouseEvents");
      var a = document.createElement("a");

      a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
      e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
       
   }
})(console);
function saveIntoJSON(){
     var table=document.getElementById("quesionTable");
     var jsonQuestions='{"Questions":[]}';
    var obj = JSON.parse(jsonQuestions);
      for(var i=1;i<table.rows.length;i++){
    var question=table.rows[i].cells[2].innerText;
    var answer1=table.rows[i].cells[3].innerText;
    var answer2=table.rows[i].cells[4].innerText;
    var answer3=table.rows[i].cells[5].innerText;
    var answer4=table.rows[i].cells[6].innerText;
    var right=table.rows[i].cells[7].innerText;
    var level=table.rows[i].cells[8].innerText;
    if(level=="Easy")
        easyCounter++;
    else if(level=="Middle")
        midCounter++;
    else if(level=="Hard")
        hardCounter++;
        
    var jsonObject = {question:question,content:[answer1,answer2,answer3,answer4],correct:right};
          obj['Questions'].push(jsonObject);
    }
    
    
        save(obj,"Easy.json");
    
        save(obj,"Middle.json");

        save(obj,"Hard.json");
    
}
function del()
{
    var x=document.getElementsByName("ch");
    for(i=0;i<x.length;i++)
        {
            if(x[i].checked)
                {
                    document.getElementById("quesionTable").deleteRow(i+1);
                    questionsArray.splice(i,1);
                    i--;
                }
        }
}

function display(ques)
{
    var row="<tr><td><input type='checkbox' name='ch'></td><td>"+ques.id+"</td><td>"+ques.question+"</td><td>"+ques.answer1+"</td><td>"+ques.answer2+"</td><td>"+ques.answer3+"</td><td>"+ques.answer4+"</td><td>"+ques.rightAnswer+"</td><td>"+ques.level+"</td></tr>";
    document.getElementById("quesionTable").innerHTML +=row;
}