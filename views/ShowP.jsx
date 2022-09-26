const React = require('react')
const DefaultLayout = require('./layouts/Default')
class ShowP extends React.Component {
    render() {
        const { pistol } = this.props;
        return (
            <DefaultLayout title={"Pistol Profile"}>
                <div>
                    <nav>
                        <a href="/pistols"> Back To Main</a>
                    </nav>
                    <br />

                    <div className="editPage">
                        Manufacturer: {pistol.manufacturer}
                    <br />

                    Model: {pistol.model}
                    <br />

                    Is the Pistol Broken? {pistol.isPistolBroken
                        ? "It Broke"
                        : "Not Broke"}
                    </div>
                    
                </div>
            </DefaultLayout>
        );
    }
}


module.exports = ShowP