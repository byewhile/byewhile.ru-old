import "./find_emoji.css";

import { useState, useEffect } from "react";

const Find_emoji = () => {
  const [level, setLevel] = useState(1);
  const [correctEmoji, setCorrectEmoji] = useState("");
  const [emojiInGame, setEmojiInGame] = useState(["😂", "🤣", "😥", "😢", "🙄", "🤤", "😭", "🥺"]);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const levelUp = () => {
    setLevel(level + 1);
  }

  useEffect(() => {
    setCorrectEmoji(emojiInGame[getRandomInt(emojiInGame.length)]);
    setEmojiInGame([...emojiInGame].sort(() => Math.random() - 0.5));
  }, [, level])
  
  return (
    <main className="find_emojiPage">
      <h2><span>Найди: {correctEmoji}</span><span>Уровень: {level}</span></h2>

      <div className="gameField">
        {emojiInGame.map((emoji, index) => (
          <div key={index}>
          {correctEmoji == emoji ?
            <span onClick={levelUp}>{emoji}</span>
          :
            <span>{emoji}</span>}
          </div>
        ))}
      </div>
    </main>
  )
}

export default Find_emoji