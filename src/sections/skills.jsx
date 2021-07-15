import React from 'react'
import Markdown from 'markdown-to-jsx'

class Skills extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        title: this.props.content.title,
        description: this.props.content.description,
        button: this.props.content.button,
        cards: this.props.content.card
      };
    }
  
    render() {

      return (
            <div className="expertises">
              <div className="container">
                  <h1 className="title">{this.state.title}</h1>
                  <Markdown className="description">{this.state.description}</Markdown>
                  <div className="cards">
                    {this.state.cards.map((card) => 
                      <div key={card.id} className="card">
                        <div className="icon">
                          <img src={card.icon.url} />
                        </div>
                        <h3>{card.title}</h3>
                        <Markdown className="description">{card.description}</Markdown>
                      </div>
                    )}
                  </div>
              </div>
            </div>
          )
    }
}

export default Skills
