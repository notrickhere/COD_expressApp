const React = require("react");
const DefaultLayout = require("./layouts/default");

class EditA extends React.Component {
    render() {
        const {rifle} = this.props
        return (
            <DefaultLayout title="Edit Page">
                <nav>
                    <a href="/rifles"> Back To Main</a>
                </nav>
                <form
                    action={`/rifles/${rifle._id}?_method=PUT`}
                    method="POST" className="wholeContainer editPage"
                >
                    Title:{" "}
                    <input type="text" name="title" defaultValue={rifle.manufacturer} />
                    <br />

                    Entry:{" "}
                    <input type="text" name="entry" defaultValue={rifle.model} />
                    <br />

                    Is Rifle Broken:
                    {rifle.isRifleBroken ? (
                        <input type="checkbox" name="isRifleBroken" defaultChecked />
                    ) : (
                        <input type="checkbox" name="isRifleBroken" />
                    )}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        );
    }
}
module.exports = EditA;