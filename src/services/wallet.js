import { PublicKey, SystemProgram, TransactionInstruction } from '@solana/web3.js';
import { Token } from '@solana/spl-token';

export const createAssociatedTokenAccountIfNeeded = async (payer, mintAddress) => {
  const connection = new Connection('https://api.mainnet-beta.solana.com'); // Update the endpoint if needed
  const token = new Token(connection, mintAddress, Token.TOKEN_PROGRAM_ID, payer);
  const associatedTokenAccount = await token.getAssociatedTokenAddress(payer);

  // Check if the associated token account exists
  const accountInfo = await connection.getAccountInfo(associatedTokenAccount);
  if (accountInfo === null) {
    // Create an associated token account if it does not exist
    const transaction = new Transaction().add(
      Token.createAssociatedTokenAccountInstruction(
        payer,
        associatedTokenAccount,
        payer,
        mintAddress
      )
    );

    await connection.sendTransaction(transaction, [payer]);
  }
};
