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
    } else if((Math.sqrt(canhA)+Math.sqrt(canhB)==Math.sqrt(canhC)) || (Math.sqrt(canhA)+Math.sqrt(canhC)==Math.sqrt(canhB)) || (Math.sqrt(canhB)+Math.sqrt(canhC)==Math.sqrt(canhA))){
            ketQua = "Tam giác vuông";
        }
    
    // Write('Nhap do dai 3 canh: '); Readln(a,b,c);
    // If (a+b<=c) or (a+c<=b) or (b+c<=a) then Writeln('Khong phai tam giac')
    // Else If (a=b) and (b=c) then Write('Tam giac deu')
    // Else If (a=b) or (a=c) or (c=b) then Write('Tam giac can')
    // Else If (sqr(a)+sqr(b)=sqr(c)) or (sqr(a)+sqr(c)=sqr(b)) or (sqr(b)+sqr(c)=sqr(a)) then Write('Tam giac vuong');
    // Readln
    
    var info = ketQua;
    document.getElementById("footerCard").innerHTML = info;
    document.getElementById("footerCard").classList.add("alert", "alert-success");

    }   

