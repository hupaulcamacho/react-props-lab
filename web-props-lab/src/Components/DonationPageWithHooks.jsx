import React, { useState, useEffect } from 'react';
import useInputHook from '../Hooks/useInputHook'
import DonationsList from './DonationsList'
import DonationProgress from './DonationProgress';
import DonationForm from './DonationForm';

const DonationPageWithHooks = () => {
    const [name, setName] = useInputHook('');
    const [amount, setAmount] = useInputHook(5);
    const [message, setMessage] = useInputHook('');
    const [donations, setDonations] = useState([])
    const [goal, setGoal] = useState(1000)
    const [progress, setProgress] = useState(0)

    const currentTotal = () => {
        let calculateCurrentTotal = 0;
        donations.forEach((donation) => {
            calculateCurrentTotal += parseInt(donation.amount)
        })
        return calculateCurrentTotal
    }
    const allFieldsValid = () => {
        return (name && message && amount > 0);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault()
        let donationInfo = {
            name: name,
            amount: parseInt(amount),
            message: message
        }

        let donationsCopy = [...donations];
        donationsCopy.push(donationInfo);
        if(allFieldsValid()) {
            // setName('')
            // setAmount(5)
            // setMessage('')
            setDonations(donationsCopy)
        } else {
            alert('Please make sure you complete all fields and specify a donation amount')
        }
    }

    return (
        <div className='donations-page'>
            <DonationsList 
            donations={donations}
            />
            <div className='progress-and-form'>
                <DonationProgress 
                total={currentTotal()}
                goal={goal}
                />
            <div className='donation-form'>
                <form onSubmit={handleFormSubmit}>
                    <p>Name</p>
                    <input type='text' placeholder='John Doe' value={name} onChange={setName} />      
                    <p>Message</p>
                    <input type='text' placeholder='...' value={message} onChange={setMessage} />

                <div class="form-group">
                    <label>Amount to Donate</label>
                    <br></br>
                    <input type="range" class="custom-range" id="amountInput" min="5" max="1000" value={amount} step="5" onChange={setAmount}/>
                    <span>$ {amount} </span>
                </div>

                <button> Donate </button>

                </form>
                </div>   
            </div>
                
        </div>
    )
}

export default DonationPageWithHooks;