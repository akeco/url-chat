var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    route: {
      type: String
    },
    members: {
        type: Array,
        default: []
    }
});


roomSchema.pre('save', function(next) {
    this.route = this.name.toLowerCase();
    this.name = (this.name.indexOf("www.") !=-1) ? this.name.split("www.")[1] : this.name;
    this.name = (this.name.indexOf("/") !=-1) ? this.name.split("/")[0] : this.name;
    this.name = (this.name.indexOf("?") !=-1) ? this.name.split("?")[0] : this.name;
    this.name = this.name.toLowerCase();
    this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    next();
});


module.exports = mongoose.model('rooms', roomSchema);