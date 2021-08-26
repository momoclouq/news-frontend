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

      <h2 className ="row justify-content-center">Featured</h2><br></br><br></br>
      <div className="container" style={{marginTop: "30px"}}>
        <div class = "row">
          <div class="col-sm-2"></div>
          <div className="col-sm-3 border border-danger rounded">
            <p>Name:</p>
            <p>Basic Description:</p>
            <p>Author:</p>
            <p>View:</p>
          </div>
          <div class="col-sm-2"></div>
          <div className="col-sm-3 border border-danger rounded">
            <p>Name:</p>
            <p>Basic Description:</p>
            <p>Author:</p>
            <p>View:</p>
          </div>
          <div class="col-sm-2"></div>

        </div><br></br><br></br><br></br>
        <div class = "row">
          <div class="col-sm-2"></div>
          <div className="col-sm-3 border border-danger rounded">
            <p>Name:</p>
            <p>Basic Description:</p>
            <p>Author:</p>
            <p>View:</p>
          </div>
          <div class="col-sm-2"></div>
          <div className="col-sm-3 border border-danger rounded">
            <p>Name:</p>
            <p>Basic Description:</p>
            <p>Author:</p>
            <p>View:</p>
          </div>
          <div class="col-sm-2"></div>

        </div>
      </div><br></br>

      <h2 className ="row justify-content-center">Recent</h2><br></br><br></br>
      <div className="container" style={{marginTop: "30px"}}>
        <div class = "row">
          <div class="col-sm-2"></div>
          <div className="col-sm-3 border border-danger rounded">
            <p>Name:</p>
            <p>Basic Description:</p>
            <p>Author:</p>
            <p>View:</p>
          </div>
          <div class="col-sm-2"></div>
          <div className="col-sm-3 border border-danger rounded">
            <p>Name:</p>
            <p>Basic Description:</p>
            <p>Author:</p>
            <p>View:</p>
          </div>
          <div class="col-sm-2"></div>

        </div><br></br><br></br><br></br>
        <div class = "row">
          <div class="col-sm-2"></div>
          <div className="col-sm-3 border border-danger rounded">
            <p>Name:</p>
            <p>Basic Description:</p>
            <p>Author:</p>
            <p>View:</p>
          </div>
          <div class="col-sm-2"></div>
          <div className="col-sm-3 border border-danger rounded">
            <p>Name:</p>
            <p>Basic Description:</p>
            <p>Author:</p>
            <p>View:</p>
          </div>
          <div class="col-sm-2"></div>

        </div>
      </div><br></br>

      
      

    </div>
  );
}

export default App;
