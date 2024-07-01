import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import './land.css';

const counties = [
    { name: 'Nairobi', areas: [
        'Bahati, Nairobi', 'Buruburu', 'Dagoretti', 'Dandora', 'Doonholm', 
        'Eastleigh, Nairobi', 'Embakasi', 'Embakasi Pipeline', 'Gatwekera', 
        'Gigiri', 'Githurai', 'Highridge', 'Hurlingham, Nairobi', 'Huruma', 
        'Imara Daima', 'Jericho, Nairobi', 'Kaloleni, Nairobi', 'Kambi Muru', 
        'Kamulu', 'Kangemi', 'Karen, Kenya', 'Kariobangi', 'Kasarani', 
        'Kawangware', 'Kayole', 'Kiambiu', 'Kibera', 'Kichinjio', 'Kileleshwa', 
        'Kilimani', 'Kisumu Ndogo', 'Kitisuru', 'Komarock', 'Korogocho', 
        'Kware, Nairobi', 'Kyuna', 'Laini Saba', 'Lang\'ata', 'Lavington, Nairobi', 
        'Lindi, Nairobi', 'Loresho', 'Lucky Summer', 'Madaraka Estate', 
        'Majengo, Nairobi', 'Makadara', 'Makongeni', 'Marurui', 'Mashimoni', 
        'Mathare', 'Mathare Valley', 'Matopeni', 'Mihang\'o', 'Mountain View, Nairobi', 
        'Mugumoini', 'Muirigo', 'Mukuru kwa Njenga', 'Mukuru slums', 'Muthangari', 
        'Mutuini', 'Mwiki', 'Nairobi West', 'Ng\'ando', 'Ngara, Nairobi', 
        'Njiru, Nairobi', 'Nyayo Estate', 'Nyayo Highrise', 'Ofafa', 'Pangani, Nairobi', 
        'Parklands, Nairobi', 'Pumwani', 'Raila', 'Riruta Satellite', 'Roysambu', 
        'Ruai', 'Ruaraka', 'Runda', 'Sarang\'ombe', 'Shauri Moyo', 'Shilanga', 
        'Siranga', 'South B', 'South C', 'Soweto East', 'Soweto West', 
        'Spring Valley, Nairobi', 'Starehe', 'Syokimau', 'Thome, Nairobi', 
        'Umoja, Nairobi', 'Upper Hill, Nairobi', 'Utawala', 'Uthiru', 'Waithaka', 
        'Westlands, Nairobi', 'Woodley, Nairobi', 'Zimmerman, Nairobi', 
        'Ziwani, Nairobi'
      ] 
    },
    { name: 'Mombasa', areas: [
        'Mvita', 'Nyali', 'Changamwe', 'Jomvu', 'Kisauni', 'Likoni'
      ] 
    },
    { name: 'Kisumu', areas: [
        'Mamboleo', 'Nyando', 'Bandani', 'Kisumu Central', 'Kondele', 
        'Lolwe Estate', 'Manyatta', 'Milimani', 'Muhoroni'
      ] 
    },
    { name: 'Eldoret', areas: ['Area 2-1', 'Area 2-2'] },
    { name: 'Nakuru', areas: ['Area 1-1', 'Area 1-2'] },
    { name: 'Kwale', areas: ['Area 2-1', 'Area 2-2'] }, 
    { name: 'Machakos', areas: ['Area 1-1', 'Area 1-2'] },
   
    // Add all 47 counties and their areas
  ];
  
  function LandlordForm() {
    const [selectedCounty, setSelectedCounty] = useState('');
    const [selectedArea, setSelectedArea] = useState('');
    const [description, setDescription] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [amenities, setAmenities] = useState('');
    const [price, setPrice] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [files, setFiles] = useState([]);
  
    const handleDrop = (acceptedFiles) => {
      setFiles(acceptedFiles);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
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
        // Handle payment and further actions
      } catch (error) {
        console.error('Error:', error);
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
        <button type="submit">Submit</button>
      </form>
    );
  }
  
  export default LandlordForm;