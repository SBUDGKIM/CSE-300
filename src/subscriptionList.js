import React from 'react';

const SubscriptionList = ({ subscriptions }) => {
  return (
    <div>
      <h2>Subscriptions</h2>
      <ul>
        {subscriptions.map((sub) => (
          <li key={sub.id} style={{ marginBottom: '1rem' }}>
            <strong>{sub.name}</strong> ({sub.period})<br />
            Start: {sub.startDate} / Renewal: {sub.renewalDate} <br />
            Amount: ${sub.amount} <br />
            Alarm: {sub.alarm ? 'On' : 'Off'} <br />
            {sub.url && (
              <>
                Website: <a href={sub.url} target="_blank" rel="noreferrer">{sub.url}</a>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionList;
