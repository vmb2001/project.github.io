import React from 'react'

function Nav() {
  return (
    <div>
       <nav className="navbar fixed-top navbar-light bg-light" >
  <div className="container-fluid">
    <a className="navbar-brand"><h3>Employee Data</h3></a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}
export default Nav;