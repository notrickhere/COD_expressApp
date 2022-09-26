const React = require('react')

class NewP extends React.Component {
    render() {
        return (
            <>
                <nav>
                    <a href="/pistols"> Back To Main</a>
                </nav>
                <form action='/pistols' method='POST'>
                    Manufacturer: <input type='text' name='manufacturer' />
                    <br />
                    Model: <input type='textarea' name='model' />
                    <br />
                    Is Pistol Broken: <input type='checkbox' name='isPistolBroken' />
                    <br />
                    <input type='submit' name="" value="Create Pistol" />
                </form>
            </>
        )
    }
}

module.exports = NewP