'use strict';

function first () { 
    //do something
    setTimeout(function() {
        console.log("first function");
    }, 1000);
}

function second () {
    console.log("second function");
}

first();
second();

function learnJs (lang, callback) {
    console.log("Я учу "+lang);
    callback();
}

learnJs("JS", function() {
    console.log("Я прошел урок");
});