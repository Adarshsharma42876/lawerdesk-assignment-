import React from 'react'
import logo from './logo.png'
function Navbar() {
  return (
    <div className="container mt-2">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <img src={logo} alt="Advocase" className="logo" /> {/* Use the imported logo */}
        </div>
        <div>
          <button className="btn btn-link"><i className="fas fa-newspaper"></i> News feed</button>
          <button className="btn btn-link"><i className="fas fa-gavel"></i> Find lawyers</button>
          <button className="btn btn-link active"><i className="fas fa-home"></i> Home</button>
          <button className="btn btn-link"><i className="fas fa-user-friends"></i> Connections</button>
          <button className="btn btn-link"><i className="fas fa-comments"></i> Chats</button>
        </div>
        <div>
          <i className="fas fa-cog"></i>
          
          <i className="fas fa-user-circle ml-3"></i>
        </div>
      </header>
    </div>
  )
}

export default Navbar
