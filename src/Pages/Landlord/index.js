import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import './land.css';

const counties = [
  // Add all 47 counties and their areas
  { name: 'Nairobi', areas: ['Bahati, Nairobi', 'Buruburu', 'Dagoretti', /* ...other areas */ ] },
  { name: 'Mombasa', areas: ['Mvita', 'Nyali', 'Changamwe', 'Jomvu', 'Kisauni', 'Likoni'] },
  { name: 'Kisumu', areas: ['Mamboleo', 'Nyando', 'Bandani', 'Kisumu Central', 'Kondele', 'Lolwe Estate', 'Manyatta', 'Milimani', 'Muhoroni'] },
  { name: 'Nakuru', areas: ['Naivasha', 'Molo', 'Gilgil', 'Njoro', 'Mai Mahiu', 'Subukia', 'Dundori', 'Salgaa', 'Mau Narok', 'Bahati', 'Rongai', 'Olenguruone'] },
  { name: 'Kwale', areas: ['Gombato Bongwe', 'Ukunda', 'Kinondo', 'Ramisi', 'Pongwe', 'Kikoneni', 'Dzombo', 'Vanga', 'Mwereni', 'Tsimba Golini', 'Waa', 'Tiwi', 'Kubo South', 'Mkongani', 'Ndavaya', 'Puma', 'Kinango', 'Chengoni/Samburu', 'Mackinon Road', 'Mwavumbo', 'Kasemeni'] },
  { name: 'Machakos', areas: ['Machakos Town', 'Mavoko', 'Masinga', 'Yatta', 'Kangundo', 'Kathiani', 'Matungulu', 'Mwala'] },
];

function LandlordForm() {
  const navigate = useNavigate();
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [description, setDescription] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [amenities, setAmenities] = useState('');
  const [price, setPrice] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [files, setFiles] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccessMessage('');

    const formData = new FormData();
    formData.append('county', selectedCounty);
    formData.append('area', selectedArea);
    formData.append('description', description);
    formData.append('bedrooms', bedrooms);
    formData.append('amenities', amenities);
    formData.append('price', price);
    formData.append('phoneNumber', phoneNumber);
    files.forEach(file => {
      formData.append('files', file);
    });

    try {
      const response = await axios.post('https://msamo-backend.onrender.com/landlord', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Success:', response.data);
      setSuccessMessage('Property listed successfully and payment initiated.');
      setLoading(false);
      navigate('/pay-now')
      // Handle payment and further actions
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      setSuccessMessage('Error listing property. Please try again.');
    }
  };

  return (
    <form className="landlord-form" onSubmit={handleSubmit}>
      <label>
        County:
        <select value={selectedCounty} onChange={(e) => setSelectedCounty(e.target.value)}>
          <option value="">Select County</option>
          {counties.map((county, index) => (
            <option key={index} value={county.name}>{county.name}</option>
          ))}
        </select>
      </label>
      {selectedCounty && (
        <label>
          Area:
          <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
            <option value="">Select Area</option>
            {counties.find(c => c.name === selectedCounty).areas.map((area, index) => (
              <option key={index} value={area}>{area}</option>
            ))}
          </select>
        </label>
      )}
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Bedrooms:
        <input type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
      </label>
      <label>
        Amenities:
        <input type="text" value={amenities} onChange={(e) => setAmenities(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Phone Number:
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </label>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag & drop photos/videos here, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
}

export default LandlordForm;
