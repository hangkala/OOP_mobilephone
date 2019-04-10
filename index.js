let Mobile = function (bat, recMess, senMess, mess) {
    this.bat = bat;
    this.recMess = recMess;
    this.senMess = senMess;
    this.mess = mess;
    let dem = 0;

    this.MStatus = function(id,idBat) { // Mobile status = on hoặc off
        if (dem === 0) {
            document.getElementById(id).innerHTML = "Off";
            dem++;
            bat--;
        } else {
            document.getElementById(id).innerHTML = "On";
            dem--;
            bat--;
        }
        this.showBat(idBat);
    };
    this.showBat = function (idBat) {
        document.getElementById(idBat).innerHTML = bat;
    };
    this.sendMessage = function (idSend,idInput,idBat,idRec) {
        if (dem === 0){
            bat--;
            document.getElementById(idBat).innerHTML = bat;
            let txt = document.getElementById(idInput).value;
            senMess.push(txt);
            document.getElementById(idSend).innerText = senMess;
            document.getElementById(idInput).value = '';
            this.receiveMess(idRec);
        }
    };
    this.receiveMess = function (idRec) {
        document.getElementById(idRec).innerText = senMess;
    }
}
