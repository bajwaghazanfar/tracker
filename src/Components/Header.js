import PropTypes from "prop-types"

import Button from "./Button"

const Header = (titleVariable) => {

    const onClick = () => {
        console.log("click");
    }

    return (
        <header className= "header">
            <h1>{titleVariable.title}</h1>
            <Button color="green" text="Add" onClick= {onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: `The Tracker`,
}

Header.propTypes = {
    Title: PropTypes.string.isRequired
}

//CSS styling in JS
/*const heading1Style = {
    color: "red", backgroundColor: "black"
}*/

export default Header
