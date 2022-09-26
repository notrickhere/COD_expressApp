const React = require('react')
const DefaultLayout = require('./layouts/Default')
class Pistol extends React.Component {
    render() {
        const { pistols } = this.props
        return (
            <DefaultLayout>
                <div className="wholeContainer">
                    <div className="navBar">
                    
                        <button>
                            <a href={`/pistols/new`}>New Pistol</a>
                        </button>
                        <button>
                            <a href={`/rifles/`}>Rifles Page</a>
                        </button>
                    </div>
                    <div className="list">
                        <ul>
                            {pistols.map((pistol, i) => {
                                return (
                                    <>
                                        <li key={i}>
                                            {/* each pistol */}
                                            <a href={`/pistols/${pistol.id}`}>{pistol.manufacturer}:{pistol.model}</a>
                                            
                                            
                                            <br />
                                            {/* Edit */}
                                            <>
                                                <a href={`/pistols/${pistol._id}/edit`}>Edit Gun</a>
                                            </>

                                            {/* Delete */}
                                            <form
                                                action={`/pistols/${pistol._id}?_method=DELETE`}
                                                method="POST"
                                            >
                                                <input type="submit" value="DELETE" />
                                            </form>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Pistol