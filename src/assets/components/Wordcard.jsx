import "../style/wordcard.scss"

function Wordcard (props){
    return(
        <div className='wordCard'>            
            <h3>{props.english}</h3>    
            <div>{props.transcription}</div>
            <div>{props.russian}</div>
            <div>{props.topic}</div>           
        </div>
    )
}

export default Wordcard