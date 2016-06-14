var progressList = ['progress1', 'progress2', 'progress3'];
var buttons = ['MinusTwentyFive', 'MinusTen', 'PlusTen', 'PlusTwentyFive'];

var ractive = new Ractive({
    el: '.container',
    template: '#template',
    data: {
        progressList: progressList,
        selectedOption: progressList[0],
        buttons: buttons,
        progress: 35
    }
});

function changeProgressBarValue() {
    var e = document.getElementById("progessBarType");
    var strUser = e.options[e.selectedIndex].value;
    var txt;
    var numb;
    var newValue;
    switch (event.target.innerHTML) {
        case"MinusTwentyFive":
            document.getElementById(strUser).value -= 25;
            document.getElementById(strUser + "Value").innerHTML = document.getElementById(strUser).value + "%";
            break;
        case"MinusTen":
            document.getElementById(strUser).value -= 10;
            document.getElementById(strUser + "Value").innerHTML = document.getElementById(strUser).value + "%";
            break;
        case"PlusTen":
            document.getElementById(strUser).value += 10;
            if (document.getElementById(strUser).value >= 100) {
                txt = document.getElementById(strUser + "Value").innerHTML;
                numb = txt.match(/\d/g).join("");
                newValue = parseInt(numb);
                newValue += 10;
                document.getElementById(strUser + "Value").innerHTML = newValue + "%";
                break;
            }
            else {
                document.getElementById(strUser + "Value").innerHTML = document.getElementById(strUser).value + "%";
                break;
            }
        case
        "PlusTwentyFive":
            document.getElementById(strUser).value += 25;
            if (document.getElementById(strUser).value >= 100) {
                txt = document.getElementById(strUser + "Value").innerHTML;
                numb = txt.match(/\d/g).join("");
                newValue = parseInt(numb);
                newValue += 25;
                document.getElementById(strUser + "Value").innerHTML = newValue + "%";
                break;
            }
            else {
                document.getElementById(strUser + "Value").innerHTML = document.getElementById(strUser).value + "%";
                break;
            }
        default :
            break;
    }
}

ractive.on({
    MinusTwentyFive: function () {
        changeProgressBarValue();
    },
    MinusTen: function () {
        changeProgressBarValue();
    },
    PlusTen: function () {
        changeProgressBarValue();
    },
    PlusTwentyFive: function () {
        changeProgressBarValue();
    }
});


