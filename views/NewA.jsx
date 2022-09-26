const React = require('react')

class NewA extends React.Component {
    render() {
        return (
            <>
                <nav>
                    <a href="/pistols"> Back To Main</a>
                </nav>
                <form action='/rifles' method='POST'>
                    Manufacturer: <input type='text' name='manufacturer' />
                    <br />
                    Model: <input type='textarea' name='model' />
                    <br />
                    Is Rifle Broken: <input type='checkbox' name='isRifleBroken' />
                    <br />
                    <input type='submit' name="" value="Create Rifle" />
                </form>
            </>
        )
    }
}

module.exports = NewA