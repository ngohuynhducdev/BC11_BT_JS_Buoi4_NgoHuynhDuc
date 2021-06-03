document.getElementById("btnCachDoc").onclick = function (event) {
    event.preventDefault();
    var soNguyen = document.getElementById("txtSo").value;

    var hangDonVi = Math.floor(parseInt(soNguyen) % 10);
    var hangChuc = Math.floor(parseInt(soNguyen) % 100 / 10);
    var hangTram = Math.floor(parseInt(soNguyen) / 100);
    var a = "";
    var b = "";
    var c = "";
    if (hangTram == 1) {
        a = "Một trăm";
    } else if (hangTram == 2) {
        a = "Hai trăm";
    } else if (hangTram == 3) {
        a = "Ba trăm";
    } else if (hangTram == 4) {
        a = "Bốn trăm";
    } else if (hangTram == 5) {
        a = "Năm trăm";
    } else if (hangTram == 6) {
        a = "Sáu trăm";
    } else if (hangTram == 7) {
        a = "Bảy trăm";
    } else if (hangTram == 8) {
        a = "Tám trăm";
    } else if (hangTram == 9) {
        a = "Chín trăm";

    };

    if (hangChuc == 1) {
        b = "mười ";
    } else if (hangChuc == 2) {
        b = "hai mươi";
    } else if (hangChuc == 3) {
        b = "ba mươi";
    } else if (hangChuc == 4) {
        b = "bốn mươi";
    } else if (hangChuc == 5) {
        b = "năm mươi";
    } else if (hangChuc == 6) {
        b = "sáu mươi";
    } else if (hangChuc == 7) {
        b = "bảy mươi";
    } else if (hangChuc == 8) {
        b = "tám mươi";
    } else if (hangChuc == 9) {
        b = "chín mươi";

    };

    if (hangDonVi == 1) {
        c = "một";
    } else if (hangDonVi == 2) {
        c = "hai";
    } else if (hangDonVi == 3) {
        c = "ba";
    } else if (hangDonVi == 4) {
        c = "bốn";
    } else if (hangDonVi == 5) {
        c = "lăm";
    } else if (hangDonVi == 6) {
        c = "sáu";
    } else if (hangDonVi == 7) {
        c = "bảy";
    } else if (hangDonVi == 8) {
        c = "tám";
    } else if (hangDonVi == 9) {
        c = "chín";
    };

    var info = "<div class='alert alert-warning'>" + a + " " + b + " " + c + "</div>";
    document.getElementById("divCachDoc").innerHTML = info;
};