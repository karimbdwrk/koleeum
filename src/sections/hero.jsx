import React from 'react'
import Markdown from 'markdown-to-jsx'

class Hero extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        title: this.props.content.title,
        description: this.props.content.description,
        button: this.props.content.button,
        image: this.props.content.image
      };
    }
  
    render() {

      return (
            <div className="hero">
              <div className="container">
                <div className="txt-content">
                  <h1 className="title">{this.state.title}</h1>
                  <Markdown className="description">{this.state.description}</Markdown>
                  <button className="btn">{this.state.button.title}</button>
                </div>
                <div className="image">
                  <img src={this.state.image.url} />
                </div>
              </div>
            </div>
          )
    }
}

export default Hero
