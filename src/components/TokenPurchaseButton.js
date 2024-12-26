// src/components/TokenPurchaseButton.js
import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, SystemProgram, Transaction } from '@solana/web3.js'; // <-- Make sure this line is added

const TokenPurchaseButton = () => {
  const { publicKey, connected, connect, disconnect } = useWallet();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConnectWallet = async () => {
    if (!connected) {
      try {
        await connect(); // Connect to the wallet
      } catch (err) {
        console.error('Failed to connect wallet:', err);
      }
    }
  };

  const handleDisconnectWallet = async () => {
    if (connected) {
      try {
        await disconnect(); // Disconnect from the wallet
      } catch (err) {
        console.error('Failed to disconnect wallet:', err);
      }
    }
  };

  const handlePurchaseToken = async () => {
    if (!connected) {
      alert('Please connect your wallet first.');
      return;
    }

    setIsProcessing(true);

    try {
      const connection = new Connection('https://api.mainnet-beta.solana.com');
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: 'TOKEN_ADDRESS', // Replace with the actual token address
          lamports: 1000000000, // Amount to send in lamports (1 SOL = 1 billion lamports)
        })
      );

      // Send the transaction
      const signature = await connection.sendTransaction(transaction, [publicKey]);
      await connection.confirmTransaction(signature);
      
      alert('Token purchase successful!');
    } catch (error) {
      console.error('Purchase failed:', error);
      alert('Token purchase failed!');
    }

    setIsProcessing(false);
  };

  return (
    <div>
      <button onClick={handleConnectWallet}>
        {connected ? 'Wallet Connected' : 'Connect Wallet'}
      </button>

      {connected && (
        <button onClick={handleDisconnectWallet}>
          Disconnect Wallet
        </button>
      )}

      <button
        onClick={handlePurchaseToken}
        disabled={isProcessing || !connected}
      >
        {isProcessing ? 'Processing...' : 'Purchase Token'}
      </button>
    </div>
  );
};

export default TokenPurchaseButton;
