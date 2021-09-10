
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

  // const onClick = () => {
  //   console.log('click')
  // }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button  color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick = {onAdd}/>
    </header>

  )
}

//When a title is not passed, write this as a default
Header.defaultProps = {
  title: 'Add a custom task'
}

//Sets a condition for the passed title prop
Header.propTypes = {
  title: PropTypes.string.isRequired,
}
 

//CSS in JS
const HeadingStyle = {
  color: 'white',
  backgroundColor: 'cyan'
}

export default Header
