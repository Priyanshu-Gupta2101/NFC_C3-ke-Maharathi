import React, { useState } from 'react';
import './emiCalculator.css';

function EMICalculator() {
  const [loanType, setLoanType] = useState('home');
  const [tenureType, setTenureType] = useState('year');
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [result, setResult] = useState(null);

  const handleLoanTypeChange = (type) => {
    setLoanType(type);
  };

  const handleTenureTypeChange = (type) => {
    setTenureType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your calculation logic here
    // Calculate EMI, interest, and total based on input values
    // You can use the same logic you had in your JavaScript file.

    // Example calculation:
    const emi = loanAmount * interestRate * loanTenure;
    const interest = emi - loanAmount;
    const total = emi + interest;

    setResult({ emi, interest, total });
  };

  return (
    <div className="container">
      <nav>
        <div className="nav-center">
          <h2>EMI calculator</h2>
        </div>
      </nav>
      <main className="todelete">
        <form className="main" onSubmit={handleSubmit}>
          <a
            className={`hloan ${loanType === 'home' ? 'setNormal' : 'setDefault'}`}
            onClick={() => handleLoanTypeChange('home')}
          >
            home loan
          </a>
          <a
            className={`cloan ${loanType === 'car' ? 'setNormal' : 'setDefault'}`}
            onClick={() => handleLoanTypeChange('car')}
          >
            car loan
          </a>
          <a
            className={`ploan ${loanType === 'personal' ? 'setNormal' : 'setDefault'}`}
            onClick={() => handleLoanTypeChange('personal')}
          >
            personal loan
          </a>
          <div className="form-row">
            <label htmlFor="loanAmount">Enter the {loanType} loan amount</label>
            <input
              type="number"
              id="loanAmount"
              className="amount"
              autoComplete="off"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
            <label htmlFor="interestRate">Interest rate</label>
            <input
              type="number"
              id="interestRate"
              className="interest_val"
              autoComplete="off"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
            <label htmlFor="loanTenure">Loan tenure</label>
            <input
              type="number"
              id="loanTenure"
              className="tenure"
              autoComplete="off"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
            />
            <button className={`year ${tenureType === 'year' ? 'setNormal' : 'setDefault'}`} onClick={() => handleTenureTypeChange('year')}>
              yr
            </button>
            <button className={`month ${tenureType === 'month' ? 'setNormal' : 'setDefault'}`} onClick={() => handleTenureTypeChange('month')}>
              mo
            </button>
            <button type="submit" className="block">
              Calculate
            </button>
          </div>
        </form>
        {result && (
          <div className="result">
            <div className="result-part1">
              <div className="emi">
                <h3>Loan EMI</h3>
                <h3>{result.emi}/-</h3>
              </div>
              <div className="interest">
                <h3>Interest</h3>
                <h3>{result.interest}/-</h3>
              </div>
            </div>
            <div className="total">
              <h3 style={{ marginBottom: 0 }}>Total</h3>
              <h3 style={{ marginTop: 0 }}>(Principle + Payable)</h3>
              <h3>{result.total}/-</h3>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default EMICalculator;
