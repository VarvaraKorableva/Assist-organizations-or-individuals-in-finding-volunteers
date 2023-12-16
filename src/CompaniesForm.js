import React, { useState } from 'react';
import './FormStyles.css'; // Ensure this path is correct based on your project structure

function companies_form() {
    const [formData, setFormData] = useState({
        name: '',
        tin: '',
        email: '',
        contactPerson: '',
        site: '',
        telegram: ''
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
                <h2>Company Application Form</h2>

                <label htmlFor="name">Company Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                <label htmlFor="tin">Tax Identification Number:</label>
                <input type="text" id="tin" name="tin" value={formData.tin} onChange={handleChange} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="contactPerson">Contact Person:</label>
                <input type="text" id="contactPerson" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required />

                <label htmlFor="site">Website:</label>
                <input type="url" id="site" name="site" value={formData.site} onChange={handleChange} required />

                <label htmlFor="telegram">Telegram:</label>
                <input type="text" id="telegram" name="telegram" value={formData.telegram} onChange={handleChange} required />

                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
}

export default companies_form;










{/* <form action="/your_submission_url/" method="post">
    <h2>Company Application Form</h2>
    
    <label for="name">Company Name:</label>
    <input type="text" id="name" name="name" maxlength="250" required>

    <label for="tin">Tax Identification Number:</label>
    <input type="text" id="tin" name="tin" maxlength="9" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="contact_person">Contact Person:</label>
    <input type="text" id="contact_person" name="contact_person" maxlength="200" required>

    <label for="site">Website:</label>
    <input type="url" id="site" name="site">

    <label for="telegram">Telegram:</label>
    <input type="text" id="telegram" name="telegram" maxlength="200">

    <!-- Include CSRF token for Django -->
    {% csrf_token %}
    
    <button type="submit">Submit Application</button>
</form> */}
