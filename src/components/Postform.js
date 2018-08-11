import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createpost} from '../actions/postAction';

class PostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title :'',
            body : ''
        }
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createpost(post)
    }

    render() {

        return (
            <div>
                <h1> Post Form</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div>
                        <label>Title</label><br />
                        <input type="text" onChange={this.onChange.bind(this)} name="title" value={this.state.title} />
                    </div>
                    <div>
                        <label>Body</label><br />
                        <textarea name="body" onChange={this.onChange.bind(this)} value={this.state.body} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

PostForm.PropTypes={
    createpost:PropTypes.func.isRequired
}


export default connect(null,{createpost})(PostForm);