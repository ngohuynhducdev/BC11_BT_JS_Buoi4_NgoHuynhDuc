document.getElementById("btnSoNgay").onclick = function (event) {
    event.preventDefault();
    var thang = document.getElementById("txtThang").value;
    var nam = document.getElementById("txtNam").value;

    switch (parseInt(thang)) {
        case 1:
            document.getElementById("divSoNgay").innerHTML = "31 ngày";
            break;
        case 2:
            if (nam % 4 == 0 && nam % 100 != 0 || nam % 400 == 0) {
                document.getElementById("divSoNgay").innerHTML = "29 ngày";
            } else {
                document.getElementById("divSoNgay").innerHTML = "28 ngày";
            };
            break;
        case 3:
            document.getElementById("divSoNgay").innerHTML = "31 ngày";
            break;
        case 4:
            document.getElementById("divSoNgay").innerHTML = "30 ngày";
            break;
        case 5:
            document.getElementById("divSoNgay").innerHTML = "31 ngày";
            break;
        case 6:
            document.getElementById("divSoNgay").innerHTML = "30 ngày";
            break;
        case 7:
            document.getElementById("divSoNgay").innerHTML = "31 ngày";
            break;
        case 8:
            document.getElementById("divSoNgay").innerHTML = "31 ngày";
            break;
        case 9:
            document.getElementById("divSoNgay").innerHTML = "30 ngày";
            break;
        case 10:
            document.getElementById("divSoNgay").innerHTML = "31 ngày";
            break;
        case 11:
            document.getElementById("divSoNgay").innerHTML = "30 ngày";
            break;
        case 12:
            document.getElementById("divSoNgay").innerHTML = "31 ngày";
            break;

        default:
            document.getElementById("divSoNgay").innerHTML = "Nhập sai, vui lòng nhập lại!";
            break;
    }
};