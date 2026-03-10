import '../styles/GamePage.css';
import { useRef, useState, useEffect } from 'react';
import Timer from './Timer';

export function Game({

}) {
    const cursorRef = useRef(null)
    
    const handleMouseMove = (e) => {
        const xPos = e.clientX;
        const yPos = e.clientY;
        const cursor = cursorRef.current;
        cursor.style.transform = `translate(${xPos}px, ${yPos}px)`
    }
    const handleMouseClick = (e) => {
        const xPos = e.clientX;
        const yPos = e.clientY;
        console.log('Position data sent to backend for validation. Data sent: ', 'x:',e.clientX,'y:',e.clientY)
    }
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
    console.table(cursorRef.current)
    return (
        <div className='game-container content'>
            <div className="character-list">
                <ul>
                    <li>Zombie Wizard</li>
                    <li>Baby Dragon</li>
                    <li>Witch Gnome</li>
                    <li>Ghoul Nurse</li>
                </ul>
            </div>
            <div className="game-board" onClick={(e) => handleMouseClick(e)}>
                <img src="/med_difficulty.jpg" alt="search and find image" />
            </div>
            <div className="scoreboard">
                <Timer />
                <ul>
                    <li>James</li>
                    <li>Mary</li>
                    <li>Kyle</li>
                    <li>Cindy</li>
                    <li>Carl</li>
                    <li>Brandon</li>
                    <li>Kimmy</li>
                    <li>Garret</li>
                    <li>Arnold</li>
                    <li>Robert</li>
                </ul>
            </div>
            <div ref={cursorRef} className="custom-cursor"></div>
        </div>
    )
}
export default Game;