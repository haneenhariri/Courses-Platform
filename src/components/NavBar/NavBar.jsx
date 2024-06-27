import { useEffect, useState } from "react"
import { Nav, Navbar, NavbarBrand, Offcanvas } from "react-bootstrap"
import "./NavBar.css"
import { Link } from "react-router-dom"

export default function NavBar() {
  const [header, setHeader] = useState(false)

  function handleScroll () 
  {
    if (window.scrollY > 50) {
      setHeader(true)
    }
    else {
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [header])

  return (
    <>
      <Navbar className={`BA-navbar ${header? 'BA-navbar-scroll' : 'BA-navbar-normal'}`} expand="lg" fixed="top">

          <NavbarBrand className={`BH-logo ${header ? 'BH-link-light' : 'BH-link-dark'}`}  >
            <Link to={'/'}>
            <img className="BA-img" src={`./image/NavImg/logo${header ? "-2" : ""}.svg`} /> UpDate
            </Link>
          </NavbarBrand>

          <Navbar.Toggle className="border-0" aria-controls="offcanvasNavbar-expand-lg" data-bs-theme={`${header ? 'dark' : 'white'}`} />

          <Navbar.Offcanvas
            className={`${header? 'sidebar-BA-navbar-scroll' : 'sidebar-BA-navbar'}`}
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton data-bs-theme={`${header ? 'dark' : 'white'}`}>

              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">

                <NavbarBrand  className={`BH-logo ${header ? 'BH-link-light' : 'BH-link-dark'}`}>
                  <Link to={'/'}><img className='BA-img' src={`./image/NavImg/logo${header ? "-2" : ""}.svg`} /> UpDate</Link>
                </NavbarBrand>

              </Offcanvas.Title>

            </Offcanvas.Header>

            <Offcanvas.Body>

              <Nav className=" flex-grow-1 pe-3 BA-nav d-flex justify-content-start">
                
                <Link className={`BH-link ${header ? 'BH-link-light' : 'BH-link-dark'}`} to={'/courses'}>
                  Courses <img className='BH-icon-dropdown' src={`./image/NavImg/${header ? 'Icon CoursesWhite' : 'Icon Courses'}.svg`} /> 
                </Link>

                <Link className={`BH-link ${header ? 'BH-link-light' : 'BH-link-dark'}`} to={'/blog'} >
                  Blog
                </Link>

                <Link className={`BH-link ${header ? 'BH-link-light' : 'BH-link-dark'}`} to={'/dash'} >
                  Dashboard
                </Link>

              </Nav>

              <Nav className="BA-nav1">

                <Link className={`BH-link ${header ? 'BH-link-light' : 'BH-link-dark'}`} to={'#'} >
                  En <img className='BH-icon-dropdown'  src={`./image/NavImg/${header ? 'Icon CoursesWhite' : 'Icon Courses'}.svg`} />
                </Link>

                <Link className={`BH-link ${header ? 'BH-link-light' : 'BH-link-dark'}`} to={'#'}>
                  Sign In
                </Link>

                <button className={`BH-nav-btn mt-3 mt-lg-0 ${header ? 'BH-nav-btn-scroll' : 'BH-nav-btn-normal'}`}>Trial free</button>
              </Nav>

            </Offcanvas.Body>

          </Navbar.Offcanvas>
          
      </Navbar>
    </>
  )
}
