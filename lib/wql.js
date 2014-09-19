
module.exports = function (sql) {

    var wqlMap = {
        'banish':       'DELETE',
        'conjure':      'SELECT',
        'enchant':      'UPDATE',
        'invoke':       'CREATE',
        'meld':         'JOIN',
        'realm':        'DATABASE',
        'tower':        'TABLE',
        'transfigure':  'SET'
    };

    var wqlRegex = new RegExp('\\b('+Object.keys(wqlMap).join('|')+')\\b','gi');

	sql = sql.replace(wqlRegex, function (match, submatch) {
		return (match[0] === ' ' ? ' ' : '') + wqlMap[submatch.toLowerCase()] + (match.slice(-1) === ' ' ? ' ' : '');
    });

	return sql;
};
