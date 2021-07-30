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
            <div key={0} className="container">
              <div className="logo">
                  <img src={this.state.footerInfo.logo.url} />
              </div>
              {this.state.footerNav.map((column, index) => 
                <div key={index} className="column">
                    <h3 className="title">{column.title}</h3>
                    <ul>
                    {column.link.map((l, index) => 
                        <li key={index}>{l.title}</li>
                    )}
                    </ul>
                </div>
              )}
              <ContactForm />
            </div>
            <div key={1} className="container">
              <div className="reseaux-sociaux">
                {this.state.socialNetworks.map((social, index) => 
                    <a key={index}><img alt="alternate-txt" src={social.icon.url} /></a>
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
