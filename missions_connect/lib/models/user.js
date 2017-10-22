let db = require('../db');

module.exports.getUserForId = (user_id, callback) => {

	if (!user_id) {
		callback(null,null);
		return;
	}
	db.getConnection(
		(err,connection) => {
			if (err) {
				callback(err);
				return;
			}

			let query = "SELECT * FROM users WHERE id = ?";
			connection.query(query,[user_id], 
				(err,rows) => {
					connection.release();
					if (err) {
						callback(err);
						return;
					}

					if (!rows || !rows.length) {
						return callback(null,null);
					}
					else {
						return callback(null,rows[0]);
					}
				}
			);
		}
	);
}