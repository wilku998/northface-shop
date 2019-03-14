import React from 'react';
import { connect } from 'react-redux';
import { setHeaderHeight } from '../actions/styles';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            headerHeight: 0
        }
    }

    componentDidMount(){
        const headerHeight = this.refs.component.offsetHeight;
        this.props.setHeaderHeight(headerHeight);
        this.setState(()=>({
            headerHeight
        }))
    }
    
    render(){
        return (
            <header ref="component"style={{background: 'url(./images/header.jpg) center/cover fixed'}} className="header-container">
                <div className="header">
                    <div className="header__title-container">
                        <h1 className="header__title">
                            NorthFace.
                        </h1>
                        <ul className="header__title__list">
                            <li>
                                Jacekts
                            </li>
                            <li>
                                Pants
                            </li>
                            <li>
                                Backbags
                            </li>
                            <li>
                                Tents
                            </li>
                        </ul>
                    </div>
                    
                    <div className={`header__bottom ${this.props.scrollPos > this.state.headerHeight*0.5 ? 'header__bottom--hide' : ''}`}>
                            <span className="header__bottom__info">Only this week -20% for all tents</span>
                    </div>
                    
                </div>
            </header>
        )
    }
} 

const mapDispatchToProps = (dispatch) => ({
    setHeaderHeight: (height) => dispatch(setHeaderHeight(height))
})

const mapStateToProps = (state) => ({
    scrollPos: state.scrollPos
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)