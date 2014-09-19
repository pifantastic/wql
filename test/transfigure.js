
var wql = require('../lib/wql');

exports.testSimple = function (test) {
    test.expect(1);

    test.ok(wql('TRANSFIGURE myKey=myValue') === 'SET myKey=myValue');

    test.done();
};
