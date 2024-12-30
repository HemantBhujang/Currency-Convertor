import { useState, useEffect } from "react";

// custome hooks

function useCurrencyInfo(currency){
    const [data , setData] = useState({});
    useEffect(()=>{
        let url = (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>setData(res));
        console.log(data);
        
    },[currency])// currency is dependency when ever this currency is called this hook/function is run
    console.log(data);
    return data;    
}

export default useCurrencyInfo;