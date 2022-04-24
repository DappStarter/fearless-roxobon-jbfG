require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind evil journey kitchen orange syrup'; 
let testAccounts = [
"0xc25a15c8d185ba8218292388c7767ab5699b45fbe4b9db45ecd2fcd884bb6c5e",
"0x3af86daec6ec6783fca19f508a6b7a0d6714ae9cc0bc2108eae94b418e45aaa5",
"0x1fa943e0cd8b1e44346c154e733f0a4d3d9ca408656f1555d76d5d04d20e7874",
"0xc2ab8a9115c30dc75289b527ca82e8b7d42c33f418d781feac772e33a61818e1",
"0x85d9794619a73c75602c6d7503418449172fb1841e5dfe623c8166146ebd465c",
"0x5284d66843e6aa9736a7aba6c9e7bdd5b72da32c244b1e2d25f97ebc6ddf7a85",
"0xd62d0b3d941764ccd7ade1ba86175639b9e51ee7730025d5031f7814aa5b502c",
"0x27dac52f42e1feecaaf144504f1c088a9ef8f01710907f794dd3cff03bf1148e",
"0xccde9c59eadcdfe43b6f19896c87d8fd3b49845fd61fddf2280c433c8773120d",
"0x01919979c6de5d3dd12f08620816827759a5982b716c42627684eca4af12dd30"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


