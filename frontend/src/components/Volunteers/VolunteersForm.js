import './Volunteers.css'
import React from 'react'


function VolunteersForm({addVolunteer}) {

    const [showLoading, setShowLoading] = React.useState(false)
    const [sexSelectedValue, setSexSelectedValue] = React.useState('')
    const [name, setName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [telegram, setTelegram] = React.useState('')
    const [action, setAction] = React.useState('')
   

    const handleSubmit = (e) => {
        e.preventDefault();
        addVolunteer({
          name,
          lastName,
          email, 
          telegram, 
          sexSelectedValue,
          action,
        })
      };

    const handleRadioChange = (event) => {
      setSexSelectedValue(event.target.value); 
    };

    function handleNameChange(e) {
      setName(e.target.value)
    }
    function handleLastNameChange(e) {
      setLastName(e.target.value)
    }
    function handleEmailChange(e) {
      setEmail(e.target.value)
    }
    function handleTelegramChange(e) {
      setTelegram(e.target.value)
    }
    function handleActionChange(e) {
      setAction(e.target.value)
    }
  
    return (
      <main className="volunteers-form">
        <h2>Please fill out the form and the company will contact you</h2>
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

          <span className="form__input-span">Last Name</span>
          <input
              required
              name="LastName"
              type="tel"
              minLength="1"
              className="form__input"
              onChange={handleLastNameChange}
          ></input>

          <span className="form__input-span">Email</span>
          <input
              required
              name="email"
              type="email"
              className="form__input"
              onChange={handleEmailChange}
          ></input>

          <span className="form__input-span">Telegram</span>
          <input
              name="telegram"
              type="text"
              className="form__input"
              onChange={handleTelegramChange}
          ></input>
          <div className="form__sex-container">
          <input type="radio" id="female" name="radios" value="female" onChange={handleRadioChange}/>
          <label for="option1">female</label>
          <input type="radio" id="male" name="radios" value="male" onChange={handleRadioChange}/>
          <label for="option2">male</label>
          <input type="radio" id="other" name="radios" value="other" onChange={handleRadioChange}/>
          <label for="option3">other</label>
          </div>


          <span className="form__input-span">Enter the action number</span>
          <input
              required
              name="action"
              type="text"
              className="form__input"
              onChange={handleActionChange}
          ></input>

          <button 
            type="submit"
            className="form__btn">
            {showLoading? 'The application is sent...' : 'Send'}
          </button>
        </form>
      </main>
    );
}

export default VolunteersForm;