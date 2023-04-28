// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract HelloWorld {
    string private message;

    constructor(string memory _message) {
        console.log("Je deploie ce message : ", _message);
        message = _message;
    }

    function setMessage(string memory _message) public {
        console.log("Changing message from '%s' to '%s'", message, _message);
        message = _message;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    fallback() external payable {
        if (msg.value > 100) {
            getMessage();
        }
    }
}