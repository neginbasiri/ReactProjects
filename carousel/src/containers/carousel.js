/**
 * Created by nbasiri on 5/05/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextItem} from '../actions';
import {bindActionCreators} from 'redux';

class Carousel extends Component{

    previous(){
        const {id} = this.props.item;
        console.log('prev clicked', id);
    }

    next(){
        const {id} = this.props.item;
        nextItem(id);
    }

    renderItem(){
        const  {item} = this.props;
        return(
            <div className="carousel__item" key={item.id}>
                <img src={item.imageurl}/>
                <div className="carousel__text">
                    <h3>{item.title}</h3>
                    <p>{item.synopsis}</p>
                    <a href={item.link}>{item.link}</a>
                </div>

            </div>
        )

    }
    render(){
        return(
            <div className="carousel">
                {this.renderItem()}
                <div className="carousel__prev" onClick={this.previous.bind(this)}>Previous</div>
                <div className="carousel__next" onClick={this.next.bind(this)}>Next</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {item: state.item}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({nextItem: nextItem}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);