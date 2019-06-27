const format = require('date-format');
const fs = require('fs');

exports.getTime = function(){
  var date = new Date()
  date.setHours(date.getHours() + 2)
  return date.toISOString().replace('T', ' ').replace(/\..+/, '');
}

var getTime1 = function() {
  var date = new Date()
  date.setHours(date.getHours() + 2)
  return date.toISOString().replace('T', ' ').replace(/\..+/, '');
}

exports.log = function(a) {
  console.log("[" + getTime1() + "]" + a);
}