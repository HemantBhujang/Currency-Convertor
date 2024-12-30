import {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],// app do not get crash so that we assigns empty array.
    selectCurrency = "usd",
    amountDisable= false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId() // for creating unique value 

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}// to check whether the amount is disabled or not
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // we are firing one event and calling a methond, values are present in Events is taken as String so. But we want the number value therefore we typecase here!
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => ( // loop lavla #map loop sagalya values bhetatil callback madhe
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                {/* key is adding the perfomance to the loop in jsx
                    remember the key whenever using Loop.
                */}
                </select>
            </div>
        </div>
    );
}

export default InputBox
// here we successfully created one component