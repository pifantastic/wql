

module.exports = function (sql) {
	sql = sql.replace(/\s?(conjure)\s/i, function () {
		return 'SELECT ';
	});

	return sql;
};
