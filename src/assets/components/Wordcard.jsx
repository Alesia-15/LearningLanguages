import "../style/wordcard.css"

function Wordcard (props){
    return(
        <div className='wordCard'>            
            <h3>{props.word}</h3>    
            <div>{props.meaning}</div>
            <div>{props.transcription}</div>
            <div>{props.translation}</div>
            <div>{props.topic}</div>           
        </div>
    )
}

export default Wordcard