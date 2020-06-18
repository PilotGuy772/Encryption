var xHttp = new XMLHttpRequest();
var code = '';
var codeDisplay = document.getElementById('code_display');
var randNum = 0;
var i = 0;
var mode = '';
var message = document.getElementById('message').nodeValue()

function getCode(isRandom){
  if (isRandom == false){
    code =  prompt('Enter your code (seperated by spaces). Leave blank for a random code.');
    console.log(code);
    console.log('was typed as the code');
  
  }
  
  if (isRandom == true) {
    code = '';
    while(i <= 4){
      randNum = Math.floor(Math.random() * 10000);
      randNum = randNum.toString();
      code = code + ' ' + randNum;
      
      i+=1;
    }
    i=0;
  }
  document.getElementById('code_display').innerHTML = code;
    
  
  
}

function switchMode(newMode){
  if (newMode == 'enc'){
    mode = 'enc';
    $( "#start" ).html("Encrypt");
  }else if(newMode == 'dec'){
    mode = 'dec';
    $( "#start" ).html("Decrypt");
  }else{
    mode = '';
  }
}

function start(){
  xhr.open("GET", "pythoncode.py?text=" + text, true);
  xhr.responseType = "JSON";
  xhr.onload = function(e) {
  var arrOfStrings = JSON.parse(xhr.response);
}
xhr.send(); 
}


