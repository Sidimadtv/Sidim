function callFirst(){
    
    $('#secondFriend').fadeTo('fast',.3);
    $('#secondFriend').append('<div style="position: absolute;top:0;left:0;width: 100%;height:100%;z-index:2;opacity:0.4;filter: alpha(opacity = 50)"></div>');
    $("#secondFriend").removeAttr('onclick');
    viewCalling();
    
}
function callSecond(){
$('#firstFriend').fadeTo('fast',.3);
$('#firstFriend').append('<div style="position: absolute;top:0;left:0;width: 100%;height:100%;z-index:2;opacity:0.4;filter: alpha(opacity = 50)"></div>');
   $("#firstFriend").removeAttr('onclick');
   viewCalling();
}

function viewCalling(){
    $("#helpdiv").html("");
    $("#CalledImage").attr("src","icons/Stratentast+animation+3.gif");
    $("#CallingAudio").attr("src","sound/Calling.mp3");
    document.getElementById('myAudio').pause();
    document.getElementById('CallingAudio').play();
    $('#helpdiv').circularCountDown({
          size: 150,
          borderSize: 6,
         position:'center',
 colorCircle: '#f3ab65',
          background: 'blue',
        
          
fontColor: '#ffffff',
          fontSize: 30,
          delayToFadeIn: 0,
          delayToFadeOut: 0,
          reverseLoading: false,
          reverseRotation: false,
          duration: {
              seconds: 10
          },
          beforeStart: function(){},
          end: function(){
                $("#helpdiv").html("");
                callAnswer();
                document.getElementById('myAudio').play();
          }
    });
}

function callAnswer(){
    $('#helpdiv').addClass('text');
    var x = Math.floor((Math.random() * 4) + 1);
    if(x==1)
        document.getElementById("helpdiv").innerHTML = "= اعتقد ان الاجابه هى : =  أ";
    else if(x==2)
        document.getElementById("helpdiv").innerHTML = "= اعتقد ان الاجابه هى : =  ب";
    else if(x==3)
        document.getElementById("helpdiv").innerHTML = "= اعتقد ان الاجابه هى : =  ج";
    else if(x==4)
        document.getElementById("helpdiv").innerHTML = "= اعتقد ان الاجابه هى : =  د";
    setTimeout(function(){
         $('#helpdiv').removeClass('text');
        $("#helpdiv").html("");
    },4800);
}