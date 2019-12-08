import React from 'react';
import Donation from './Donation'

const DonationsList = (props) => {
    let donations = props.donations;
     
    const donationList = donations.map((donation) => {
        return (
            <Donation
            name={donation.name}
            amount={donation.amount}
            message={donation.message}
            />
        )
    })
    
    return (
        <div className='recent-donations'>
            <h2> Recent Donations </h2>
            <ul>
                {donationList}
            </ul>
        </div>  

        
    )
    
}

export default DonationsList;
