import React from 'react';
import Markdown from 'markdown-to-jsx'

class Services extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        services: this.props.content.service
      };
    }

    render() {

      return (
            <div className="services">
              <div className="container">
                {this.state.services.map((service) =>
                    <div key={service.id} className="service">
                      <div>
                        <img src={service.image.url} />
                      </div>
                      <div>
                        <h1 className="title">{service.title}</h1>
                        <Markdown options={{ wrapper: 'p', forceWrapper: true }} className="description">{service.description}</Markdown>
                        <button>En savoir plus</button>
                      </div>
                    </div>
                )}
                
              </div>
            </div>
          )
    }
}

export default Services
