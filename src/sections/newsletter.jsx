import React from 'react';
import Markdown from 'markdown-to-jsx'
import NewsletterForm from '../components/newsletter-form';

class Newsletter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        title: this.props.content.title,
        description: this.props.content.description
      };
    }

    render() {

      return (
            <div className="newsletter">
                <div className="container">
                    <h2 className="title">{this.state.title}</h2>
                    <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="description">{this.state.description}</Markdown>
                    <div className="newsletter-form">
                        <NewsletterForm />
                    </div>
                
                </div>
            </div>
          )
    }
}

export default Newsletter
