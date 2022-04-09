require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture street cost spice column install immense army gentle'; 
let testAccounts = [
"0xc543ec855ad199e67628f82ce152c80f638567dc98651811544e186e0a5d349b",
"0x0e7602f2c08b141cb951f6ec2d8e183cdfb4735cd0b61a997409ff49ac414172",
"0x8f7a928d168c6966bfedbac55c1117adb6f8ca3aca1af7b756669633915d857a",
"0x74bf987ddd9917bb12373f74b8329dc9ce02c5180b906d55178b5773d8eddb66",
"0x9e41997c56c2d6f9322a5feff213f0c758bdb2fcd931da863645a046e1cc5c9c",
"0x456bedd2b1ae55fd7a2abf429defdac69d06cdd899c66546dfe49cdcb863bff6",
"0x936f31d391c353a847812faa9444473859fcb9c978d1b8ac36e8f109cef3c344",
"0x82d0978eecf8cbdcabed45b9eb60047bfb6665f3afdaa31278e17f86f002b4c9",
"0xaddcb5621a8036aa65b9aa19bcae4bd8ce11e10b0153abf553dafbe1805221cd",
"0x40cb955a2810d49f7b1048dbb3d5c41c28b2305cf8afcf55ef4ef54b4b0a5bd3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

