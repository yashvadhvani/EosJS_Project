const config = require("./shared/config");
const upload = require("./shared/upload");
module.exports = {
  upload: (req, res, next) => {
    config.then(eos => {
      upload(eos, res, req.body.data);

      // res.json(result);
    });
  }
};
