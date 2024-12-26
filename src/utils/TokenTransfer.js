import React, { useState } from 'react';

const TokenTransfer = () => {
  const [amount, setAmount] = useState('');

  const handleTokenTransfer = () => {
    // Replace the alert with your actual Solana transfer logic when ready
    alert(`Transferring ${amount} tokens`);
  };

  return (
    <div>
      <input 
        type="text" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Enter amount to transfer" 
      />
      <button onClick={handleTokenTransfer}>Transfer Tokens</button>
    </div>
  );
};

export default TokenTransfer;
