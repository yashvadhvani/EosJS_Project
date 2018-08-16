const fs = require("fs");
let upload = eos => {
  let str = fs
    .readFileSync(
      "./server/controllers/files/SampleTextFile_500kb.txt",
      (err, res) => {
        if (!err) return res;
      }
    )
    .toString();
  eos.contract("upload").then(contract => {
    contract
      .upload(
        {
          author: "user",
          id: 2324,
          hash: str
        },
        {
          authorization: ["user@active"]
        }
      )
      .then(res => {
        fs.writeFileSync("SampleTextFile_500kb.json", JSON.stringify(res), {
          flag: "w"
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};
module.exports = upload;
