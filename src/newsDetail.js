import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function App() {
  return (
    <div>

      <h1 className ="row justify-content-center">TITLE HEADING</h1><br></br><br></br>
      <div className="row ">

            <div className="col-md-12 p-3 mb-2 bg-secondary text-white rounded-pill">
              <nav className="navbar navbar-expand-sm p-0 my-1 mx-1">
                  <a className="navbar-brand" style={{color: "Tomato"}}>Name</a>
                  <div className="collapse navbar-collapse">
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item">
                              <a href="/" className="nav-link navbar-color" style={{color: "MediumSeaGreen"}}>
                                  Link
                              </a>
                          </li>
                          <li className="nav-item">
                              <a href="/" className="nav-link navbar-color" style={{color: "MediumSeaGreen"}}>
                                  Link
                              </a>
                          </li>
                          <li className="nav-item">
                              <a href="/" className="nav-link navbar-color" style={{color: "MediumSeaGreen"}}>
                                  Link
                              </a>
                          </li>
                      </ul>
                  </div>
              </nav>
            </div>
            
      </div><br></br><br></br>


      
      <div style={{background: "#aaa",height: "200px"}}>IMG</div>

      <h1 className ="row justify-content-center">Header 1</h1><br></br>

      <div className="container" style={{marginTop: "30px"}}>
        <div class = "row">
          <p>dsfsdfdsfsdfsdfsdfdssdfsdfsdfsdfdsfsdfdsfsdfsdfsdfdssdfsdfsdfsdfdsfsdfdsfsdfsdfsdfdssdfsdfsdfsdfdsfsdfdsfsdfsdfsdfdssdfsdfsdfsdfdsfsdfdsf
              dsfsdfdsfsdfsdfsdfdssdfsdfsdfsdfdsfsdfdsfsdfsdfsdfdssdfsdfsdfsdfdsfsdfdsfsdfsdfsdfdssdfsdfsdfsdffsdfsdfdsfsdfdsfsdfsdfsdfdssdfsdfsdfsdfd
              dsfsdfdsfsdfsdfsdfdssdfsdfsdfsdfdsfsdfdsfsdfsdfsdfdssdfsd
          </p>
        </div>
      </div><br></br>
      
      

    </div>
  );
}

export default App;
