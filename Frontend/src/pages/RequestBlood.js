import React, { useState } from 'react';

const RequestBlood = () => {
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    phone: '',
    address: '',
    units: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Blood Request Submitted:', formData);
    alert("Blood request submitted successfully!");
    setFormData({
      name: '',
      bloodGroup: '',
      phone: '',
      address: '',
      units: ''
    });
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Request Blood</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />

        <label>Blood Group:</label>
        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        >
          <option value="">Select</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          maxLength="10"
          title="Phone number must be exactly 10 digits"
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />

        <label>Units Needed:</label>
        <input
          type="number"
          name="units"
          value={formData.units}
          onChange={handleChange}
          required
          min="1"
          style={{ width: '100%', padding: '8px', marginBottom: '20px' }}
        />

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#c62828',
            color: '#fff',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default RequestBlood;
