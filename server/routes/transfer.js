const getTransferController = require("./../controllers/transfer.ctrl");

module.exports = router => {
  router.route("/transfer").get(getTransferController.transfer);
};
