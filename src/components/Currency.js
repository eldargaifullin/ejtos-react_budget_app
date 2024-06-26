import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const handleCurrencyChange = (newCurrency) => {
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
      };
    return (
        <div className='alert alert-secondary'>
      <label className="currency-label">Currency: </label>
      <select
        id="currency"
        value={currency}
        onChange={(e)=> handleCurrencyChange(e.target.value)}
        className="currency-dropdown">
        <option value="£">Pound (£)</option>
        <option value="$">Dollar ($)</option>
        <option value="€">Euro (€)</option>
        <option value="₹">Rupee (₹)</option>
      </select>
    </div>
    );
};
export default Currency;
