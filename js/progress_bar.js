var colors = ['progress1', 'progress2', 'progress3'];
var buttons = ['minusTwentyFive', 'minusTen', 'plusTen', 'plusTwentyFive'];

var ractive = new Ractive({
    el: '.container',
    template: '#template',
    data: {
        colors: colors,
        color: colors[0],
        buttons: buttons,
        progress: 35
    }
});

function changeProgressBarValue() {
    var e = document.getElementById("progessBarType");
    var strUser = e.options[e.selectedIndex].value;
    switch (event.target.innerHTML) {
        case"minusTwentyFive":
            document.getElementById(strUser).value -= 25;
            break;
        case"minusTen":
            document.getElementById(strUser).value -= 10;
            break;
        case"plusTen":
            document.getElementById(strUser).value += 10;
            break;
        case"plusTwentyFive":
            document.getElementById(strUser).value += 25;
            break;
        default :
            break;

    }
}

ractive.on({
    minusTwentyFive: function () {
        changeProgressBarValue();
    },
    minusTen: function () {
        changeProgressBarValue();
    },
    plusTen: function () {
        changeProgressBarValue();
    },
    plusTwentyFive: function () {
        changeProgressBarValue();
    }
});