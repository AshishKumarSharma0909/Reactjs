import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navbar">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">

          <Link className="navbar-brand" to="#"><i className="bi bi-tux"></i>
            
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {/* <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                  
                </Link>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>

              </li>
                <li className="nav-item">
                <Link className="nav-link" to="/counterapp">
                    Counterapp
                </Link>

              </li>

                <li className="nav-item">
                <Link className="nav-link" to="/cards">
                    Cards
                </Link>

              </li>

                <li className="nav-item">
                <Link className="nav-link" to="/backgroudchange">
                    Backgroudchange
                </Link>

              </li>
                 <li className="nav-item">
                <Link className="nav-link" to="/post">
                    Post
                </Link>

              </li>

               <li className="nav-item">
                <Link className="nav-link" to="/formdata">
                    Formdata
                </Link>

              </li>
              
               <li className="nav-item">
                <Link className="nav-link" to="/childprop">
                    Childprop
                </Link>

              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/propchild1">
                    Propchild1
                </Link>

              </li>
                <li className="nav-item">
                <Link className="nav-link" to="/todoapp">
                  Todoapp
                </Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/weather">
                  Weather
                </Link>

              </li>

               <li className="nav-item">
                <Link className="nav-link" to="/weatheapp">
                  Weatheapp
                </Link>

              </li>

              

            </ul>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar