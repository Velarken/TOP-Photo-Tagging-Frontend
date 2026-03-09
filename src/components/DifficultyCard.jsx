export function DifficultyCard({
    imgPath,
    title,
    key
}) {

    return (
        <div className="select-card">
            <div className="select-title"><h2>{title}</h2></div>
            <div className='select-img'>{imgPath}</div>
        </div>
    )
}
export default DifficultyCard;