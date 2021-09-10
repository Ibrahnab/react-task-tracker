import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <footer>
            <p>
                Copyright &copy; 20201
            </p>
            <Link to='/about'>Check the about page</Link>
        </footer>
    )
}

export default Footer