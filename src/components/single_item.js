import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleItem, clearSingleItem, toggleComplete } from '../actions';

class SingleItem extends Component {
    componentDidMount() {
        console.log('Item ID:', this.props.match.params.itemId);
        this.props.getSingleItem(this.props.match.params.itemId);
    }
    componentWillUnmount() {    
        this.props.clearSingleItem();
    }
    render(){
        console.log('Single Item:', this.props.item);
        const { item, toggleComplete, match: { params } } = this.props;
        return (    
            <div className="center">
                <h1>To Do Item</h1>
                <h3>Title: {item.title}</h3>
                <h4>Details: {item.details}</h4>
                <h4 className={`${item.complete ? 'green-text' : 'red-text'}`}>{item.complete ? 'Item has been completed.' : 'Item NOT completed'}</h4>
                <button onClick={() => toggleComplete(params.itemId)} className={`btn ${item.complete ? 'red' : 'green'}`}>{item.complete ? 'Remove Complete' : 'Complete Item'}</button>
            </div>
        ); 
    }
}

function mapStateToProps(state){
    console.log(state);
    return {
        item: state.list.single,
    };
}

export default connect(mapStateToProps, {
    getSingleItem: getSingleItem,
    clearSingleItem: clearSingleItem,
    toggleComplete: toggleComplete,
})(SingleItem);