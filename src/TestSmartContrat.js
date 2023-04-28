import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import HelloWorld from './artifacts/contracts/HelloWorld.sol/HelloWorld.json'; // ABI pour interagir avec le smart contract

const smAddress = '0x3Aa5ebB10DC797CAC828524e59A333d0A371443c'; // récupéré de la commande : npx hardhat run scripts/deploy.js --network localhost

function TestSmartContract() {
    const [message, setMessageValue] = useState();

    useEffect(() => {
        getMessage();
    }, [])

    async function requestAccount() {
        await window.ethereum.request({method: 'eth_requestAccounts'});
    }

    async function getMessage() {
        if(typeof window.ethereum !== 'undefined') { // vérifier que metamask est connecté au frontend
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(smAddress, HelloWorld.abi, provider);
            try {
                const data = await contract.getMessage(); // appel de la fonction getMessage du smart contract
                setMessageValue(data);
            } catch(err) {
                console.log(err);
            }
        }
    }

    async function setMessage() {
        if(!message) return
        if(typeof window.ethereum !== 'undefined') { // vérifier que metamask est connecté au frontend
            await requestAccount(); // on attend que l'utilisateur utilise son compte sur le site
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner(); // signer les transactions
            const contract = new ethers.Contract(smAddress, HelloWorld.abi, signer);
            const transaction = await contract.setMessage(message);
            setMessageValue('');
            await transaction.wait();
            getMessage();
        }
    }

    return (
        <div className="SmartContract">
            <p>{message}</p>
            <input onChange={e => setMessageValue(e.target.value)} placeholder="Set Message" />
            <button onClick={setMessage}>Set Message to blockchain</button>
        </div>
    );
}

export default TestSmartContract;