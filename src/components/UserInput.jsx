import { useState } from "react"

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedInvestment: 6,
        duration: 10,
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevState) => {
            return {
                ...prevState,
                [inputIdentifier]: newValue
            };
        });
    };

    return <section id='user-input'>
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input 
                type="number" 
                required 
                value={userInput.initialInvestment} 
                onChange={(event) => handleChange('initialInvestment', event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input 
                type="number" 
                required 
                value={userInput.annualInvestment} 
                onChange={(event) => handleChange('annualInvestment', event.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Investment</label>
                <input 
                type="number" 
                required 
                value={userInput.expectedInvestment} 
                onChange={(event) => handleChange('expectedInvestment', event.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input 
                type="number" 
                required 
                value={userInput.duration} 
                onChange={(event) => handleChange('duration', event.target.value)}/>
            </p>
        </div>
    </section>
}