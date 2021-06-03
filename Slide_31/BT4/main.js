document.getElementById("btnXuLy").onclick = function (event) {
    event.preventDefault();
    
    
    var canhA = parseInt(document.getElementById("txtNumber1").value);
    var canhB = parseInt(document.getElementById("txtNumber2").value);
    var canhC = parseInt(document.getElementById("txtNumber3").value);
    var ketQua = "";
    if ((canhA + canhB <= canhC) || (canhA + canhC <= canhB) || (canhB + canhC <= canhA)){
        ketQua = "Không phải hình tam giác";
    } else if ((canhA == canhB ) && (canhB == canhC)) {
        ketQua = "Tam giác đều";
    } else if ((canhA == canhB) || (canhB == canhC) || (canhC == canhB)){
        ketQua = "Tam giác cân";
    } else if(((canhA*canhA) == (canhB*canhB) +(canhC*canhC)) || ((canhB*canhB) ==(canhC*canhC)+(canhA*canhA)) || ((canhC*canhC) == (canhA*canhA)+(canhB*canhB))){
            ketQua = "Tam giác vuông";
        }
    

    var info = ketQua;
    document.getElementById("footerCard").innerHTML = info;
    document.getElementById("footerCard").classList.add("alert", "alert-success");

    }   

