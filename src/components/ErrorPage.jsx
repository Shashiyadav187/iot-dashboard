import React from 'react'

export default class ErrorPage extends React.Component {
  render() {
    const error = this.props.error; 
    const stackTrace = (typeof error !== 'undefined') ? 
                  <div>
                     <h2>Error code: {error.code}</h2>
                     <h3>Stack Trace:</h3>
                     <p>{error.stack}</p>
                   </div> :
                   ''
                                  
    return (
      <div className="not-found">
        <h1>404</h1>
        <h2>Page Not Found!</h2>
        <p>
          <span>Stack trace</span>
          {stackTrace}
        </p>
      </div>
    )
  }
}
