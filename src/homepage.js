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

      <h1 className ="row justify-content-center">TITLE HEADING</h1>

      <div className="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <p>
            Project description: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
        </div>
        <div class="col-sm-3"></div>
      </div><br></br>

      <div className="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4 mx-auto">
          <button type="button" class="btn btn-success btn-block">Get started</button>
        </div>
        <div class="col-sm-4"></div>
      </div><br></br>

      <h1 className ="row justify-content-center">Features</h1><br></br>

      <div className="container" style={{marginTop: "30px"}}>
        <div class = "row">
          <div className="col-sm-4 border border-danger rounded">
            <h3 className ="row justify-content-center">Feature 1</h3>
            <p>xxxxxxxxxxxx</p>
          </div>
          <div className="col-sm-4 border border-danger rounded">
           <h3 className ="row justify-content-center">Feature 2</h3>
           <p>xxxxxxxxxxxx</p>
          </div>
          <div className="col-sm-4 border border-danger rounded">
            <h3 className ="row justify-content-center">Feature 3</h3>
            <p>xxxxxxxxxxxx</p>
          </div>

        </div>
      </div><br></br>
      <h1 className ="row justify-content-center">Benefits</h1>

      <div className="container" style={{marginTop: "30px"}}>
        <div className="row">
          <h3 className ="justify-content-center">Benefit 1</h3>
          <p>xxxxxxxxxxxx</p>
        </div>
        <div className="row">
          <h3 className ="justify-content-center">Benefit 2</h3>
          <p>xxxxxxxxxxxx</p>
        </div>
        <div className="row">
          <h3 className ="justify-content-center">Benefit 3</h3>
          <p>xxxxxxxxxxxx</p>
        </div>
      </div>
      

    </div>
  );
}

export default App;
