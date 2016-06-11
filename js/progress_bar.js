var progessList = ['progress1', 'progress2', 'progress3'];
var buttons = ['MinusTwentyFive', 'MinusTen', 'PlusTen', 'PlusTwentyFive'];

var ractive = new Ractive({
    el: '.container',
    template: '#template',
    data: {
        progessList: progessList,
        selectedOption: progessList[0],
        buttons: buttons,
        progress: 35
    }
});

function changeProgressBarValue() {
    var e = document.getElementById("progessBarType");
    var strUser = e.options[e.selectedIndex].value;
    switch (event.target.innerHTML) {
        case"MinusTwentyFive":
            document.getElementById(strUser).value -= 25;
            break;
        case"MinusTen":
            document.getElementById(strUser).value -= 10;
            break;
        case"PlusTen":
            document.getElementById(strUser).value += 10;
            break;
        case"PlusTwentyFive":
            document.getElementById(strUser).value += 25;
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


