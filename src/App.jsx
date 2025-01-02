import { useState } from "react";
import InputBox from "./Component/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(from) || {}; // Ensure fallback to empty object
  const options = Object.keys(CurrencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    if (CurrencyInfo[to]) {
      setConvertedAmount(amount * CurrencyInfo[to]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      <h3 className="text-blue-500 mb-3">Welcome to Hemant's</h3>
      <h1 className="text-3xl font-bold text-orange-500 mb-6">
        Currency Converter App
      </h1>
      <form
        className="w-full max-w-md p-4 bg-white rounded-lg shadow-md space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amt) => setAmount(amt)}
        />

        <button
          type="button"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          onClick={swap}
        >
          Swap
        </button>

        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisable={true}
        />

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
