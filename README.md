reggae
======

Chilled object registry, to support your application design.
inspired by mongoose.model("yourModel"), raggae offers the same registry like function for your own code.

## Install ##
    npm install reggae

## how to ##
### To use as registry ###

In File A:

    var raggae = require('raggae');

    raggae.set('controller.rastaman', function (value) {
        return 'vibration ' + value;
    });


In File B:

    var raggae = require('raggae');
    console.log( raggae.get('controller.rastaman')('yeah') );



### To use as object helper ###

    var scope = {scopedA: {scopedB: {}}};
    raggae.set('scopedA.scopedB.scopedC.scopedD', 5, scope); // {scopedA: {scopedB: {scopedC: {scopedD: {}}}}};
    raggae.get('scopedA.scopedB.scopedC.scopedD', 5, scope); // returns 5


Easy - Use it wisely ;)
