import React from 'react';
import { Link } from 'react-scroll'

function handleClick(e) {
    e.preventDefault();
    console.log('Le lien a été cliqué.')
}

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        toggleOpen: false
      };

      // Cette liaison est nécéssaire afin de permettre
      // l'utilisation de `this` dans la fonction de rappel.
      this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick() {
      this.setState(state => ({
        toggleOpen: !state.toggleOpen
      }));
    }
  
    render() {

        return (
          <header>
            <div className="container">
              <div className="logo">
                  <img src={this.props.content.logo.url} />
                  <button id="burger" onClick={this.handleClick} className={this.state.toggleOpen ? 'open' : ''}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
              </div>
              <nav className={this.state.toggleOpen ? 'nav open' : 'nav'}>
                  { this.props.content.navigation.map((navlink, index) => {
                  return (
                        <Link key={index} to={navlink.link} spy={true} smooth={true} className="hvr-underline-from-left">{navlink.title}</Link>
                      )
                  }) 
                  }
              </nav>
              <div className="my-account">
                  <button className="btn">{this.props.content.button.title}</button>
              </div>
            </div>
          </header>
      )
    }
}

export default Header
