import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import HelloWorld from './artifacts/contracts/HelloWorld.sol/HelloWorld.json'; // ABI pour interagir avec le smart contract

const smAddress = '0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82'; // récupéré de la commande : npx hardhat run scripts/deploy.js --network localhost

function TestSmartContract() {
    // utilisation du hook state pour que les changements puisse être pris en compte dans le DOM
    const [messageValue, setMessageValue] = useState();

    // utilisation du hook effect pour exécuter du code après la mise à jour du DOM
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
        if(!messageValue) return
        if(typeof window.ethereum !== 'undefined') { // vérifier que metamask est connecté au frontend
            await requestAccount(); // on attend que l'utilisateur utilise son compte sur le site
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner(); // signer les transactions
            const contract = new ethers.Contract(smAddress, HelloWorld.abi, signer);
            const transaction = await contract.setMessage(messageValue);
            setMessageValue('');
            await transaction.wait();
            getMessage();

            // affichage dans les logs d'un message émis par le smart contract
            contract.on("MessageChanged", msg => {
                console.log(msg);
            });
        }
    }

    return (
        <div className="SmartContract">
            <p>{messageValue}</p>
            <input onChange={e => setMessageValue(e.target.value)} placeholder="Set Message" />
            <button onClick={setMessage}>Set Message to blockchain</button>
        </div>
    );
}

export default TestSmartContract;