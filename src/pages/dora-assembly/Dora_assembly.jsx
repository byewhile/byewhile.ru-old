import "./dora_assembly.css";

import { useState } from "react";

import doraImg1 from "/dora-assembly/1.png";
import doraImg2 from "/dora-assembly/2.png";
import doraImg3 from "/dora-assembly/3.png";
import doraImg4 from "/dora-assembly/4.png";
import doraImg5 from "/dora-assembly/5.png";
import doraImg6 from "/dora-assembly/6.png";
import doraImg7 from "/dora-assembly/7.png";
import doraImg8 from "/dora-assembly/8.png";
import doraImg9 from "/dora-assembly/9.png";

const Dora_assembly = () => {
    const [imgsInGame, setImgsInGame] = useState([doraImg1, doraImg2, doraImg3, doraImg4, doraImg5, doraImg6, doraImg7, doraImg8, doraImg9]);
    const [inGame, setInGame] = useState(false);

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    const startGame = () => {
        let numberOfRepeat = 0;
        setInGame(true);

        const spinning = setInterval(() => {
            setImgsInGame(shuffle([...imgsInGame]));
            numberOfRepeat++;

            if (numberOfRepeat == 5) {
                numberOfRepeat = 0;
                setInGame(false);
                clearInterval(spinning);
            }
        }, 100);
    }

    return (
        <main className="dora_assemblyPage">
            <h2>Сборка Доры</h2>
            <div className="gameField">
                {imgsInGame.map((img, index) => (
                    <img key={index} src={img} alt={img}></img>
                ))}
                {inGame ? 
                <button onClick={startGame} disabled>Кнопка</button> 
                : 
                <button onClick={startGame}>Кнопка</button>
                }
            </div>
        </main>
    )
}

export default Dora_assembly