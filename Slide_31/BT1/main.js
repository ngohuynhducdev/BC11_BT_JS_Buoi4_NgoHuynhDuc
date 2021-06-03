document.getElementById("btnXuLy").onclick = function (event) {
    event.preventDefault();
    
    
    var number1 = parseInt(document.getElementById("txtNumber1").value);
    var number2 = parseInt(document.getElementById("txtNumber2").value);
    var number3 = parseInt(document.getElementById("txtNumber3").value);
    var temp = 0;
 
    if(number1>number2){
     temp=number1;
     number1=number2;
     number2=temp;
    }

   if(number2>number3){
    temp=number2;
    number2=number3;
    number3=temp;
    }

   if(number1>number2){
    temp=number1;
    number1=number2;
    number2=temp;
    }
    
    var info = "Sắp xếp tăng dần: " + number1 + " " + number2 + " " + number3;
    
    document.getElementById("footerCard").innerHTML = info;
    document.getElementById("footerCard").classList.add("alert", "alert-success");

    }   

