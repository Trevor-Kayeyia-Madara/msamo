import React, { useState } from 'react';

const Home = () => {
  const [formState, setFormState] = useState({
    userType: '',
    actionType: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    receiveAlerts: false,
    propertyLocation: '',
    propertyDetails: '',
    propertyPhotos: [],
    contactPhoneNumber: '',
    paymentMethod: '',
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setFormState(prevState => ({
      ...prevState,
      propertyPhotos: files
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission logic, like sending data to API or processing it further
    console.log(formState);
    // Reset form state or redirect after submission if needed
  };

  return (
    <div>
      <h2>Are You A:</h2>
      <div>
        <button onClick={() => setFormState(prevState => ({ ...prevState, userType: 'Landlord' }))}>Landlord</button>
        <button onClick={() => setFormState(prevState => ({ ...prevState, userType: 'Tenant' }))}>Tenant</button>
        <button onClick={() => setFormState(prevState => ({ ...prevState, userType: 'Sell Land' }))}>Sell Land</button>
        <button onClick={() => setFormState(prevState => ({ ...prevState, userType: 'Sell Home' }))}>Sell Home</button>
      </div>
      <button>RENEW SUBSCRIPTION</button>
      {formState.userType && (
        <div>
          <h2>{formState.userType} Registration</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Full Name or Company Name:
              <input type="text" name="fullName" value={formState.fullName} onChange={handleInputChange} required />
            </label><br />
            <label>
              Email:
              <input type="email" name="email" value={formState.email} onChange={handleInputChange} required />
            </label><br />
            <label>
              Phone Number:
              <input type="tel" name="phoneNumber" value={formState.phoneNumber} onChange={handleInputChange} required />
            </label><br />
            <label>
              Preferred Password:
              <input type="password" name="password" value={formState.password} onChange={handleInputChange} required />
            </label><br />
            <label>
              Receive Alerts on Search Preferences:
              <input type="checkbox" name="receiveAlerts" checked={formState.receiveAlerts} onChange={handleInputChange} />
            </label><br />
            <label>
              Location of Properties:
              <select name="propertyLocation" value={formState.propertyLocation} onChange={handleInputChange} required>
                <option value="">Select Location</option>
                {/* Add your location options here */}
              </select>
            </label><br />
            <label>
              Property Details:
              <textarea name="propertyDetails" value={formState.propertyDetails} onChange={handleInputChange} required />
            </label><br />
            <label>
              Upload Photos and Videos:
              <input type="file" multiple onChange={handleFileUpload} accept="image/*, video/*" />
            </label><br />
            <label>
              Contact Phone Number to be Reached:
              <input type="tel" name="contactPhoneNumber" value={formState.contactPhoneNumber} onChange={handleInputChange} required />
            </label><br />
            <label>
              Payment Method:
              <input type="text" name="paymentMethod" value={formState.paymentMethod} onChange={handleInputChange} />
            </label><br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
