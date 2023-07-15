import "../style/wordlist.css"

function Wordlist (props){
    return(
        <div className='wordList'>            
            <h3>{props.word}</h3>    
            <div>{props.meaning}</div>
            <div>{props.transcription}</div>
            <div>{props.translation}</div>
            <div>{props.topic}</div>           
        </div>
    )
}

export default Wordlist