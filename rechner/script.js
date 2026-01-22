function zeigen(){
    var stoffmenge = document.getElementsByName("Stoffmenge")[0].value;
    var masse = document.getElementsByName("Masse")[0].value;
    var molareMasse = document.getElementsByName("MolareMasse")[0].value;
    if (stoffmenge == "" && masse == "" && molareMasse == ""){
        alert("gibt was ein du spasti")
    }else if (stoffmenge == "") {
        alert(masse/molareMasse)
    } else if (masse == "") {
        alert(stoffmenge*molareMasse)
    } else if (molareMasse == "") {
        alert(masse/stoffmenge)
    }
}