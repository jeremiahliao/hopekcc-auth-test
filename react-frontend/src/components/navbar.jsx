import '../assets/navbar.css'

function NavBar(){
    return (
        <div className="navbar-container">
            <ul className='navbar'>
                <li className="navbar-item">home</li>
                <li className="navbar-item">signin/signup</li>
                <li className="navbar-item">profile</li>
            </ul>
        </div>
    );
}

export default NavBar;