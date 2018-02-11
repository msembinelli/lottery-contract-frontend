import web3 from './web3';
var YAML = require("yamljs");
var contractFile = require("./contract.yml");

var deployed = YAML.load(contractFile);
const address = deployed.contract.address;
const abi = JSON.parse(deployed.contract.abi);

export default new web3.eth.Contract(abi, address);