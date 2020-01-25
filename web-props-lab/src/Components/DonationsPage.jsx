import React from 'react';
import DonationsList from './DonationsList'
import DonationProgress from './DonationProgress';
import DonationForm from './DonationForm'

class DonationsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            amount: 5,
            message: '',
            donations: [
                // { name: 'Jaiden', amount: 50, message: 'This project is gonna be so fun'},
                // { name: 'Aransa', amount: 150, message: 'Yasss get it'},
                // { name: 'Briahana', amount: 75, message: 'I believe in you!' },
                // { name: 'Dantae', amount: 200, message: 'I expect big things from you' }
            ],
            goal: 1000,
            progress: 0
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    handleAmountChange = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        let { donations, name, amount, message } = this.state
        console.log(donations)
        let donationInfo = {
            name: name,
            amount: parseInt(amount),
            message: message
        }
        let donationsCopy = [...donations];
        donationsCopy.push(donationInfo);
        
        event.preventDefault()
        if(this.allFieldsValid()) {
            this.setState({
                name:'',
                amount:5,
                message:'',
                donations: donationsCopy
            })
        } else {
            alert('Please make sure you complete all fields and specify a donation amount')
        }
        
    }

    allFieldsValid = () => {
        return (
          this.state.name &&
          this.state.message && this.state.amount > 0
        );
    };


    currentTotal = () => {
        let { donations } = this.state
        let calculateCurrentTotal = 0;
        donations.forEach((donation) => {
            calculateCurrentTotal += parseInt(donation.amount)
        })
        return calculateCurrentTotal
    }
    
    render () {
        let { donations, goal, name, message, amount } = this.state
        return (
            <div className='donations-page'>
                <DonationsList 
                    donations={donations}
                />
                <div className='progress-and-form'>
                    <DonationProgress 
                    total={this.currentTotal()}
                    goal={goal}
                    />
                    <DonationForm 
                    handleFormSubmit={this.handleFormSubmit}
                    handleNameChange={this.handleNameChange}
                    handleMessageChange={this.handleMessageChange}
                    handleAmountChange={this.handleAmountChange}
                    name={name}
                    amount={amount}
                    message={message}
                    />
                </div>
            </div>
        )
    }    
}

export default DonationsPage;