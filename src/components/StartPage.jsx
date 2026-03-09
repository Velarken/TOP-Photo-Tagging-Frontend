import { useState } from "react";
import DifficultyCard from "./DifficultyCard";
import '../styles/StartPage.css';

export function StartPage({

}) {
    const [username,setUsername] = useState('')
    const [difficultyOptions,setDifficultyOptions] = useState([
        {
            id: 0,
            imgPath: '/img0.jpg',
            title: 'First Option'
        },
        {
            id: 1,
            imgPath: '/img1.jpg',
            title: 'Second Option'
        },
        {
            id: 2,
            imgPath: '/img2.jpg',
            title: 'Third Option'
        }
    ]);
    const [difficultyChoice,setDifficultyChoice] = useState();
    const [isPlayerReady,setIsPlayerReady] = useState(false);

    const listDifficulties = difficultyOptions.map((option) => {
        return (
            <DifficultyCard key={option.id} imgPath={option.imgPath} title={option.title} />
        )
            
    })
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // query backend for data
    }

    return (
        <form className="start-page content" onSubmit={(e) => handleFormSubmit(e)}>
            <div className="select-difficulty">
                <button className="back">&#171;</button>
                {listDifficulties}
                <button className="forward">&#187;</button>
            </div>
            <div className="select-name">
                <label htmlFor="username">Username:  </label>
                <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <button type="submit">Play</button>
        </form>
    )
}

export default StartPage;