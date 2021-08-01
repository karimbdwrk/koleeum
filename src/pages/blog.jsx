// import React from 'react';
// // import {
// //     BrowserRouter as Router,
// //     Switch,
// //     Route,
// //     Link
// //   } from "react-router-dom";
// import Markdown from 'markdown-to-jsx'
// import Post from '../components/post'
// //   import Markdown from 'markdown-to-jsx'

// class Blog extends React.Component {
//     state = { 
//         title: '',
//         description: '',
//         posts: []
//     }

//     componentDidMount() {

//         fetch("https://koleeum-admin.herokuapp.com/blog")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             this.setState({
//               isLoaded: true,
//               title: result.title,
//               description: result.description
//             });
  
//           },
//           // Remarque : il est important de traiter les erreurs ici
//           // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
//           // des exceptions provenant de réels bugs du composant.
//           (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )

//         fetch("https://koleeum-admin.herokuapp.com/posts")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             this.setState({
//               isLoaded: true,
//               posts: result
//             });
  
//           },
//           // Remarque : il est important de traiter les erreurs ici
//           // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
//           // des exceptions provenant de réels bugs du composant.
//           (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )
//     }

//     render() { 
//         console.log(this.state.posts)
//         return ( 
//             <div className="blog">
//                 <div className="container">
//                     <h1>{this.state.title}</h1>
//                     <div className="description">{this.state.description}</div>
//                     <div className="posts">
//                         {this.state.posts.map((post, index) =>
//                             <div key={index} className="post">
//                                 <img src={post.image.url} />
//                                 <h2>{post.title}</h2>
//                                 <Markdown className="description">{post.description}</Markdown>
//                                 {/* <Link to={{ pathname:`/post/${post.slug}`, state:post }}>Lire l'article</Link> */}
//                                 <Post content={post}/>
//                                 {/* <Switch>
//                                     <Route path="/post" exact component={Post} id={post.id} />
//                                 </Switch> */}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
 
// export default Blog;

import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "../components/posts/posts";
import Query from "../components/query/query";
import POSTS_QUERY from "../queries/posts/posts";
import BLOGPAGE_QUERY from "../queries/pages/blog";

const Blog = () => {

  return (
      <div className="blog fadeIn">
        <div className="container">
          <Query query={BLOGPAGE_QUERY}>
            {({ data: { blog } }) => {
                return (
                  <>
                    <h1 className="title">{blog.title}</h1>
                    <p className="description">{blog.description}</p>
                  </>
                );
            }}
          </Query>
          <Query query={POSTS_QUERY}>
            {({ data: { posts } }) => {
                return <Posts posts={posts} />;
            }}
          </Query>
        </div>
      </div>
  );
};

export default Blog;
