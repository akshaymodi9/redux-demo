import { FETCH_POSTS, NEW_POSTS } from './types';

export const fetchpost = () => (dispatch) => {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        })
        );
}

export const createpost = (postdata) => (dispatch) => {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postdata)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: NEW_POSTS,
            payload: data
        })
    );
}



