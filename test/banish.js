
var wql = require('../lib/wql');

exports.testSimple = function (test) {
    test.expect(1);

    test.ok(wql('BANISH FROM mytable') === 'DELETE FROM mytable');

    test.done();
};
