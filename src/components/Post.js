import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchpost} from '../actions/postAction';
import PropTypes from 'prop-types'

class Post extends Component {

    componentWillMount(){
        this.props.fetchpost()
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        const postItems = this.props.posts.map(data => (
            <div key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
            </div>
        ))
        return (
            <div>
                <h1> Redux App </h1>
                {postItems}
            </div>
        )
    }
}
const mapStateToProps = state =>({
    posts:state.posts.items,
    newPost:state.posts.item
})

Post.PropTypes={
    fetchpost:PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost:PropTypes.object
}

export default connect(mapStateToProps,{fetchpost})(Post);