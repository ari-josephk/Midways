const mongoose = require('mongoose');

const searchCountSchema = new mongoose.Schema({
	"searchCount": Number
}, {collection: "SearchCount"})

module.exports = searchCount = mongoose.model("SearchCount", searchCountSchema)