import React, { Component } from 'react';
import Hero from '../sections/hero'
import Skills from '../sections/skills'
import Services from '../sections/services'
import Playlist from '../sections/playlist'
import Contact from '../sections/contact'

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };
    }

    componentDidMount() {
        fetch("https://koleeum-admin.herokuapp.com/home")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                hero: result.hero,
                expertises: result.expertise
              });
    
            },
            // Remarque : il est important de traiter les erreurs ici
            // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
            // des exceptions provenant de réels bugs du composant.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }

    render() {

        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
          return (
            <div className="home">
              <Hero content={this.state.hero} />
              <Skills content={this.state.expertises} />
              <Services />
              <Playlist />
              <Contact />
            </div>
          );
        }
        
    }

}

export default Home