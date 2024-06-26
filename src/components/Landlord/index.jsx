import React, { useState } from 'react';

const counties = [
  "Nairobi", "Mombasa", "Kisumu", "Eldoret", "Nakuru", "Kwale", "Machakos"
  // Add more counties as needed
];

const Landlord = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    receiveAlerts: false,
    location: '',
    description: '',
    amenities: '',
    exactLocation: '',
    photos: null,
    pricePerMonth: '',
    contactNumber: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photos: e.target.files
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Create Account</h2>
          <button onClick={handleNextStep}>Click Create Account</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Account Details</h2>
          <label>
            Full Name or Company Details:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Phone Number:
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </label>
          <label>
            Preferred Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </label>
          <button onClick={handlePreviousStep}>Back</button>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Property Details</h2>
          <label>
            Receive Email and Message Alerts on My Search Preferences:
            <input type="checkbox" name="receiveAlerts" checked={formData.receiveAlerts} onChange={handleChange} />
          </label>
          <label>
            Location of Your Property:
            <select name="location" value={formData.location} onChange={handleChange} required>
              {counties.map((county) => (
                <option key={county} value={county}>{county}</option>
              ))}
            </select>
          </label>
          <label>
            Description and Amenities:
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </label>
          <label>
            Exact Location (How Many Bedrooms and Other Details):
            <input type="text" name="exactLocation" value={formData.exactLocation} onChange={handleChange} required />
          </label>
          <label>
            Upload Photos and Videos:
            <input type="file" multiple onChange={handleFileChange} required />
          </label>
          <label>
            Price Per Month (With or Without Deposits):
            <input type="number" name="pricePerMonth" value={formData.pricePerMonth} onChange={handleChange} required />
          </label>
          <label>
            Enter Phone Number to Be Reached On:
            <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
          </label>
          <button onClick={handlePreviousStep}>Back</button>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 4 && (
        <div>
          <h2>Payment</h2>
          <p>Pay 5,000 Ksh (Mpesa Paybill, Visa Card)</p>
          <label>
            Payment Method:
            <input type="text" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required />
          </label>
          <p>Payment Phone Number: {formData.phoneNumber}</p>
          <button onClick={handlePreviousStep}>Back</button>
          <button onClick={handleNextStep}>Pay</button>
        </div>
      )}
    </div>
  );
};

export default Landlord;
