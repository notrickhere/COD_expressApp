const React = require('react')
const DefaultLayout = require('./layouts/Default')
class ShowA extends React.Component {
    render() {
        const { rifle } = this.props;
        return (
            <DefaultLayout title={"Rifle Profile"}>
                <div>
                    <nav>
                        <a href="/rifles"> Back To Main</a>
                    </nav>
                    <br />

                    <div className="editPage">
                        Manufacturer:{rifle.manufacturer}
                        <br />

                        Model:{rifle.model}
                        <br />

                        Is the Pistol Broken? {rifle.isRifleBroken
                            ? "It Broke"
                            : "Not Broke"}
                            
                    </div>

                </div>
            </DefaultLayout>
        );
    }
}


module.exports = ShowA
