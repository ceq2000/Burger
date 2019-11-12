$(function(){
$(".devour").on("click", function(event){
var id = $(this).data("id");
var newDevour = $(this).data("newdevour");

var newDevourState = {
devoured: newDevour
};

// This sends PUT request.
$.ajax("/api/burgers/" + id, {
type: "PUT",
data: newDevourState
}).then(
function() {
console.log("changed devoured to", newDevour);
// Reloads page for updated burger list
location.reload();
}
);
});

$("#add-burger").on("submit", function(event){
// Prevents defaults on submit
event.preventDefault();

var newBurger = {
name: $("#burger").val().trim(),
//devoured sql database auto default is false, false is not needed
};

// POST request
$.ajax("/api/burgers", {
type: "POST",
data: newBurger
}).then(
function() {
console.log("new burger");
// Reloads page for an updated burger list
location.reload();
}
);
});

$(".delete").on("click", function(event) {
var id = $(this).data("id");

// DELETE request
$.ajax("/api/burgers/" + id, {
type: "DELETE",
}).then(
function() {
console.log("deleted burger", id);
// Reloads page to get the updated burger list
location.reload();
}
);
});
});