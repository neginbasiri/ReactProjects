/**
 * Created by nbasiri on 5/05/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { prevItem, nextItem, initItem } from '../actions/index';
import { bindActionCreators } from 'redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Carousel extends Component{

    previous(){
        this.props.prevItem();
    }

    next(){
        this.props.nextItem();
    }


    componentDidMount(){
        this.props.initItem();
    }

    renderItem(){
        const  {item} = this.props;
        const webLink = `http://${item.link}`;
        const transitionOptions = {
            transitionName: 'slide',
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 1000
        };


        return(
            <CSSTransitionGroup {...transitionOptions}>
                <div className="carousel__item" key={item.id}>
                    <img className="carousel__image" src={item.imageurl}/>
                    <div className="carousel__text">
                        <h3>{item.title}</h3>
                        <p>{item.synopsis}</p>
                        <a href={webLink} target="_black">{item.link}</a>
                    </div>
                </div>
            </CSSTransitionGroup>
        )

    }
    render(){


        return(

                <div className="carousel">
                    {this.renderItem()}
                    <div className="carousel__prev" onClick={this.previous.bind(this)}>
                        <i className="fa fa-chevron-left"></i>
                    </div>
                    <div className="carousel__next" onClick={this.next.bind(this)}>
                        <i className="fa fa-chevron-right"></i>
                    </div>
                </div>

        )
    }
}

function mapStateToProps(state){
    return {item: state.item};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        initItem: initItem,
        nextItem: nextItem,
        prevItem: prevItem
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);