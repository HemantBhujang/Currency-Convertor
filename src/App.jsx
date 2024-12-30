import { useState } from "react"
import InputBox from "./Component/InputBox"
import useCurencyInfo from "./Hooks/useCurrencyInfo"
function App() {
  const [amount, setAmount] = useState(0);
  const [from , setFrom] = useState("usd");
  const [to , setTo] = useState("inr");
  const [convertedAmount , setConvertedAmount] = useState(0);

  const CurrencyInfo =useCurencyInfo(from);

  const options = Object.keys(CurrencyInfo)// ERROR: O--> o

  const swap = () =>{
    setFrom(to);
    setTo(from);
  }

  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to])
  }

  

  return (
    <>
    <h1 className="text-3xl bg-orange-500">Currency Convertor App</h1>
    <div>
    <form
      onSubmit={(e)=>{
        e.preventDefault();
        convert();
      }}>
    </form>
    </div>

    <div>
      <InputBox
      label='from'
      amount={amount}
      currencyOptions={options}
      onCurrencyChange={(currency)=>
      setAmount(amount)}
      selectCurrency={from}
      onAmountChange={(amount)=>{
        setAmount(amount)
      }}
      />
    </div>

    <div>
      <button onClick={swap}> swap</button>
    </div>

    <div>
      <InputBox
      label='to'
      amount={convertedAmount}
      currencyOptions={options}
      onCurrencyChange={(currency)=>setTo(currency)}
        selectCurrency={from}
        amountDisable
      />
    </div>

    <button>convert{from.toUpperCase()} to {to.toUpperCase}</button>
    
    </>
  )
}

export default App
