import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ManageProSection.css';
import imgone from './img1.png';
import Axios from 'axios';
import StudentForm from './Regform';

function ManageProSection() {
  const [arr, setArr] = useState([]); // arr = [name, email, rollNo]
  const getState = (childData) => { //childData=[Raj,raj@gmail.com,1]
    setArr(childData);
}

   const handleSubmit = (e) => {
    
    e.preventDefault(); // Prevent the default form submission

    const data = {name:arr[0], email: arr[1], password: arr[2] };

    Axios.post('https://backend1-zial.onrender.com/studentRoute/create-student', data)
      .then((res) => {
        if (res.status === 200) {
          alert('Account created successfully');
          window.location.href = 'https://log-inmanagepro.vercel.app/';
        } else {
          alert('Error occurred');
        }
      })
      .catch((err) => alert(err));

    e.target.reset();
  };

  return (
    <section className="UiSectionstyles__Section-sc-4xxafg-0 cDvxpF manage-pro-section">
      <div className="gradient-background">
        <div className="grid__Container-sc-p40pqe-0 ctsbPE ui-section__container">
          <div className="row">
            <div className="col-md-6">
              <div className="UiTextBlock__TextBlock-sc-18qp69o-0 emERQn">
                <h1>ManagePro - Your Project Management Solution</h1>
                <p>Bring all your projects, tasks, and team members together in one place.</p>
              </div>
              <div className="UiSpacerstyles__Spacer-sc-3m9z76-0 emazsG"></div>
              <div className="container mt-5">
                <div className="card" style={{ backgroundColor: 'transparent', border: 'none' }}>
                  <div className="card-body">
                    <h2 className="card-title text-center">CREATE YOUR ACCOUNT</h2>
                    
                    <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}
                    nameValue=""
                    emailValue=""
                    passwordValue="">
                Create Account
            </StudentForm>
        </form>

                    <div className="text-center mt-3">
                    Already had Account? <a href="https://log-inmanagepro.vercel.app/">Login</a>
                    </div>
                  </div>
                </div>
                <span>
                  <div className="watch">
                    <a data-uuid="2Wmphdxwx9KTtdIcn3RFYb" href="https://youtu.be/cxAjsK0dh5I">
                      <span>Watch video</span>
                      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m5 5h14v14h-14z"></path>
                        <path
                          clip-rule="evenodd"
                          d="m10.0138 16.3878c-.83597.4912-1.5138.105-1.5138-.8645v-7.04491c0-.97008.6755-1.358 1.5138-.86566l6.465 3.79747c.5548.3261.5589.8517 0 1.1801z"
                          fill="currentColor"
                          fill-rule="evenodd"
                        ></path>
                        <circle cx="12" cy="12" r="11.5" stroke="currentColor"></circle>
                      </svg>
                    </a>
                  </div>
                </span>
              </div>
              <br></br>
              <p>Trusted by millions, ManagePro is the visual collaboration tool</p>
            </div>
            <div className="col-md-6">
              <picture className="pict">
                <img className="bodyimg" src={imgone} alt="img" width={'600px'} height={'700px'} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManageProSection;
