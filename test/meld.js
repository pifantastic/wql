
var wql = require('../lib/wql');

exports.testSimple = function (test) {
    test.expect(1);

    test.ok(wql('mytable1 MELD mytable2') === 'mytable1 JOIN mytable2');

    test.done();
};
