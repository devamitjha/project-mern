import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./DashBoard.scss";
import Avatar from "../../assets/images/avatar.jpg";

const UpdateProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      if (!allowedTypes.includes(file.type)) {
        alert('Only PNG and JPG files are allowed.');
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert('File size must be under 2MB.');
        return;
      }

      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('address', address);
    formData.append('dob', dob);
    formData.append('gender', gender);
    formData.append('bio', bio);
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }

    console.log('Form Data:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setUsername('');
    setPassword('');
    setAddress('');
    setDob(null);
    setGender('');
    setBio('');
    setProfileImage(null);
    setPreviewImage(null);
  };

  return (
    <div className="update-profile-container">
      <form onSubmit={handleSubmit} className="update-profile-form">
        <div className="input-container group">
          <div className="item">
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="item">
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
        </div>

        <div className="input-container group">
          <div className="item">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="item">
            <label>Phone:</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>         
        </div>
        <div className="input-container group">
          <div className="item">
            <label>Current Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="item">
            <label>New Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>
        <div className="input-container">
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>

        <div className="input-container group">
          <div className="item">
            <label>Date of Birth:</label>
            <DatePicker 
              toggleCalendarOnIconClick
              selected={dob} 
              onChange={(date) => setDob(date)} 
              dateFormat="yyyy-MM-dd" 
              placeholderText="Select your date of birth" 
              required 
            />
          </div>
          <div className="item radio-buttons">
            <label>Gender:</label>
            <div className="radio-group">
              <div className="form-group">
                <input type="radio" id="male" name="gender" checked={gender === 'male'} onChange={() => handleGenderChange('male')}/>
                <label htmlFor="male">Male</label>
              </div>
              <div className="form-group">
                <input type="radio" id="female" name="gender" checked={gender === 'female'} onChange={() => handleGenderChange('female')}/>
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
        </div>

        <div className="input-container">
          <label>Bio:</label>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} required />
        </div>

        <div className="input-container">
          <label>Profile Image:</label>
          <div className="file-group" onClick={() => document.getElementById('fileInput').click()}>
            <input id="fileInput" type="file" accept="image/png, image/jpeg" onChange={handleImageChange} style={{ display: 'none' }} />
            {previewImage ? (
              <img src={previewImage} alt="Preview" style={{ maxWidth: '100%', height: '150px', objectFit: 'contain' }} />
            ) : (
              <p>
                <strong>Click to upload</strong>
                <small>PNG, JPG up to 2MB</small>
              </p>
            )}
          </div>
        </div>
        <button type="submit" className="btn filled submit-button">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
