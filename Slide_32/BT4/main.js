
document.getElementById("btnKhoangCach").onclick = function (event) {
    event.preventDefault();
    var xA = document.getElementById("txtSinhVienA1").value;
    var yA = document.getElementById("txtSinhVienA2").value;

    var xB = document.getElementById("txtSinhVienB1").value;
    var yB = document.getElementById("txtSinhVienB2").value;

    var xC = document.getElementById("txtSinhVienC1").value;
    var yC = document.getElementById("txtSinhVienC2").value;




    //Trường học có tọa độ (3,4);
    truongHoc = Math.sqrt(3 * 3 + 4 * 4);

    //Khoảng cách từ A => Trường
    A = Math.sqrt((parseInt(xA * xA) - (3 * 3)) + (parseInt(yA * yA) - (4 * 4)));
    //Khoảng cách từ B => Trường
    B = Math.sqrt((parseInt(xB * xB) - (3 * 3)) + (parseInt(yB * yB) - (4 * 4)));
    //Khoảng cách từ C => Trường
    C = Math.sqrt((parseInt(xC * xC) - (3 * 3)) + (parseInt(yC * yC) - (4 * 4)));

    var khoangCach = "";

    if (A > B && A > C) {
        khoangCach = "Nhà A xa nhất";
    } else if (B > C && B > A) {
        khoangCach = "Nhà B xa nhất";
    } else {
        khoangCach = "Nhà C xa nhất";
    };
    var info = "<div class='alert alert-warning'>" + khoangCach + "</div>";
    document.getElementById("divKhoangCach").innerHTML = info;
};