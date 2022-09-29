function AddMTVNet() {
	ethereum.request({
		method: 'wallet_addEthereumChain',
		params: [{
			chainId: web3.utils.toHex('61621'),
			chainName: 'MultiVAC Mainnet',
			nativeCurrency: {
				name: 'MTV',
				symbol: 'MTV',
				decimals: 18
			},
			rpcUrls: ['https://rpc.mtv.ac'],
			blockExplorerUrls: ['https://e.mtv.ac']
		}],
	})
		.then(() => console.log('network added'))
		.catch(() => console.log('could not add network'))
}

function ToMTVNet() {
	var chainIdHex = web3.utils.toHex('61621');
	ethereum.request({
		method: 'wallet_switchEthereumChain',
		params: [{ chainId: chainIdHex }],
	})
		.then(() => console.log('network has been set'))
		.catch((e) => {
			if (e.code === 4902) {
				console.log('network is not available, add it');
				AddMTVNet();
			} else {
				console.log('could not set network');
			}
		})
}

//function ToMTVNet() {
//	var chainIdHex = web3.utils.toHex('5777');
//	ethereum.request({
//		method: 'wallet_switchEthereumChain',
//		params: [{ chainId: chainIdHex }],
//	})
//		.then(() => console.log('network has been set'))
//		.catch((e) => {
//			if (e.code === 4902) {
//				console.log('network is not available, add it');
//				AddMTVNet();
//			} else {
//				console.log('could not set network');
//			}
//		})
//}


// Отображение количества токенов и цены на странице
const maxQuantity = 100; //Максимальное количество нфт которое можно купить
const minQuantity = 1; // Минимальное количество нфт которое можно купить
let costOneToken = 2000;// Цена одного нфт

function max() {
	let col = document.getElementById('fader');
	var currentQuantity = parseInt(col.value);
	if (currentQuantity < maxQuantity) {
		col.value = maxQuantity;
		let total = maxQuantity * costOneToken;
		document.getElementById('total').innerHTML = total + ' MTV + gas';
		document.getElementById('output').innerHTML = col.value;
	};
}

function pls() {
	let col = document.getElementById('fader');
	var currentQuantity = parseInt(col.value);
	if (currentQuantity < maxQuantity) {
		col.value = parseInt(col.value) + 1;
		let total = parseInt(col.value) * costOneToken;
		document.getElementById('total').innerHTML = total + ' MTV + gas';
		document.getElementById('output').innerHTML = col.value;
	};
}

function mins() {
	let col = document.getElementById('fader');
	var currentQuantity = parseInt(col.value);
	if (currentQuantity > minQuantity) {
		col.value = parseInt(col.value) - 1;
		let total = parseInt(col.value) * costOneToken;
		document.getElementById('total').innerHTML = total + ' MTV + gas';
		document.getElementById('output').innerHTML = col.value;
	};
}

function rangeslider(value) {
	let col = document.getElementById('fader');
	document.getElementById("output").innerHTML = parseInt(col.value);
	document.getElementById("output").style.width = + value + "";
	let total = parseInt(col.value) * costOneToken;
	document.getElementById('total').innerHTML = total + ' MTV + gas';
}

function rangeslidermob(value) {
	let col = document.getElementById('fader');
	document.getElementById("output").innerHTML = parseInt(col.value);
	document.getElementById("output").style.width = + value + "";
	let total = parseInt(col.value) * costOneToken;
	document.getElementById('total').innerHTML = total + ' MTV + gas';
}

let contractabi =
	[
		{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [],
			"name": "ApprovalCallerNotOwnerNorApproved",
			"type": "error"
		},
		{
			"inputs": [],
			"name": "ApprovalQueryForNonexistentToken",
			"type": "error"
		},
		{
			"inputs": [],
			"name": "ApprovalToCurrentOwner",
			"type": "error"
		},
		{
			"inputs": [],
			"name": "ApproveToCaller",
			"type": "error"
		},
		{
			"inputs": [],
			"name": "BalanceQueryForZeroAddress",
			"type": "error"
		},
		{
			"inputs": [],
			"name": "MintToZeroAddress",
			"type": "error"
		},
		{
			"inputs": [],
			"name": "MintZeroQuantity",
			"type": "error"
		},
		{
			"inputs": [],
			"name": "OwnerQueryForNonexistentToken",
			"type": "error"
		},
		{
			"inputs": [],
			"name": "TransferCallerNotOwnerNorApproved",
			"type": "error"
		},
		{
			"inputs": [],
			"name": "TransferFromIncorrectOwner",
			"type": "error"
		},
		{
			"inputs": [],
			"name": "TransferToNonERC721ReceiverImplementer",
			"type": "error"
		},
		{
			"inputs": [],
			"name": "TransferToZeroAddress",
			"type": "error"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "approved",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "Approval",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "bool",
					"name": "approved",
					"type": "bool"
				}
			],
			"name": "ApprovalForAll",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "previousOwner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "OwnershipTransferred",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "flipSale",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "getApproved",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getRemainder",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				}
			],
			"name": "isApprovedForAll",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "maxPerTx",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "maxSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "count",
					"type": "uint256"
				}
			],
			"name": "mint",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "mintEnabled",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "ownerOf",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "price",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_tokenId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_salePrice",
					"type": "uint256"
				}
			],
			"name": "royaltyInfo",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "_data",
					"type": "bytes"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"internalType": "bool",
					"name": "approved",
					"type": "bool"
				}
			],
			"name": "setApprovalForAll",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "uri",
					"type": "string"
				}
			],
			"name": "setBaseURI",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_maxSupply",
					"type": "uint256"
				}
			],
			"name": "setMaxSupply",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_newPrice",
					"type": "uint256"
				}
			],
			"name": "setPrice",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_receiver",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_percentage",
					"type": "uint256"
				}
			],
			"name": "setRoyalties",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_maxPerTx",
					"type": "uint256"
				}
			],
			"name": "setmaxPerTx",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "bytes4",
					"name": "interfaceId",
					"type": "bytes4"
				}
			],
			"name": "supportsInterface",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "tokenURI",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "withdrawRemainder",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	];

let contractaddress = '0x101e3a539edfd21c435F591F6D9857ECABc28Ef4';
let mintContract;

/*const WEB3_PROVIDER = "HTTP://127.0.0.1:7545";*/
const WEB3_PROVIDER = "HTTP://rpc.mtv.ac";

let account;
let wallet;

let connected = false;

async function web3providerMetamask() {
	if (typeof window.ethereum !== 'undefined') {
		web3 = new Web3(web3.currentProvider);
		console.log('MetaMask is installed!');

		const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		window.account1 = accounts[0];

		ethereum
			.request({ method: 'eth_accounts' })
			.then(handleAccountsChanged)
			.catch(console.error);
	} else {
		web3 = new Web3(new Web3.providers.HttpProvider(WEB3_PROVIDER));
		console.log('Please install MetaMask!');
	}
}

async function getAccount() {
	if (typeof window.ethereum !== 'undefined') {
		web3 = new Web3(web3.currentProvider);
		console.log('MetaMask is installed!');
		ToMTVNet();
		// window.wallet = 1;
		ethereum
			.request({ method: 'eth_requestAccounts' })
			.then(handleAccountsChanged)
			.catch((err) => {
				if (err.code === 4001) {
					console.log('Please connect to MetaMask.');
				} else {
					console.error(err);
				}
			});
	} else {
		web3 = new Web3(new Web3.providers.HttpProvider(WEB3_PROVIDER));
		console.log('Please install MetaMask!!!!!');
	}
	window.location.href = "#";
	window.wallet = 1;
	mintContract = new web3.eth.Contract(contractabi, contractaddress);
}

async function PostAddressAccount() {
	document.getElementById('output').innerHTML = '1';
	let total = 1 * costOneToken;
	document.getElementById('total').innerHTML = total + ' MTV + gas';

	document.getElementById('result').innerHTML = 'CONNECT';

	document.getElementById('smart_contract_text').innerHTML = contractaddress;

	web3 = new Web3(web3.currentProvider);
	mintContract = new web3.eth.Contract(contractabi, contractaddress);
	update_totalsupply();
	setInterval(update_totalsupply, 3000);
}

function handleAccountsChanged(accounts) {
	if (accounts.length === 0) {
		document.getElementById('result').innerHTML = 'CONNECT';
		document.getElementById('resultButton').style.pointerEvents = 'auto';
		connected = false;
	} else {
		account = accounts[0]
		document.getElementById('result').innerHTML = accounts[0].slice(0, 6) + '..' + accounts[0].slice(38, 42);
		document.getElementById('resultButton').style.pointerEvents = 'none';
		connected = true;
	}

}

async function mint() {
	if (!connected) {
		getAccount();
	} else {
		await mint2();
	}
}

async function mint2() {
	var count = document.getElementById('fader').value;

	document.getElementById('mint_button').innerHTML = '';
	document.getElementById('mint_button').classList.add('loaded_but');

	await mintContract.methods.mint(count).send({ value: web3.utils.toWei(String(count * costOneToken), 'ether'), from: account })
		.then(() => {
			document.getElementById('mint_button').classList.remove('loaded_but');
			document.getElementById('mint_button').innerHTML = 'MINT NOW';
		})
		.catch(() => {
			document.getElementById('mint_button').classList.remove('loaded_but');
			document.getElementById('mint_button').innerHTML = 'MINT NOW';
		})

	update_totalsupply();

}

async function update_totalsupply() {
	try {
		var totalSupply = await mintContract.methods.totalSupply().call();
		document.getElementById('minted_nft').innerHTML = totalSupply + '/10000';
	} catch (err) {
		
	}
}
