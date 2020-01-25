import React from 'react';

const calculatePercentage = (total, goal) => {
    let percentage = (total / goal) * 100
    return percentage
}

const DonationProgress = (props) => {
    let percentage = calculatePercentage(props.total, props.goal).toString()
    console.log(percentage)
    let progressBarStyle = {
        height: '50px',
        width: '100%',
        'background-color': 'rgb(186, 186, 186)',
    }
    
    let greenBarStyle = {
        height: '50px',
        width: `${percentage}%`,
        'background-color': 'rgb(8, 184, 35)'
    }
    return (
        <div className='donation-progress'>
            <h2> Raised $ {props.total} of $ {props.goal} </h2>
            <div className="progress-bar" style={progressBarStyle}>
                <div className="green-bar" style={greenBarStyle}>
                    <div className='current-progress'>{percentage}%</div>
                </div>
            </div>
            
        </div>
    )
}

export default DonationProgress;