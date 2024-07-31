const solc = require('solc');
const fs = require('fs');
const path = require('path');

// Path to your Solidity file
const filePath = path.resolve(__dirname, 'YourContract.sol');
const source = fs.readFileSync(filePath, 'utf8');

// Compile the Solidity file
const input = {
    language: 'Solidity',
    sources: {
        'YourContract.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['abi', 'evm.bytecode'],
            },
        },
    },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

// Create output directory if it doesn't exist
const outputDir = path.resolve(__dirname, 'output_directory');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Write the ABI and bytecode to files
for (const contractName in output.contracts['YourContract.sol']) {
    const contract = output.contracts['YourContract.sol'][contractName];
    fs.writeFileSync(
        path.resolve(outputDir, `${contractName}.abi`),
        JSON.stringify(contract.abi, null, 2)
    );
    fs.writeFileSync(
        path.resolve(outputDir, `${contractName}.bin`),
        contract.evm.bytecode.object
    );
}