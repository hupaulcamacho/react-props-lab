import React from 'react';
import DonationsPage from './Components/DonationsPage'
import DonationPageWithHooks from './Components/DonationPageWithHooks'
import Banner from './Components/Banner'
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <DonationPageWithHooks />
    </div>
  );
}

export default App;
