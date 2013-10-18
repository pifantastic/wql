
var wql = require('../lib/wql');

exports.testSimple = function (test) {
	test.expect(1);

	test.ok(wql('CONJURE * FROM table') === 'SELECT * FROM table');

	test.done();
};
