import React from 'react';
import Header from './Header';
import CompaniesForm from './CompaniesForm';
import VolunteersForm from './VolunteersForm';
import Footer from './Footer';
import './app.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <CompaniesForm />
            <VolunteersForm />
            <Footer/>
        </div>
    );
}

export default App;
