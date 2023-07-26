import React, { useState } from 'react';
import "./wordlist.scss"
import save from "../../images/save.svg"
import pen from "../../images/pen.svg"
import del from "../../images/delete.svg"
import close from "../../images/close.svg"

function Wordlist (props){
  const [passed, setPassed] = useState(props.passed || false);
    const handleClick = () => {
      setPassed(!passed);
    };
    return(
        <>
        {passed ? 
        <tr className='rowList selected'>
          <td><input type='text' value={props.english}/></td>
          <td><input type='text' value={props.transcription}/></td>
          <td><input type='text' value={props.russian}/></td>
          <td><input type='text' value={props.topic}/></td>
          <td className="btn">
            <button>
              <img src={save} alt="save" />
            </button>
            <button onClick={handleClick}>
            <img src={close} alt="close"></img>
          </button>
          </td>
        </tr>
        :<tr className='rowList'>
        <td>{props.english}</td>
        <td>{props.transcription}</td>
        <td>{props.russian}</td>
        <td>{props.topic}</td>
        <td className="btn">
          <button onClick={handleClick}>
            <img src={pen} alt="save"></img>
          </button>
          <button >
            <img src={del} alt="del"></img>
          </button>
        </td>
      </tr>}
      </>
    )
}

export default Wordlist