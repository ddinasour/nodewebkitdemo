//person.js
module.exports = function(db){
    return db.define("person", 
            {
            name      : String,
            surname   : String,
            age       : Number,
            male      : Boolean,
            continent : [ "Europe", "America", "Asia", "Africa", "Australia", "Antartica" ], // ENUM type
            photo     : Buffer, // BLOB/BINARY
            data      : Object // JSON encoded
            }, 
            {
                methods: {
                    fullName: function () {
                    return this.name + ' ' + this.surname;
                    }
                }
            }
        );
}
