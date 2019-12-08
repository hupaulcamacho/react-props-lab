import React from 'react';

const DonationForm = (props) => {
    return (
        <div className='donation-form'>
                <form onSubmit={props.handleFormSubmit}>
                    <p>Name</p>
                    <input type='text' placeholder='John Doe' value={props.name} onChange={props.handleNameChange} />      
                    <p>Message</p>
                    <input type='text' placeholder='...' value={props.message} onChange={props.handleMessageChange} />

                <div class="form-group">
                    <label>Amount to Donate</label>
                    <br></br>
                    <input type="range" class="custom-range" id="amountInput" min="5" max="1000" value={props.amount} step="5" onChange={props.handleAmountChange}/>
                    <span>$ {props.amount} </span>
                </div>

                <button> Donate </button>

                </form>
        </div>
    )
}

export default DonationForm;