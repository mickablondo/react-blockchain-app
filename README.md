# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes du projet

Pour réaliser ce projet test, je me suis appuyé sur cette [vidéo Youtube de Ben BK](https://www.youtube.com/watch?v=poyVa6yd4X8&list=PLBV4f2pTYexqgdiVpLOWlF-E5sTLPimot&index=35).  

### Stack technique
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)
  
 - [Node.js](https://nodejs.org/en)
 - [React.js](https://reactjs.org/)
 - [ethers.js](https://docs.ethers.org/v3/) => alternative à [web3.js](https://web3js.readthedocs.io/en/v1.8.2/)
 - [Hardhat](https://hardhat.org/docs) => alternative à [Truffle](https://trufflesuite.com/)
 - [VS Code](https://code.visualstudio.com/)
 - [Metamask](https://metamask.io/)
 - [Solidity](https://docs.soliditylang.org)

### Etapes
- Initialisation du projet React
```bash
npx create-react-app react-blockchain-app
```
- Installation des librairies
```bash
npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers
npm install --save-dev "hardhat@^2.14.0" "@nomicfoundation/hardhat-toolbox@^2.0.0"
```
- Initialisation Hardhat
```bash
npx hardhat
```
- Compilation du Smart Contract (Hardhat en fournit un par défaut)
```bash
npx hardhat compile
```
- Mise en place d'un noeud fourni par Hardhat avec 20 adresses et clés privées pour réaliser les tests
```bash
npx hardhat node
```
- Déploiement du Smart Contract sur le noeud précédemment créé
```bash
npx hardhat run .\scripts\deploy.js --network localhost
```  

_A décrire : metamask => install extension / connexion localhost / import compte depuis clé privée_

- Let's go démarrer l'appli
```bash
npm start
```  


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
