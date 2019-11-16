const { query } = require("./connectionDB");
function controller(table) {
  let res = "";
  this.table = table;
  this.handleRequest = async function(path, method, data) {
    if (method == "GET") {
      if (path == "grid") {
        res = await query(`SELECT * FROM ${this.table}`);
        return res;
      } else {
        res = await query(`SELECT ${this.table} FROM grid WHERE id=${path}`);
        return res;
      }
    } else if (method == "POST") {
      let dataToInsert = [];
      let keysToInsert = [];
      Object.keys(data).map(function(key) {
        dataToInsert.push(`'${data[key]}'`);
        keysToInsert.push(`${key}`);
      });
      await query(
        `INSERT INTO ${this.table} (${keysToInsert.join(
          ","
        )}) VALUES (${dataToInsert.join(",")})`
      );
      return `INSERT INTO ${this.table}`;
    } else if (method == "PUT") {
      let dataToUpdate = "";
      Object.keys(data).map(function(key) {
        dataToUpdate += `${key}='${data[key]}'`;
      });
      await query(
        `UPDATE ${this.table} VALUES (${dataToUpdate}) WHERE id = ${id} `
      );
      return `UPDATE ${this.table}`;
    } else if (method == "DELETE") {
      res = await query(`SELECT * FROM grid WHERE id=${id}`);
      await query(`DELETE FROM ${this.table} WHERE id = ${id}`);
      return res;
    }
  };
}

module.exports = { controller };
