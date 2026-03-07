import '../styles/Game.css';
import { useRef, useState, useEffect } from 'react';

export function Game({

}) {
    const cursorRef = useRef(null)
    
    const handleMouseMove = (e) => {
        const xPos = e.clientX;
        const yPos = e.clientY;
        const cursor = cursorRef.current;
        cursor.style.transform = `translate(${xPos}px, ${yPos}px)`
    }
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
    
    return (
        <div className='game-container'>
            <div className="character-list">
                <ul>
                    <li>Zombie Wizard</li>
                    <li>Baby Dragon</li>
                    <li>Witch Gnome</li>
                    <li>Ghoul Nurse</li>
                </ul>
            </div>
            <div className="game-board"></div>
            <div className="scoreboard">
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