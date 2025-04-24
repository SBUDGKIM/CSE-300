import React, { useState, useEffect } from 'react';
import SubscriptionList from './subscriptionList.js';
import NewListForm from './newListForm.js';

const App = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('subscriptions');
    if (stored) {
      setSubscriptions(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  }, [subscriptions]);

  const handleAdd = (newSub) => {
    setSubscriptions([...subscriptions, newSub]);
    setShowForm(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Subscription Reminder</h2>
      {showForm ? (
        <NewListForm onAdd={handleAdd} onCancel={() => setShowForm(false)} />
      ) : (
        <>
          <button onClick={() => setShowForm(true)}>+ New Post</button>
          <button onClick={() => {
            localStorage.removeItem('subscriptions');
            setSubscriptions([]);
          }}>Delete All</button>
          <SubscriptionList subscriptions={subscriptions} />
        </>
      )}
    </div>
  );
};

export default App;