import React, { Component } from 'react';

function Post(props) {
    console.log(props)
    return <h1>Post - {props.id}</h1>
}

export default Post