import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            outsideHeader: false,
            navHeight: 0
        }
    }

    componentWillReceiveProps(props){
        let outsideHeader;
        //let navHeight = this.state.navHeight>0 ? this.state.navHeight :

        if(props.scrollPos >= props.headerHeight-this.state.navHeight && !this.state.outsideHeader){
            outsideHeader=true
        }else if(props.scrollPos <= props.headerHeight-this.state.navHeight && this.state.outsideHeader){
            outsideHeader=false
        }

        if(outsideHeader!==undefined){
            this.setState(()=> ({
                outsideHeader
            }))
        }
    }
    componentDidMount(){
        this.setState(() => ({
            navHeight: this.refs.component.offsetHeight
        }))
    }
    render(){
        return (
            <nav ref='component' className={`nav ${this.state.outsideHeader || this.props.history.location.pathname!=='/' ?
                'nav--outside-header' : ''}`
            }>
                <ul className="nav__list row">
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/search">
                        <li>Search</li>
                    </NavLink>
                    <NavLink to="/search">
                        <li>Basket</li>
                    </NavLink>
                </ul>
            </nav>
        )
    }
} 

const mapStateToProps = (state) => ({
    scrollPos: state.scrollPos,
    headerHeight: state.headerHeight
})
export default connect(mapStateToProps)(Nav);