import React, { useState } from 'react';
import './index.css';
import ConfettiExplosion from 'react-confetti-explosion';

function App() {
  const [buttonMoved, setButtonMoved] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [gifUrl, setGifUrl] = useState('https://giphy.com/embed/Z5zgnZIuqvaEQtT2fm');
  const [isExploding, setIsExploding] = React.useState(false);

  const handleYesClick = () => {
    setGifUrl('https://giphy.com/embed/5dUllWbKVlaqmMTvHb');
    setIsExploding(true);
    setButtonMoved(true);
    setShowResult(true);
    setTimeout(() => {
      setIsExploding(false);
    }, 3000);
  };

  const handleNoClick = () => {
    setGifUrl('https://giphy.com/embed/TL2Yr3ioe78tO');
  };

  const randomPosition = () => {
    if (!buttonMoved) {
      const button = document.getElementById('no-button');
      let newX, newY;
      newX = (Math.random() < 0.5 ? 1 : -1) * Math.random() * 500;
      newY = (Math.random() < 0.5 ? 1 : -1) * Math.random() * 300;
      button.style.transform = `translate(${newX}px, ${newY}px)`;
      button.classList.add('flashing');

      const button2 = document.getElementById('yes-button');
      const currentWidth = button2.clientWidth;
      const newWidth = currentWidth + 10;

      button2.style.width = `${newWidth}px`;

      const currentFontSize = parseInt(window.getComputedStyle(button2).fontSize, 10);
      button2.style.fontSize = `${currentFontSize + 1}px`;
    }
  };

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <iframe src={gifUrl} width="400" height="240" frameBorder="0" className="giphy-embed"></iframe>
      <br></br>
      <br></br>
      <br></br>
      {isExploding && <ConfettiExplosion />}
      {showResult ? (
        <p className="text-5xl mb-5 text-white">Mega ciebie lobr!</p>
      ) : (
        <p className="text-5xl mb-5 text-white">Czy zostaniesz moją walentynką?</p>
      )}
      <div className="flex">
        {showResult ? null : (
          <>
            <button
              id="yes-button"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg m-2 transition duration-300 text-2xl"
              onClick={handleYesClick}
            >
              Tak
            </button>
            <button
              id="no-button"
              className={`bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg m-2 transition duration-300 text-2xl ${
                buttonMoved ? 'animate-move' : ''
              }`}
              onClick={handleNoClick}
              onMouseEnter={randomPosition}
            >
              Nie
            </button>
          </>
        )}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
