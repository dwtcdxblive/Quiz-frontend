import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SurveyComponent from './components/SurveyComponent';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
    <div className='container'>
        <div className='row pt-3'>
          <div className='col-md-11'></div>
          <div className='col-md-1 mt-5'>
            <a href='http://dxblive.mooo.com:3002' className='lang-link'>
              العربية
            </a>
          </div>
        </div>
      </div>
      <div className='section section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'></div>
            <div className='col-md-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title clr-title'>
                    LEAP Pavilion Visitor Survey For 2024
                  </h5>
                  <p className='card-subtitle mb-3'>
                    Thank you for visiting our Pavilion!
                  </p>
                  <p className='card-text crd-paragraph mb-1'>
                    We would like to know what you think about your experience.
                  </p>
                  <p className='card-text crd-paragraph'>
                    This survey will help in improving our pavilion and
                    providing better service in the future.
                  </p>
                  <button
                    type='button'
                    className='btn strt-btn'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    Start Survey
                  </button>
                </div>
              </div>
              <div
                className='modal fade'
                id='exampleModal'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5
                        className='modal-title card-subtitle '
                        id='exampleModalLabel'
                      >
                        LEAP Pavilion Survey For 2024
                      </h5>
                    </div>
                    <SurveyComponent />

                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary close-btn'
                        data-bs-dismiss='modal'
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
