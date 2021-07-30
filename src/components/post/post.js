// import React, {useState, useEffect} from 'react';
// import Markdown from "markdown-to-jsx";
// import Moment from "react-moment";

// const Post = (props) => {

//     let [post, setPost] = useState([])

//     useEffect(() => {
//       fetch("https://koleeum-admin.herokuapp.com/posts/" + props.match.params.id)
//       .then(response => response.json())
//           // 4. Setting *dogImage* to the image url that we received from the response above
//       .then(data => setPost(data))
//     },[])

//     return (
//         <div className="post">
//           <div className="container">
//             <h1>post title - {props.location.state.id}</h1>
//             <Markdown className="content">{props.location.state.content}</Markdown>
//             {/* <p>{post.content}</p> */}
//             {props.match.params.id}
//           </div>
//         </div>
//     )
// }

// export default Post

import React from "react";
import { useParams } from "react-router";
import Query from "../query/query";
import Markdown from "markdown-to-jsx";
import Moment from "react-moment";

import POST_QUERY from "../../queries/posts/post";

const Post = () => {
  let { id } = useParams();

  return (
    <Query query={POST_QUERY} slug={id}>
      {({ data: { posts } }) => {

        console.log(posts)

        if (posts.length) {
          const imageUrl =
            process.env.NODE_ENV !== "development"
              ? posts[0].image.url
              : process.env.REACT_APP_BACKEND_URL + posts[0].image.url;

          return (
            <div>
              <div
                id="banner"
                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                data-src={imageUrl}
                data-srcset={imageUrl}
                data-uk-img
              >
                <h1>{posts[0].title}</h1>
              </div>

              <div className="uk-section">
                <div className="uk-container uk-container-small">
                  <Markdown>{posts[0].content}</Markdown>
                  {/* <div>{posts[0].content}</div> */}
                  <p>
                    <Moment format="MMM Do YYYY">{posts[0].published_at}</Moment>
                  </p>
                </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Post;