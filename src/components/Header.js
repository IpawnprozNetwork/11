import React from 'react';
import './Header.css';  // Make sure the CSS file exists

const Header = () => {
  return (
    <header className="header">
      <img
        src="/assets/images/logo.png"
        alt="Trust in Pawgress Logo"
        className="logo"
      />
      <nav>
        <a href="https://discord.gg/f7gWTpVZdP" target="_blank" rel="noopener noreferrer">
          <img
            src="/assets/images/telegram-icon.png"  // Ensure this path is correct
            alt="Telegram"
            className="social-icon"
          />
        </a>
        <a href="https://x.com/Dionysus3301" target="_blank" rel="noopener noreferrer">
          <img
            src="/assets/images/twitter-icon.png"  // Ensure this path is correct
            alt="Twitter"
            className="social-icon"
          />
        </a>
        <a href="https://dexscreener.com/solana/eri5yvhmiuuv7rp3ddmvdqdbnjga8pvrwnby64qemoon" target="_blank" rel="noopener noreferrer">
          <img
            src="/assets/images/cmc-icon.png"  // Ensure this path is correct
            alt="CoinMarketCap"
            className="social-icon"
          />
        </a>
        <a href="https://jup.ag/swap/SOL-ERi5yvhMiUUV7rp3dDmVdqDBNJgA8pvrwnBy64QEmoon" target="_blank" rel="noopener noreferrer">
          <img
            src="/assets/images/coingecko-icon.png"  // Ensure this path is correct
            alt="CoinGecko"
            className="social-icon"
          />
        </a>
      </nav>
    </header>
  );
};

export default Header;
