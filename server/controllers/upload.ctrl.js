
const config=require('./shared/config');
const upload=require('./shared/upload');
module.exports = {
    upload: (req,res,next) => {
        
        config
        .then((eos) => {
           upload(eos);
        })
        // let str = fs.readFileSync('./server/controllers/files/SampleTextFile_5kb.txt', (err, file) => {
        //     if (!err)
        //         return file;
        // }).toString();
        // eos.contract('s').then((contract) => {
        //     contract.upload({
        //             author: "str",
        //             id: 613,
        //             hash: str
        //         }, {
        //             authorization: ['str@active']
        //         })
        //         .then((res) => {
        //             fs.writeFileSync("SampleTextFile_1212kb_1.json", JSON.stringify(res), {
        //                 flag: 'w'
        //             });
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         })
        // });
    }
};