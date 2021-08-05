import React, { useRef } from 'react'
// import Glide from '@glidejs/glide'
import Glide, { Slide } from 'react-glidejs';
import Markdown from 'markdown-to-jsx'

const Skills = (props) => {
  const gliderRef = useRef(null);
  return (
    // <p>{props.content.title}</p>
      // <Glide
      //   ref={gliderRef}
      //   throttle={0}
      //   type="slider"
      //   customSlideAnimation={{
      //     timeout: 500,
      //     classNames: 'fade',
      //   }}
      //   peek={{
      //     before: 500,
      //     after: 500,
      //   }}
      //   perView={1}
      //   startAt={3}
      //   slideClassName="slider__frame"
      //   focusAt="center"
      // >
      //   {props.content.card.map((card) => 
      //     <div>
      //       <div className="icon">
      //         <img src={card.icon.url} />
      //       </div>
      //       <h3 className="title">{card.title}</h3>
      //       <Markdown className="description">{card.description}</Markdown>
      //     </div>
      //   )}
      // </Glide>
      <div className="expertises">
        <div className="container">
            <h1 className="title">{props.content.title}</h1>
            <Markdown className="description">{props.content.description}</Markdown>
            <div className="cards">
              {props.content.card.map((card) => 
                <div key={card.id} className="card">
                  <div className="icon">
                    <img src={card.icon.url} />
                  </div>
                  <h3 className="title">{card.title}</h3>
                  <Markdown className="description">{card.description}</Markdown>
                </div>
              )}
            </div>
        </div>
      </div>
  );
};

export default Skills
