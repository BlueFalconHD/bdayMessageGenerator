function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
};


var opacity4 = 0;

function MyFadeFunction4() {


    if (opacity4 < 1) {
        opacity4 += .1;
        setTimeout(function() { MyFadeFunction4() }, 100);
    }
    document.getElementById('text4').style.opacity = opacity4;
}


var opacity3 = 0;

function MyFadeFunction3() {


    if (opacity3 < 1) {
        opacity3 += .1;
        setTimeout(function() { MyFadeFunction3() }, 100);
    }
    document.getElementById('text3').style.opacity = opacity3;
}

var opacity2 = 0;

function MyFadeFunction2() {


    if (opacity2 < 1) {
        opacity2 += .1;
        setTimeout(function() { MyFadeFunction2() }, 100);
    }
    document.getElementById('text2').style.opacity = opacity2;

}


var opacity = 0;

function MyFadeFunction() {

    if (opacity < 1) {
        opacity += .1;
        setTimeout(function() { MyFadeFunction() }, 100);
    }
    document.getElementById('text').style.opacity = opacity;


}


function gifTime() {
    let box = document.getElementById('box')

    box.src = "https://i.postimg.cc/SxkvLdpJ/openingbox.gif"

    window.setTimeout(function() {
        MyFadeFunction()
    }, 700);

    window.setTimeout(function() {
        MyFadeFunction2()
    }, 700);

    window.setTimeout(function() {
        MyFadeFunction3()
    }, 700);

    window.setTimeout(function() {
        MyFadeFunction4()
    }, 700);
}





function setcustoms() {
    let to = decodeURI(GetURLParameter('to'))
    let from = decodeURI(GetURLParameter('from'))
    let message = decodeURI(GetURLParameter('msg'))
    let customImage = decodeURI(GetURLParameter('img'))


    let hbd = document.getElementById('text')
    hbd.innerHTML = "Happy Birthday " + to + '!'

    let msge = document.getElementById('text2')
    msge.innerHTML = message

    let frome = document.getElementById('text3')
    frome.innerHTML = from

    let btmimg = document.getElementById('text4')
    btmimg.src = customImage
    
    let title = document.getElementsByName('title')
    title.innerHTML = 'Happy Birthday ' + to + '!'
}


function generateLink() {
    let elf = document.getElementById('from')
    let elt = document.getElementById('to')
    let elm = document.getElementById('message')
    let eli = document.getElementById('imageurl')

    let elfv = elf.value
    let eltv = elt.value
    let elmv = elm.value
    let eliv = eli.value

    // Main

    let link = 'bluefalconhd.github.io/bdayMessageGenerator/index.html?to=' + eltv + '&from=' + elfv + '&msg=' + elmv + '&img=' + eliv

    document.getElementById('link').innerHTML = link


}
