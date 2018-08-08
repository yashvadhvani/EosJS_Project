const fs = require('fs');
let upload = (eos) => {
    let str = fs.readFileSync('./server/controllers/files/SampleTextFile_5kb.txt', (err, res) => {
        if (!err)
            return res;
    }).toString();
    eos.contract('s').then((contract) => {
        contract.upload({
                author: "str",
                id: 2321,
                hash: str
            }, {
                authorization: ['str@active']
            })
            .then((res) => {
                fs.writeFileSync("SampleTextFile_1212kb_1.json", JSON.stringify(res), {
                    flag: 'w'
                });
            })
            .catch((err) => {
                console.log(err);
            })
    });
}
module.exports =upload;