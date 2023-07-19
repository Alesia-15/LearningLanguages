import "../style/wordlist.scss"

function Wordlist (props){
    return(
        <>
        <tr className={`${(props.isSelected&&"selected")}`}>
          <td>{props.english}</td>
          <td>{props.transcription}</td>
          <td>{props.russian}</td>
          <td>{props.topic}</td>
          <td>
            <button className="btnSave"></button>
            <button className="btnPen"></button>
            <button className="btnDelete"></button>
          </td>
        </tr>
      </>
    )
}

export default Wordlist