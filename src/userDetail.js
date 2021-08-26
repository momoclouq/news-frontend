import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function App() {
  return (
    <div>
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

      <div class ="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6" style={{borderStyle: "groove"}}><br></br><br></br>
          <div class ="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-3"><p>User Information</p></div>
            <div class="col-sm-1"></div>
            <div class="col-sm-6"><button type="submit" class="btn" style={{backgroundColor: "tomato", width: "150px", height: "35px"}}>Update</button></div>
            <div class="col-sm-1"></div>
          </div><br></br>
          <div class ="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-3"><p>Username</p></div>
            <div class="col-sm-1"></div>
            <div class="col-sm-6"><input type="text" class="form-control "placeholder="Username"></input></div>
            <div class="col-sm-1"></div>
          </div><br></br>
          <div class ="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-3"><p>xxx</p></div>
            <div class="col-sm-1"></div>
            <div class="col-sm-6"><input type="text" class="form-control "placeholder="xxx"></input></div>
            <div class="col-sm-1"></div>
          </div><br></br>
          <div class ="row">
            <div class="col-sm-5"></div>
            <div class="col-sm-7"><button type="submit" class="btn" style={{backgroundColor: "lightgreen", width: "150px", height: "35px"}}>Edit Account</button></div>
          </div><br></br>
        </div>
        <div class="col-sm-3"></div>
      </div>

      
      

    </div>
  );
}

export default App;
