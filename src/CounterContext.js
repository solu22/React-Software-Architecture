import { createContext, useState } from "react";

export const CounterContext = createContext()

export const CounterProvider = ({ children})=>{

    const [ numOfClicks, setNumOfClicks] = useState(0)
    

    const increment= (incrementBy) =>{
        setNumOfClicks(numOfClicks + incrementBy)
    }

    return <CounterContext.Provider value = {{numOfClicks, increment}}>{children}</CounterContext.Provider>

}