const mysql = require("mysql");
const cp = require("child_process");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "hack2progress"
});
function query(query) {
  console.log("Executing query!");
  return new Promise(function(resolve, reject) {
    con.query(query, function(err, result, fields) {
      if (!err) resolve(JSON.parse(JSON.stringify(result)));
      else reject(err);
    });
  });
}

module.exports = { query };
