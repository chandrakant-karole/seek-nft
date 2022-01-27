import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { NFTStorage } from 'https://cdn.jsdelivr.net/npm/nft.storage/dist/bundle.esm.min.js'
import { NFTStorage } from 'nft.storage';
// import Web3 from 'web3';

// import fs from 'fs';
// const fs = eval('require("fs")');
// import { NFTStorage, File } from 'nft.storage'
// import Nft from './Nft';
// const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');





// const endpoint = 'https://api.nft.storage' // the default
// const token = 'API_KEY' // your API key from https://nft.storage/manage

// import { CONTACT_ABI, CONTACT_ADDRESS } from './config';

export const CONTACT_ADDRESS = '0xCF82d5661C1F127EB21DB9B37D7613d29bbd06e3';
export const CONTACT_ABI =
[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "_tokenId",
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
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "_approved",
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
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "CANNOT_TRANSFER_TO_ZERO_ADDRESS",
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
		"name": "NOT_CURRENT_OWNER",
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
				"internalType": "address",
				"name": "_approved",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
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
				"name": "_owner",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_operator",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_uri",
				"type": "string"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "_name",
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
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
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
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
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
				"name": "_operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_approved",
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
				"internalType": "bytes4",
				"name": "_interfaceID",
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
				"name": "_symbol",
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
				"name": "_tokenId",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
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
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export default function Upload() {


let getUser = localStorage.getItem("loginToken")
console.log(getUser)

	if(!getUser){
		window.location.pathname = "/login"
	}

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    const felx = {
        display: 'flex',
        flexDirection: 'column',

        alignItems: 'center'
    }


    function c(){
        let ax = document.getElementById('getFile');
        console.log(ax)
        ax.click();
    }

    // const [postID, setPostID] = useState(null)

    // function mint() {


    // }




		
		
		console.log(preview)
		
	async function openMatamask() {


    console.log('mintNft');
	var urlModify,urlModify1,urlModify2;
	const token =
    new URLSearchParams(window.location.search).get('key') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGExZWVjY0ZFZkQ2ZDY5QkM0MTA5MjRBNUUxREQ0ODA2ZjMxQ2UzMDAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MjQwMzI5OTY0OCwibmFtZSI6InNlZWtfbmZ0In0.rNNOUpQ0hassc9hpe6Cxo-dOPP2NusKrnFgvnUu3ZYo' // your API key from https://nft.storage/manage

	// function log(msg) {
	// 	msg = JSON.stringify(msg, null, 2)
	// 	document.getElementById('out').innerHTML += `${msg}\n`
	//   }

	const userName = document.getElementById('name');
	const userDescription = document.getElementById('description');
	const image = document.getElementById('getFile');
	// const tokenId = document.getElementById('tokenId');

		// const nameEl = document.querySelector('input[type="text"]')
		// if (!nameEl.value) return log('Missing name')
		// const fileEl = document.querySelector('input[type="file"]')
		// if (!fileEl.files.length) return log('No files selected')
		const storage = new NFTStorage({ token })
		// console.log('image',preview)
		
		console.log('xxx',  image.files[0])
		try {
		  const metadata = await storage.store({
			name: userName.value,
			description: userDescription.value,
			image: image.files[0],
		  })
		//   console.log( 'IPFS URL for the metadata', metadata.url )
		  urlModify = metadata.url.split("ipfs://");
		//   console.log("urlModify",urlModify[1])
		  urlModify1 = urlModify[1]
		  urlModify2 = 'https://ipfs.io/ipfs/'+urlModify1;
		  console.log("final url",urlModify2);
		//   console.log({ 'metadata.json contents': metadata.data })
		//   console.log({ 'metadata.json contents with IPFS gateway URLs': metadata.embed() })
		} catch (err) {
		  console.error(err)
		  console.log(err.message)
		}

	//image ipfs and json


        // ===================================================== api =======================================

        // var userName = document.getElementById('name');
        // var userDescription = document.getElementById('description');
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: userName.value, description: userDescription.value,loginUserAddress: "0x79319A973Be6C6F0cbad2206ea4F6573A9ecF223", urlModify: urlModify2 })
        };

        console.log('userDescription',userDescription.value)

        fetch('https://seeknftmint.com:80/api/nftMint', requestOptions)
            .then(response => response.json().then((res) => {
                console.log('res.status', res)
                let response1 = res.status
                console.log(response1)
                // setPostID(response1)
                // console.log(postID)
            }))

			console.log(userName.value)
            window.location.pathname = '/byu/success'
	// contract start

	// console.log("tokenId",tokenId.value);
    // window.ethereum.enable().then((address) => {
    //     let loginUserAddress = address[0]
        
    //     console.log('loginUserAddress',loginUserAddress);
        
    //     window.location.href = "/success";
        
    //     // const contactList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
	// 	// console.log(contactList);

    //      contactList.methods.mint(loginUserAddress, tokenId.value, urlModify)
    //     contactList.methods.MintFixedNFT(nft_name,type,descrption,IPFSimage,serial_number,raritiy)
    //     .send({
    //         from: loginUserAddress,
    //         // gas:500000,
    //         // value: 5
    //         //gasPrice: '210000000'
    //     }).on('error', function(error){
    //         console.log('error');
    //         // location.reload();
    //     }).then( function( info ) {
    //         console.log('success ',info);
    //         // var token_id = info.events.Transfer.returnValues.tokenId;
    //         // var transactionHash = info.transactionHash;

    //     });



    // });

}

    return (
        <>
            <div className="container">
                <div className="row">
					<div className="col-lg-12">
					<pre id="out"></pre>
					</div>
                    <div className="col-lg-12">
                        <div className="uploadContainer">
                            <h3>SeekNFT Mint</h3>
                            <p style={{ fontWeight: ' bold', fontSize: ' 14px' }}>Upload your NFT digital asset.</p>
                            <Link to='/upload' style={{ color: '#000', width: '120px', padding: '3px 37px', textDecoration: 'none', border: '1px solid #15AAF7', background: 'white', fontSize: '14px', borderRadius: '0' }} onClick={c}>
                                Upload</Link>
                            <div>
                                {/* <input id='upload' type="file" style={{backgroundColor: '#fff'}}/> */}
                                <div style={felx}>

                                    <input id='getFile' type='file' style={{display:'none', backgroundColor: 'transparent', color: '#ffff' }} onChange={onSelectFile} />

                                    {selectedFile && <img className='mt-4' style={{ height: '200px', width: '200px'}} alt='df' src={preview} />}
                                    <br />

									{/* {selectedFile && <input className='my-2' type='number' id='tokenId' placeholder='tokenId'/>}  */}
          
                                    {selectedFile &&  
                                        <input id='name' className="wpforms-field-large" style={{width:' 200px', padding:' 0px 10px', fontSize:'.9em'}} type="text" placeholder="name"/>
                                    }
                                    <br />
                                    {selectedFile && 
                                        <textarea id='description' className="wpforms-field-large" style={{width: '200px', height:'100px', padding: '0px 10px', fontSize:'.9em'}} type="text" placeholder="description"></textarea>
                                     
                                    }
                      {selectedFile && <button className='btn btn-dark mt-4' style={{    width: '120px',
    padding: '3px 37px',
    textDecoration: 'none',
    border: '1px solid rgb(21, 170, 247)',
    background: 'white',
    fontSize: '14px',
    borderRadius: '0px',
    color: 'black'}} onClick={openMatamask}>Mint</button>}
                                    <br/>




                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

