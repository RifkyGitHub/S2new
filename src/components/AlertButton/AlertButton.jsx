import { useState } from 'react';

export default function AlertButton({ text, message }) {
  const [setText, setDisplayText] = useState("data bisa berubah");

  const handleClick = () => {
    if (setText === message) {
      setDisplayText("data bisa berubah");
    } else {
      setDisplayText(message);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        {text}
      </button>
      <p id="text">{setText}</p>
    </div>
  );
}