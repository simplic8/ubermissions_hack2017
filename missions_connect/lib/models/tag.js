let db = require('../db');

module.exports.getTag = (name, callback) => {

	if (!name) {
		callback(null,null);
		return;
	}
	db.getConnection(
		(err,connection) => {
			if (err) {
				callback(err);
				return;
			}

			let query = "SELECT * FROM tags WHERE name = ?";
			connection.query(query,[name], 
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

module.exports.addTag = (name,tag_type,callback) => {
	if (!name) {
		return callback("No given name",null);
	}
	db.getConnection(
		(err,connection) => {
			if (err) {
				return callback(err);
			}

			let query = "INSERT INTO tags (name,tag_type) VALUES (?,?)";
			connection.query(query,[name,tag_type],
				(err,result) => {					
					if (err) {
						connection.release();						
						if (err.code == 'ER_DUP_ENTRY') {
							return module.exports.getTag(name,callback);
						}
						else{
							console.log(err);
							return callback(err);
						}
					}				
					console.log(result);
					let find_query = "SELECT * from tags WHERE id = ?";
					connection.query(query,result.insert_id, 
						(err,rows) => {
							connection.release();
							if (err) {
								return callback(err);
							}

							if (!rows || rows.length <= 0) {
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
	);	
}