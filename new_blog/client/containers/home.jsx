import React from 'react';
import {bindActionCreators} from 'redux';

class HomeContainer extends React.Component {

}

function mapStateToProps(state, ownProps) {
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        
    })
}
