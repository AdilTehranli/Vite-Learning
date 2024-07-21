import  { useState } from 'react'

const useCopyToClipboard = (text) => {

    const [copy,setCopy] = useState(false)

    const Copy = () =>{
        navigator.clipboard.writeText(text)
        .then(()=>setCopy(true))
        .catch(()=>setCopy(false));
    }

  return [copy,Copy]
}

export default useCopyToClipboard