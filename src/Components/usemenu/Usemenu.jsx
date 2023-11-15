import { useEffect, useState } from "react"





const useMenu=()=>{
   const [menu ,setmenu]=useState(null)
   const [loding ,setloding]=useState(true)

    useEffect(()=>{
        fetch('http://localhost:5001/menu')
        .then(res=>res.json())
        .then(data=>{
            setmenu(data)
            setloding(false)

        })

    },[])
    return [menu, loding]
}

export default useMenu