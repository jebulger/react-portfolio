import Nav from './Nav'

const Header = () => {
    return (
        <header className='header'>
            <div className='name-section'>
                <h1>Jack Bulger</h1>
            </div>
            <div className='nav-section'>
                <Nav />
            </div>
        </header>
    );
};

export default Header;