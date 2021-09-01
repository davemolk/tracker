import Button from './Button'

const Header = ({ title, onClick }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button color='blue' text='Add' onClick={onClick}/>
        </header>
    )
}

export default Header
