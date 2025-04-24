import React, { useState } from 'react';

const NewListForm = ({ onAdd, onCancel }) => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [amount, setAmount] = useState(0.0);
  const [period, setPeriod] = useState('');
  const [renewalDate, setRenewalDate] = useState('');
  const [alarm, setAlarm] = useState(true);
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSub = {
      id: Date.now(),
      name,
      startDate,
      amount,
      period,
      renewalDate,
      alarm,
      url,

    };
    onAdd(newSub);
    setName('');
    setStartDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
    <p>Service Name</p>
      <input
        type="text"
        placeholder="Type Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    <p>Start Date</p>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
    <p>Renewal Date</p>
      <input
        type="date"
        value={renewalDate}
        onChange={(e) => setRenewalDate(e.target.value)}
        required
      />
    <p>Payment Amount</p>
        <input
        type="number"
        placeholder="Type Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />    
    <p>Payment Period</p>
    <select value={period} onChange={(e) => setPeriod(e.target.value)}>
    <option value="daily">Daily</option>
    <option value="weekly">Weekly</option>
    <option value="monthly">Monthly</option>
    <option value="yearly">yearly</option>
    </select>  
    <p>URL</p>
    <input 
        type="url"
        value={url}
        placeholder="Type URL"
        onChange={(e) => setUrl(e.target.value)}
        required
    />
    <p>Alarm</p>
    <input
        type="radio"
        name="alarm"
        value= {true}
        checked={alarm === 'true'}
        onChange={(e) => setAlarm(e.target.value)}
        required
    />
        On
    <input
        type="radio"
        name="alarm"
        value={false}
        checked={alarm === 'false'}
        onChange={(e) => setAlarm(e.target.value)}
        required
    />
        Off
      <button type="submit">Submit</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default NewListForm;