const React = require('react')
const DefaultLayout = require('./layouts/Default')
class Rifle extends React.Component {
    render() {
        const { rifles } = this.props
        return (
            <DefaultLayout>
                <div className="wholeContainer">
                    <div className="navBar"><button>
                        <a href={`/rifles/new`}>New Rifle</a>
                    </button>
                        <button>
                            <a href={`/pistols/`}>Pistols Page</a>
                        </button></div>

                    <div className="list">
                        <ul>
                            {rifles.map((rifle, i) => {
                                return (
                                    <>
                                        <li key={i}>
                                            {/* each rifle */}
                                            <a href={`/rifles/${rifle.id}`}>{rifle.manufacturer}</a>
                                            <br />
                                            {/* Edit */}
                                            <>
                                                <a href={`/rifles/${rifle._id}/edit`}>Edit Gun</a>
                                            </>

                                            {/* Delete */}
                                            <form
                                                action={`/rifles/${rifle._id}?_method=DELETE`}
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

module.exports = Rifle