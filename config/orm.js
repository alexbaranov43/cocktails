var connection = require("./connection.js")

var orm = {

    selectAll: function(tableInput, colToSearch, valOfCol, cb){
        var queryString = ("SELECT * FROM ?? WHERE ?? = ?")
        connection.query (queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;
            cb(result)
        })
    },

    insertOne: function(valOfCol, cb){
        var queryString =("INSERT INTO cocktails VALUES (?)")
        connection.query(queryString, valOfCol, function(err, reslt){
            if (err) throw err;
            cb(result)
        })

    },

    updateOne: function(tableInput, colToSearch, valOfCol, cb){
        var queryString=("UPDATE ? SET ?? = ?")
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result){
            if (err) throw err;
            cb(result)
        })
    }
}

module.exports = orm;
