import './CompaniesRegForm.css'
import React from 'react'


function CompaniesRegForm({handleAddCompany}) {

    const [showLoading, setShowLoading] = React.useState(false)
    const [name, setName] = React.useState('')
    const [tin, setTin] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [contactPerson, setContactPerson] = React.useState('')
    const [webSite, setWebSite] = React.useState('')
    const [telegram, setTelegram] = React.useState('')
    const [requiredServiceName, setRequiredServiceName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [dateFrom, setDateFrom] = React.useState()
    const [dateTill, setDateTill] = React.useState()

    function handleSubmit(e) {
        e.preventDefault();
        handleAddCompany({
            name,
            tin,
            email,
            contactPerson,
            webSite, 
            telegram, 
            requiredServiceName,
            description,
            dateFrom,
            dateTill
        });
    } 
    
    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleTinChange(e) {
        setTin(e.target.value)
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handleContactPersonChange(e) {
        setContactPerson(e.target.value)
    }
    function handleWebsiteChange(e) {
        setWebSite(e.target.value)
    }
    function handleTelegramChange(e) {
        setTelegram(e.target.value)
    }
    function handleRequiredServiceNameChange(e) {
        setRequiredServiceName(e.target.value)
    }
    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }
    function handleDateFromChange(e) {
        setDateFrom(e.target.value)
    }
    function handleDateTillChange(e) {
        setDateTill(e.target.value)
    }

    return (
      <main className="companies-reg-form">
        <h2>Fill in information about the company, and then describe what actions you need to perform</h2>
        <form onSubmit={handleSubmit} className="form">
          <span className="form__input-span">Name</span>
          <input
              required
              name="name"
              type="text"
              minLength="1"
              className="form__input" 
              onChange={handleNameChange}
          /> 

          <span className="form__input-span">TIN</span>
          <input
              required
              name="tin"
              type="text"
              minLength="9"
              maxLength="9"
              className="form__input"
              onChange={handleTinChange}
          ></input>

          <span className="form__input-span">Email</span>
          <input
              required
              name="email"
              type="email"
              className="form__input"
              onChange={handleEmailChange}
          ></input>

          <span className="form__input-span">Contact person</span>
          <input
              required
              name="contactName"
              type="text"
              minLength="1"
              className="form__input"
              onChange={handleContactPersonChange}
              
          ></input>

          <span className="form__input-span">Site</span>
          <input
              name="website"
              type="url"
              pattern="https?://.*"
              className="form__input"
              onChange={handleWebsiteChange}
          ></input>

          <span className="form__input-span">Telegram</span>
          <input
              name="telegram"
              type="text"
              className="form__input"
              onChange={handleTelegramChange}
              
          ></input>

          <span className="form__input-span">Name of required service</span>
          <input
              required
              name="requiredServiceName"
              type="text"
              minLength="3"
              className="form__input"
              onChange={handleRequiredServiceNameChange}
          ></input>
          <span className="form__input-span">Description of required service</span>
          <input
              required
              name="description"
              type="text"
              minLength="30"
              className="form__input"
             onChange={handleDescriptionChange}
          ></input>
          <span className="form__input-span">Valid from date</span>
          <input
              required
              name="dateFrom"
              type="date"
              className="form__input"
              onChange={handleDateFromChange}
          ></input>
          <span className="form__input-span">Valid till date</span>
          <input
              required
              name="dateTill"
              type="date"
              className="form__input"
              onChange={handleDateTillChange}
          ></input>

          <button 
            type="submit"
            className="form__btn">
            {showLoading? 'The application is sent...' : 'Send an application'}
          </button>
        </form>
      </main>
    );
}

export default CompaniesRegForm;
