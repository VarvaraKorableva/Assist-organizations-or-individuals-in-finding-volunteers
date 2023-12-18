import './Main.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Main() {

  return (
      <main className="main">
        <div className="main_container">
            <Link className="main_part main_part-left" to="/companies">
                <h1 className="main_title">Do You need help?</h1>
                <h2 className="main_subtitle">(For companies)</h2>
            </Link>
            <Link className="main_part" to="/volunteers">
                <h1 className="main_title">Do you want to help?</h1>
                <h2 className="main_subtitle">(For volunteers)</h2>
            </Link>
        </div>
      </main>
  );
}

export default Main;