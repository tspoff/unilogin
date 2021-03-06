
import Web3 from 'web3';
import React, { Component } from 'react';
import EIP1077Credentials from '../libs/EIP1077Credentials';
import PrivateKeySign from './PrivateKeySign';

const ABI = [];

const web3 = new Web3(new Web3.providers.HttpProvider("https://localhost:8545"));

const CONTRACT_ADDRESS = "";


class Eip1077 extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount(){

        var { Account, PublicKey, PrivateKey} = EIP1077Credentials("coogan");
        console.log()
        const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS,{ from:Account });

        // var { transactionHash, signedTransactionHash } = PrivateKeySign(0,0,this.bufferPrivateKey);
    }

    sendTransaction = () => {
       alert("send");
    }

    render(){
    return(
    <div>

    //  1) Using the styling of EIP1077Credentials-Name, please make the input below a "sign-up" button
    //  that intiates the creation of the EIP1077 Credentials using the inputted string as the localStorage
    // setItem name.

    <div>
    <p>Create a new login ID:</p>
    <input type="text" value=""/>
    <button onClick={this.sendTransaction}>Send</button>
    </div>

   // 2) Below, display a JSON object containing login ID, the Ethereum address and public key
   // that will be used to generate a user ID contract

     <div>
     <p>Send your new account and public key to the factory contract:</p>
     <input type="button" value="Create User ID contract"/>
     </div>

    // 3) Using the options below, generate a data payload that contains the
    // desired 'action to execute', the hash of that payload, and the signed hash
    // of that payload.
    //
    // To complete this, you must use PrivateKeySign component along with the EIP1077 payload
    // component (still needs to be added)

    <div>
    <p>What action would you like to send along?</p>
    <input type="button" value="READ()"/>
    <input type="button" value="WRITE()"/>
    <input type="button" value="PING()"/>
    </div>

    </div>
    )}
}

  export default Eip1077;
