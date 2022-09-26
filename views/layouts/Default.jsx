const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <>
        <html>
          <head>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/css/apps.css" /> 
          </head>
          <body>
            <div className="wholeContainer">
              <h1>{this.props.title}</h1>
            {this.props.children}
            </div>
            
          </body>
        </html>
      </>
    );
  }
}

module.exports = DefaultLayout