import Modal from 'react-modal';
import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions/shopping';

const inlineStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      padding: 0,
      border: 'none',
      borderRadius: 'none',
      background: 'none',
      overflow: 'initial'
    },
    overlay: {
        zIndex: 1000,
        background: 'rgba(0,0,0,0.5)'
    }
  };

Modal.setAppElement('#app');


class ItemPopup extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selectedSize: undefined,
            selectedColor: undefined
        }
    }

    setPropertyVal(property, value){
        this.setState(() => ({
            [property]: value
        }))
    }

    addToCart(){
        if(this.state.selectedColor && this.state.selectedSize){
            this.props.addToCart({...this.props.item, size: this.state.selectedSize, color: this.state.selectedColor});
            this.props.closeModal();
        }
    }

    render(){
        return (
            <Modal
                isOpen={this.props.modalIsOpen}
                onRequestClose={this.props.closeModal}
                contentLabel="Item popup"
                style={inlineStyles}
            >
                <div className="item-popup">
                    <i className="icon-cancel item-popup__close" onClick={this.props.closeModal} />
                    
                    <div className="item-popup__item item-popup__item--left">
                        <h2 className="item-popup__title">{this.props.item.name}</h2>
                        <div className="item-popup__img" style={{background: `url(${this.props.item.image}) center/cover`}}>

                        </div>
                    </div>

                    <div className="item-popup__item item-popup__item--right">
                        <h2 className="item-popup__price">Price: {this.props.item.price}</h2>
                        <div className="item-popup__select-container">
                            <span>Select size</span>
                            <div className="item-popup__select">
                                {this.props.item.sizes.map(e => (
                                    <div key={e} key={e} className={`item-popup__size ${this.state.selectedSize===e ? 'item-popup__size--selected' : ''}`}
                                        onClick={() => this.setPropertyVal('selectedSize', e)}
                                    >
                                        {e}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="item-popup__select-container">
                            <span>Select color</span>

                            <div className="item-popup__select">
                                {this.props.item.colors.map(e => (
                                    <div key={e} className={
                                            `item-popup__color item-popup__color--${e} 
                                            ${this.state.selectedColor===e ? 'item-popup__color--selected' : ''}`
                                        }
                                        onClick={() => this.setPropertyVal('selectedColor', e)}
                                    ></div>
                                ))}
                            </div>

                        </div>
                        <button className="button-1 item-popup__button" onClick={() => this.addToCart()}>Add to cart</button>
                    </div>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = (state) =>({
    modalIsOpen: state.shopping.modalIsOpen,
    item: state.shopping.selectedItem
})

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch({type: 'CLOSE_ITEM'}),
    addToCart: (item) => dispatch(addToCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemPopup);