import React, { useState } from 'react';
import './FormStyles.css'; // Ensure this path is correct based on your project structure

function VolunteersForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        telegram: '',
        sex: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form data to your API
        console.log(formData);
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Volunteer Application Form</h2>

                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="telegram">Telegram:</label>
                <input type="text" id="telegram" name="telegram" value={formData.telegram} onChange={handleChange} required />

                <label htmlFor="sex">Sex:</label>
                <select id="sex" name="sex" value={formData.sex} onChange={handleChange} required>
                    <option value="">Please Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
}

export default VolunteersForm;










{/* <form action="/your_submission_url/" method="post">
    <h2>Volunteer Application Form</h2>
    
    <label for="first_name">First Name:</label>
    <input type="text" id="first_name" name="first_name" maxlength="200" required>

    <label for="last_name">Last Name:</label>
    <input type="text" id="last_name" name="last_name" maxlength="200" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="telegram">Telegram:</label>
    <input type="text" id="telegram" name="telegram" maxlength="200">

    <label for="sex">Sex:</label>
    <select id="sex" name="sex">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select>
    
    <button type="submit">Submit Application</button>
</form> */}
