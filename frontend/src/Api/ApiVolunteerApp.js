//export const BASE_URL = '/api';
//http://127.0.0.1:8000/actions/
export const BASE_URL = '//localhost:8000/api';


function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const getAllActions = () => {
  return fetch(`${BASE_URL}/actions/`, 
  {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((res) => {
    return checkResponse(res);
  });
}; 
/*
name = models.CharField(blank=False, max_length=250)
    tin = models.CharField(blank=False, max_length=9, unique=True)
    email = models.EmailField(blank=False, unique=True)
    contact_person = models.CharField(blank=False, max_length=200)
    site = models.URLField(blank=True)
    telegram
*/
/*
export const getAllCompanies = () => {
  return fetch(`${BASE_URL}/actions/`, 
  {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((res) => {
    return checkResponse(res);
  });
};*/

export const addCompany = ( {name, tin, email, contact_person, site, telegram} ) => {
  return fetch(`${BASE_URL}/company/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      tin: tin,
      email: email,
      contact_person: contact_person,
      site: site, 
      telegram: telegram 
      })
  }).then((res) => {
    return checkResponse(res);
  });
};

export const addAction = ( {name, description, valid_from, valid_till} ) => {
  return fetch(`${BASE_URL}/actions/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      description: description,
      valid_from: valid_from,
      valid_till: valid_till,
      })
  }).then((res) => {
    return checkResponse(res);
  });
};

export const addConnectionBetweenCompany = ( {action_id, company_id} ) => {
  return fetch(`${BASE_URL}/addactioncompany/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      action_id: action_id,
      company_id: company_id,
      })
  }).then((res) => {
    return checkResponse(res);
  });
};

export const addVolunteer = ( {first_name, last_name, email, telegram, sex} ) => {
  return fetch(`${BASE_URL}/volunteer/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      email: email,
      telegram: telegram,
      sex: sex,
      })
  }).then((res) => {
    return checkResponse(res);
  });
};

export const addConnectionBetweenVolunteers = ( {volunteer_id, action_id} ) => {
  return fetch(`${BASE_URL}/addactionvolunteer/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      action_id: action_id,
      volunteer_id: volunteer_id,
      })
  }).then((res) => {
    return checkResponse(res);
  });
};