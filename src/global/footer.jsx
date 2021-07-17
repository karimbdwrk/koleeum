import React from 'react';
import ContactForm from '../components/contact-form';

class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        footerInfo: this.props.footerInfo,
        footerNav: this.props.footerNav,
        socialNetworks: this.props.socialNetworks
      };
    }

  
    render() {

        console.log(this.state.footerInfo)

        return (
          <footer className="footer">
            <div className="container">
              <div className="logo">
                  <img src={this.state.footerInfo.logo.url} />
              </div>
              {this.state.footerNav.map((column) => 
                <div className="column">
                    <h3 className="title">{column.title}</h3>
                    <ul>
                    {column.link.map((l) => 
                        <li>{l.title}</li>
                    )}
                    </ul>
                </div>
              )}
              <ContactForm />
            </div>
            <div className="container">
              <div className="reseaux-sociaux">
                {this.state.socialNetworks.map((social) => 
                    <a><img src={social.icon.url} /></a>
                )}
              </div>
              <div className="copyright">
                <p>copyright - 2021</p>
              </div>
            </div>
          </footer>
      )
    }
}

export default Footer
