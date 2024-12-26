// src/components/Wallet.js

import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter, SolflareWalletAdapter, WalletConnectWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Wallet = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const { connect, connected, disconnect } = useWallet();

  const walletConnectUri = 'your-walletconnect-uri-here'; // Add your actual WalletConnect URI here
  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new WalletConnectWalletAdapter({
      uri: walletConnectUri,
    })
  ];

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      await connect(wallets[0]); // You can change this to allow dynamic wallet selection
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <div className="wallet-container">
      <h1>Welcome to Your Wallet</h1>

      {/* Display GIF when connecting */}
      {isConnecting && (
        <img
          src="https://raw.githubusercontent.com/IpawnprozNetwork/altcoin/89b7b1209a388a5123dde6b04d1f5bc73e1580f2/public/gif.gif"
          alt="Loading..."
          width="480"
          height="480"
        />
      )}

      {/* Wallet connection status */}
      <p>Your wallet balance: 0 SOL</p>

      {/* Show connect/disconnect button */}
      {connected ? (
        <button onClick={handleDisconnect}>Disconnect Wallet</button>
      ) : (
        <button onClick={handleConnect} disabled={isConnecting}>
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}

      {/* Social Media Links */}
      <div className="social-links">
        <h3>Follow Us:</h3>
        <ul>
          <li>
            <a href="https://discord.gg/f7gWTpVZdP" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/discord-icon.png" alt="Discord" />
            </a>
          </li>
          <li>
            <a href="https://x.com/Dionysus3301" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/twitter-icon.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://dexscreener.com/solana/eri5yvhmiuuv7rp3ddmvdqdbnjga8pvrwnby64qemoon" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/cmc-icon.png" alt="CoinMarketCap" />
            </a>
          </li>
          <li>
            <a href="https://jup.ag/swap/SOL-ERi5yvhMiUUV7rp3dDmVdqDBNJgA8pvrwnBy64QEmoon" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/coingecko-icon.png" alt="CoinGecko" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Wallet;
