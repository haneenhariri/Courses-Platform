import { Dropdown, Nav } from 'react-bootstrap'
import './CategorieNav.css'
import { Link } from 'react-router-dom'

export default function CategorieNav() {
  return (
    <section className='HH-categories'>
        <Nav className='HH-nav' expand="lg"  >
            <Link className='HH-link'>All</Link>
            <Link className='HH-link'>Animation</Link>
            <Link className='HH-link'>Design</Link>
            <Link className='HH-link'>Illustration</Link >
            <Link className='HH-link'>Programming</Link >
            <Link className='HH-link'>Photo & Film</Link>
            <Link className='HH-link'>Marketing</Link>
        </Nav>
        <Link className='HH-link'>Sort by <img src="./image/BlogImg/blog icons/Icon Sort by.svg" alt="" /></Link>
       
    </section>
  )
}
