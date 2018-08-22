// const Eos = require("eosjs");
// var resolvedProm = Promise.resolve(Eos());
// const keyProvider = [
//   "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3",
//   "5Jv36u6CjqEUkJmomWC9khZXXUiMXzhv4D9Y4yeaUARLxP1uKYw",
//   "5K9YhtoyDW686KfaU8d5Wc9jx1GzhKnzPNMMtoCTNwR6MdrdbY5",
//   "5JLxXMLsfeazcHwmJSVqJxbpfHxUXVNREan9d7JbTmTctfks7Xi"
// ];
// const httpEndpoint = "http://127.0.0.1:8888";

// module.exports = thenProm = resolvedProm.then(function(value) {
//   Eos({
//     chainId: value.chain_id,
//     keyProvider,
//     httpEndpoint
//   });
//   console.log(Eos().create());
// });
// var axios = require("axios");
var request = require("request");
var querystring = require("querystring");
var formdata = { y: "" };
// var contentLength = formdata.length;
var options = {
  method: "POST",
  uri: "http://127.0.0.1:9999/v1/wallet/create",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  body: querystring.stringify(formdata)
};

request.post(options, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
// axios
//   .post(
//     "http://127.0.0.1:9999/v1/wallet/create",
//     querystring.stringify({
//       n: "Fred"
//     }),
//     {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       }
//     }
//   )
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
