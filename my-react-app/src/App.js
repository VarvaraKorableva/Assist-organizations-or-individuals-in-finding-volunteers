import React, { useState } from 'react';
import Header from './Header';
import CompaniesForm from './CompaniesForm';
import VolunteersForm from './VolunteersForm';
import Footer from './Footer';
import './app.css';

function App() {
  const [userType, setUserType] = useState(null);

  // Function to handle the "Go Back" button click and reset userType to null
  const handleGoBack = () => {
    setUserType(null);
  };

  return (
    <div className="App">
      <Header />
      {userType === null ? (
        <div>
          <h1>Welcome to Our Volunteer Platform</h1>
          <p>Connecting volunteers with meaningful opportunities</p>
          <div className="options">
            <div className="option">
              {/* Image for company */}
              <img src={'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D'} alt="Company Icon" />
              <h2>Are you a Company?</h2>
              <p>Partner with us to find dedicated volunteers for your projects.</p>
              <button onClick={() => setUserType('company')}>Company</button>
            </div>
            
            <div className="option">
              {/* Image for volunteers */}
              <img src={'https://www.shutterstock.com/image-photo/two-business-people-man-woman-600nw-2292916287.jpg'} alt="Volunteer Icon" />
              <h2>Or a Volunteer?</h2>
              <p>Discover volunteer opportunities that match your interests and skills.</p>
              <button onClick={() => setUserType('volunteer')}>Volunteer</button>
            </div>
          </div>
          <p>Join our community and make a difference today!</p>
        </div>
      ) : (
        <>
          {userType === 'company' ? <CompaniesForm /> : <VolunteersForm />}
          <button className="goBackButton" onClick={handleGoBack}>Go Back</button>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;




// import React, { useState } from 'react';
// import Header from './Header';
// import CompaniesForm from './CompaniesForm';
// import VolunteersForm from './VolunteersForm';
// import Footer from './Footer';
// import './app.css';

// function App() {
//   const [userType, setUserType] = useState(null);

//   // Function to handle the "Go Back" button click and reset userType to null
//   const handleGoBack = () => {
//     setUserType(null);
//   };

//   return (
//     <div className="App">
//       {userType === null ? (
//         <div>
//           <h1>Welcome to Our Volunteer Platform</h1>
//           <p>Connecting volunteers with meaningful opportunities</p>
//           <div className="options">
//             <div className="option">
//               {/* Assuming you have some image for company */}
//               <img src={'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D'} alt="Company Icon" />
//               <h2>Are you a Company?</h2>
//               <p>Partner with us to find dedicated volunteers for your projects.</p>
//               <button onClick={() => setUserType('company')}>Company</button>
//             </div>
            
//             <div className="option">
//               {/* Assuming you have some image for volunteers */}
//               <img src={'https://www.shutterstock.com/image-photo/two-business-people-man-woman-600nw-2292916287.jpg'} alt="Volunteer Icon" />
//               <h2>Or a Volunteer?</h2>
//               <p>Discover volunteer opportunities that match your interests and skills.</p>
//               <button onClick={() => setUserType('volunteer')}>Volunteer</button>
//             </div>
//           </div>
//           <p>Join our community and make a difference today!</p>
//         </div>
//       ) : (
//         <div>
//           <Header />
//           {userType === 'company' ? <CompaniesForm /> : <VolunteersForm />}
//           <button className="goBackButton" onClick={handleGoBack}>Go Back</button>
//           <Footer />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import Header from './Header';
// import CompaniesForm from './CompaniesForm';
// import VolunteersForm from './VolunteersForm';
// import Footer from './Footer';
// import './app.css';

// function App() {
//   const [userType, setUserType] = useState(null);

//   const handleGoBack = () => {
//     setUserType(null);
//   };

//   return (
//     <div className="App">
//       {userType === null ? (
//         <div className="welcomeSection">
//           <h1>Welcome to Our Volunteer Platform</h1>
//           <p>Connecting volunteers with meaningful opportunities</p>
//           <div className="options">
//             {/* Option components here */}
//           </div>
//           <p>Join our community and make a difference today!</p>
//         </div>
//       ) : (
//         <div>
//           <Header userType={userType} />
//           {userType === 'company' ? <CompaniesForm /> : <VolunteersForm />}
//           <button className="goBackButton" onClick={handleGoBack}>Go Back</button>
//           <Footer />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;





// import React, { useState } from 'react';
// import Header from './Header';
// import CompaniesForm from './CompaniesForm';
// import VolunteersForm from './VolunteersForm';
// import Footer from './Footer';
// import './app.css';

// function App() {
//   const [userType, setUserType] = useState(null);

//   // Function to handle the "Go Back" button click and reset userType to null
//   const handleGoBack = () => {
//     setUserType(null);
//   };

//   return (
//     <div className="App">
//       {userType === null ? (
//         <div>
//           <h1>Welcome to Our Volunteer Platform</h1>
//           <p>Connecting volunteers with meaningful opportunities</p>
          
//           <div className="options">
//             <div className="option">
//               <img src={'https://www.shutterstock.com/image-photo/two-business-people-man-woman-600nw-2292916287.jpg'} alt="Company Icon" />
//               <h2>Are you a Company?</h2>
//               <p>Partner with us to find dedicated volunteers for your projects.</p>
//               <button onClick={() => setUserType('company')}>Company</button>
//             </div>
            
//             <div className="option">
//               <img src={'https://www.shutterstock.com/image-photo/two-business-people-man-woman-600nw-2292916287.jpg'} alt="Volunteer Icon" />
//               <h2>Or a Volunteer?</h2>
//               <p>Discover volunteer opportunities that match your interests and skills.</p>
//               <button onClick={() => setUserType('volunteer')}>Volunteer</button>
//             </div>
//           </div>
          
//           <p>Join our community and make a difference today!</p>
//         </div>
//       ) : (
//         <div>
//           <Header />
//           {userType === 'company' ? <CompaniesForm /> : <VolunteersForm />}
//           {/* "Go Back" button to return to the initial landing page */}
//           <button className="goBackButton" onClick={handleGoBack}>Go Back</button>
//           <Footer />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


