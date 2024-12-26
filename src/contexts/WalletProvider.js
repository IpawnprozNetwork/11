import React, { createContext, useState, useMemo } from 'react';
import { WalletProvider as SolanaWalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'; // Correct wallet import

const WalletContext = createContext();

const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState(null);

  const walletAdapters = useMemo(() => {
    const phantom = new PhantomWalletAdapter();
    return [phantom];
  }, []);

  return (
    <SolanaWalletProvider wallets={walletAdapters}>
      {children}
    </SolanaWalletProvider>
  );
};

export { WalletProvider, WalletContext };
