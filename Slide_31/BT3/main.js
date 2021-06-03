document.getElementById("btnXuLy").onclick = function (event) {
    event.preventDefault();
    
    
    var number1 = parseInt(document.getElementById("txtNumber1").value);
    var number2 = parseInt(document.getElementById("txtNumber2").value);
    var number3 = parseInt(document.getElementById("txtNumber3").value);
    var temp = 0;
    

    
    
    document.getElementById("footerCard").innerHTML = info;
    document.getElementById("footerCard").classList.add("alert", "alert-success");

    }   

