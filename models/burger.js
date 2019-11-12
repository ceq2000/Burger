var orm = require("../config/orm.js");

var burger = {
selectAll: function(callback){
orm.selectAll("burgers", function(result){
callback(result);
});
},

insertOne: function(column, callback){
orm.insertOne("burgers", column, function(result){
callback(result);
});
},

updateOne: function(columnValue, condition, callback){
orm.updateOne("burgers", columnValue, condition, function(result){
callback(result);
});
},

deleteOne: function(condition, callback) {
orm.deleteOne("burgers", condition, function(result){
callback(result);
});
}
};

module.exports = burger;