import "./wordlist.scss"
import save from "../../images/save.svg"
import pen from "../../images/pen.svg"
import del from "../../images/delete.svg"


function Wordlist (props){
    return(
        <>
        <tr className={`${(props.isSelected&&"selected")}`}>
          <td>{props.english}</td>
          <td>{props.transcription}</td>
          <td>{props.russian}</td>
          <td>{props.topic}</td>
          <td className="btn">
            <button className="btnSave">
              <img src={save} alt="save" />
            </button>
            <button className="btnPen">
              <img src={pen} alt="save"></img>
            </button>
            <button className="btnDelete">
              <img src={del} alt="save"></img>
            </button>
          </td>
        </tr>
      </>
    )
}

export default Wordlist