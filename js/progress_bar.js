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
    debugger;
    switch (event.target.innerHTML) {
        case"MinusTwentyFive":
            document.getElementById(strUser).value -= 25;
            document.getElementById(strUser+"Value").innerHTML = document.getElementById(strUser).value;
            break;
        case"MinusTen":
            document.getElementById(strUser).value -= 10;
            document.getElementById(strUser+"Value").innerHTML = document.getElementById(strUser).value;
            break;
        case"PlusTen":
            document.getElementById(strUser).value += 10;
            document.getElementById(strUser+"Value").innerHTML = document.getElementById(strUser).value;
            break;
        case"PlusTwentyFive":
            document.getElementById(strUser).value += 25;
            document.getElementById(strUser+"Value").innerHTML = document.getElementById(strUser).value;

            break;
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


