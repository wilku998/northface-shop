import React from 'react'
import { connect } from 'react-redux'
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
            <nav ref='component' className={`nav ${this.state.outsideHeader ? 'nav--outside-header' : ''}`}>
                <ul className="nav__list row">
                    <li>Home</li>
                    <li>Search</li>
                    <li>Basket</li>
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