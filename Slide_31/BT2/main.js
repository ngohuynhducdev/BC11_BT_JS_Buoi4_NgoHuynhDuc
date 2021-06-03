document.getElementById("btnChaoHoi").onclick = function (event) {
    event.preventDefault();
    
    var bo = document.getElementById("txtBo").checked;
    var me = document.getElementById("txtMe").checked;
    var anhTrai = document.getElementById("txtAnhTrai").checked;
    var emGai = document.getElementById("txtEmGai").checked;
    var nguoiChon = 0;
 
    if (nguoiChon = bo) {
        document.getElementById("divChaoHoi").innerHTML = "Chào Bố";
    } else if (nguoiChon = me) {
        document.getElementById("divChaoHoi").innerHTML = "Chào Mẹ";
    } else if (nguoiChon = anhTrai) {
        document.getElementById("divChaoHoi").innerHTML = "Chào Anh Trai";
    } else {
        document.getElementById("divChaoHoi").innerHTML = "Chào Em Gái";
    }
    
    }   

