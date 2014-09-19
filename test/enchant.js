
var wql = require('../lib/wql');

exports.testSimple = function (test) {
    test.expect(1);

    test.ok(wql('ENCHANT myTable') === 'UPDATE myTable');

    test.done();
};
