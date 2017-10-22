let db = require('../db');

module.exports.getAgencyForId = (agency_id, callback) => {

	if (!agency_id) {
		callback(null,null);
		return;
	}
	db.getConnection(
		(err,connection) => {
			if (err) {
				callback(err);
				return;
			}

			let query = "SELECT * FROM agencies WHERE id = ?";
			connection.query(query,[agency_id], 
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