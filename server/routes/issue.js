const getIssueController = require("./../controllers/issue.ctrl");

module.exports = router => {
  router.route("/issue").get(getIssueController.issue);
};
