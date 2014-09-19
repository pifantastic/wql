
var wql = require('../lib/wql');

exports.testSimple = function (test) {
    test.expect(1);

    test.ok(wql('INVOKE wordthatwouldberealm') === 'CREATE wordthatwouldberealm');

    test.done();
};
