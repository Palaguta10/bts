function openone(evt, one){
    var i, tabcontent1, tablinks1;
    tabcontent1 = document.getElementsByClassName("tabcontent1");
    for(i = 0; i < tabcontent1.length; i++){
        tabcontent1[i].style.display = "none";
    }
    tablinks1 = document.getElementsByClassName("tablinks1");
    for(i = 0; i < tablinks1.length; i++){
        tablinks1[i].className = tablinks1[i].className.replace(" active", "");
    }
    document.getElementById(one).style.display = "block";
    evt.currentTarget.className += " active";
}

function opentwo(evt, two){
    var i, tabcontent2, tablinks2;
    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for(i = 0; i < tabcontent2.length; i++){
        tabcontent2[i].style.display = "none";
    }
    tablinks2 = document.getElementsByClassName("tablinks2");
    for(i = 0; i < tablinks2.length; i++){
        tablinks2[i].className = tablinks2[i].className.replace(" active", "");
    }
    document.getElementById(two).style.display = "block";
    evt.currentTarget.className += " active";
}

function openthree(evt, three){
    var i, tabcontent3, tablinks3;
    tabcontent3 = document.getElementsByClassName("tabcontent3");
    for(i = 0; i < tabcontent3.length; i++){
        tabcontent3[i].style.display = "none";
    }
    tablinks3 = document.getElementsByClassName("tablinks3");
    for(i = 0; i < tablinks3.length; i++){
        tablinks3[i].className = tablinks3[i].className.replace(" active", "");
    }
    document.getElementById(three).style.display = "block";
    evt.currentTarget.className += " active";
}

function openfour(evt, four){
    var i, tabcontent4, tablinks4;
    tabcontent4 = document.getElementsByClassName("tabcontent4");
    for(i = 0; i < tabcontent4.length; i++){
        tabcontent4[i].style.display = "none";
    }
    tablinks4 = document.getElementsByClassName("tablinks4");
    for(i = 0; i < tablinks4.length; i++){
        tablinks4[i].className = tablinks4[i].className.replace(" active", "");
    }
    document.getElementById(four).style.display = "block";
    evt.currentTarget.className += " active";
}

function openfive(evt, five){
    var i, tabcontent5, tablinks5;
    tabcontent5 = document.getElementsByClassName("tabcontent5");
    for(i = 0; i < tabcontent5.length; i++){
        tabcontent5[i].style.display = "none";
    }
    tablinks5 = document.getElementsByClassName("tablinks5");
    for(i = 0; i < tablinks5.length; i++){
        tablinks5[i].className = tablinks5[i].className.replace(" active", "");
    }
    document.getElementById(five).style.display = "block";
    evt.currentTarget.className += " active";
}

function opensix(evt, six){
    var i, tabcontent6, tablinks6;
    tabcontent6 = document.getElementsByClassName("tabcontent6");
    for(i = 0; i < tabcontent6.length; i++){
        tabcontent6[i].style.display = "none";
    }
    tablinks6 = document.getElementsByClassName("tablinks6");
    for(i = 0; i < tablinks6.length; i++){
        tablinks6[i].className = tablinks6[i].className.replace(" active", "");
    }
    document.getElementById(six).style.display = "block";
    evt.currentTarget.className += " active";
}

function openseven(evt, seven){
    var i, tabcontent7, tablinks7;
    tabcontent7 = document.getElementsByClassName("tabcontent7");
    for(i = 0; i < tabcontent7.length; i++){
        tabcontent7[i].style.display = "none";
    }
    tablinks7 = document.getElementsByClassName("tablinks7");
    for(i = 0; i < tablinks7.length; i++){
        tablinks7[i].className = tablinks7[i].className.replace(" active", "");
    }
    document.getElementById(seven).style.display = "block";
    evt.currentTarget.className += " active";
}