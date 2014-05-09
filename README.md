reggae
======

Chilled object registry, to support your application design.
inspired by mongoose.model("yourModel"), raggae offers the same registry like funktion for your own code.

## Install ##
    npm install reggae

## how to ##
In File A:

    var raggae = require('raggae');

    raggae.set('controller.rastaman', function (value) {
        return 'vibration ' + value;
    });


In File B:

    var raggae = require('raggae');
    console.log( raggae.get('controller.rastaman')('yeah') );



Easy - Use it wisely ;)
