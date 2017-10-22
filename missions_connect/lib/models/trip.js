let db = require('../db');
let tags = require('./tag');

module.exports.getTripForId = (trip_id, callback) => {

	if (!trip_id) {
		callback(null,null);
		return;
	}
	db.getConnection(
		(err,connection) => {
			if (err) {
				callback(err);
				return;
			}

			let query = "SELECT * FROM trips WHERE id = ?";
			connection.query(query,[trip_id], 
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

module.exports.getTagsForIds = (trip_ids,callback) => {
	if (!trip_ids || trip_ids.length <= 0) {
		return callback(null,[]);
	}

	db.getConnection(
		(err,connection) => {
			let query = "SELECT trip_id, tags.name as name FROM trip_tags JOIN tags ON tags.id = trip_tags.tag_id WHERE trip_id IN (?)";
			connection.query(query, [trip_ids],
				(err,rows) => {
						connection.release();
					if (err) {
						return callback(err);
					}
					if (!rows || !rows.length) {
						return callback(null,[]);
					}
					else {						
						return callback(null,rows);
					}
				}
			);
		}
	);
}

module.exports.getCount = (filters, callback) => {	
	if (!filters) {
		db.getConnection(
			(err,connection) => {
				if (err) {
					callback(err);
					return;
				}
	
				let query = "SELECT COUNT(1) as total FROM trips";
				connection.query(query, 
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
							return callback(null,rows[0].total);
						}
					}
				);
			}
		);		
	}
	else {
		db.getConnection(
			(err,connection) => {
				if (err) {
					callback(err);
					return;
				}
	
				let query = "SELECT COUNT(1) as total FROM (SELECT trips.*, COUNT(1) as score FROM trips JOIN trip_tags ON trip_tags.trip_id = trips.id JOIN tags ON tags.id = trip_tags.tag_id WHERE tags.name IN (?) GROUP BY trips.id) as t1";
				connection.query(query, [filters],
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
							return callback(null,rows[0].total);
						}
					}
				);
			}
		);
	}		
}

module.exports.getTrips = (filters, limit, page, callback) => {	
	if (!filters) {
		db.getConnection(
			(err,connection) => {
				if (err) {
					callback(err);
					return;
				}
	
				let query = "SELECT trips.*, agencies.name as agency_name, agencies.logo as agency_logo FROM trips JOIN agencies ON agencies.id = trips.agency_id ORDER BY created_at DESC LIMIT ? OFFSET ? ";
				connection.query(query,[limit, page*limit], 
					(err,rows) => {
						connection.release();
						if (err) {
							callback(err);
							return;
						}
	
						if (!rows || !rows.length) {
							return callback(null,[]);
						}
						else {
							return callback(null,rows);
						}
					}
				);
			}
		);		
	}
	else {
		db.getConnection(
			(err,connection) => {
				if (err) {
					callback(err);
					return;
				}

				let query = "SELECT trips.*, agencies.name as agency_name, agencies.logo as agency_logo, COUNT(1) as score FROM trips JOIN trip_tags ON trip_tags.trip_id = trips.id JOIN tags ON tags.id = trip_tags.tag_id JOIN agencies ON agencies.id = trips.agency_id WHERE tags.name IN (?) GROUP BY trips.id ORDER BY score DESC LIMIT ? OFFSET ?";
				connection.query(query,[filters,limit,page*limit],
					(err,rows) => {
						connection.release();
						if (err) {
							return callback(err);							
						}

						if (!rows || !rows.length) {
							return callback(null,null);
						}
						else {
							return callback(null,rows);
						}

					}
				);					
			}
		);

	}		
}

module.exports.addTagToTrip = (trip_id,tag_name,tag_type,callback) => {
	if (!trip_id) {
		return callback("No trip id");
	}

	if (!tag_name) {
		return callback("no tag name");
	}

	tags.addTag(tag_name,tag_type,
		(err,tag) => {
			if (err) {
				return callback(err);
			}

			db.getConnection(
				(err,connection) => {
					if (err) {
						return callback(err);
					}

					let query = "INSERT INTO trip_tags (trip_id,tag_id) VALUES(?,?)";

					connection.query(query,[trip_id,tag.id],
						(err,result) => {
							return callback(err,result);
						}
					);
				}
			);						
		}
	);
}