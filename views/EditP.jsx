const React = require("react");
const DefaultLayout = require("./layouts/default");

class EditP extends React.Component {
    render() {
        const {pistol} = this.props
        return (
            <DefaultLayout title="Edit Page">
                <nav>
                    <a href="/pistols"> Back To Main</a>
                </nav>
                <form
                    action={`/pistols/${pistol._id}?_method=PUT`}
                    method="POST" className="wholeContainer editPage"
                >

                    Title:{" "}
                    <input type="text" name="title" defaultValue={pistol.manufacturer} />
                    <br />

                    Entry:{" "}
                    <input type="text" name="entry" defaultValue={pistol.model} />
                    <br />

                    Is Pistol Broken:
                    {pistol.isPistolBroken ? (
                        <input type="checkbox" name="isPistolBroken" defaultChecked />
                    ) : (
                        <input type="checkbox" name="isPistolBroken" />
                    )}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        );
    }
}
module.exports = EditP;