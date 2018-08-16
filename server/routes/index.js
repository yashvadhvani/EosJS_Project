const upload = require("./upload");
const getTable = require("./getTable");
const getTransaction = require("./getTransaction");
const issue = require("./issue");
const transfer = require("./transfer");
module.exports = router => {
  upload(router);
  getTable(router);
  getTransaction(router);
  issue(router);
  transfer(router);
};
