import { useState } from "react"

const useToggle = () => {

    const [open,setOpen] = useState(false)

    const change =() =>{
        setOpen(!open)
    }
    

  return {
    open, change
  }
}

export default useToggle