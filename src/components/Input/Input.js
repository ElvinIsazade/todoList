import React from 'react'
import InputCss from "./Input.module.css";

const Input = ({text,changeText,handlerSubmit,edit}) => {
  return (
    <>
        <form className={InputCss.text_form} onSubmit={handlerSubmit}>
            <input 
              type="text" 
              placeholder='Enter todo here' 
              className={InputCss.text} 
              value={text} 
              onChange={changeText}
            />
            <button type='submit' className= {InputCss.submit}>{edit ? "Edit" : "Submit"}</button>
        </form>


    </>
  )
}

export default Input