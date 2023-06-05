import React, { useState } from 'react'

const Hide = () => {
    const [hide,setHide] = useState();
    const show=()=>{
      setHide(!hide); // if hide is true false hojayega
    }
 

  return (
    <>
    {/* condition ? <expression if true> : <expression if false></expression> */}
   {hide ?<h1>dixy</h1>:<h1></h1>}
   <button onClick={show} className="btn btn-info">show/hide</button>
  
    </>
  )
}

export default Hide
