import React, { useState } from 'react'
import Moncontext from './Moncontext'


const MoncontextProvider=({children})=> {
    const[data, setdata]=useState({
            name:" no name",
            id:"",
            pictureUrl:""


    })



    return(

        <Moncontext.Provider value={{ data}}>
                {children}

        </Moncontext.Provider>
    )
}

export default MoncontextProvider