import React from 'react';
import { tents } from '../data/data';

class Discounts extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div className="discounts">
                <div className="discounts__content row">
                    {tents.map(e => (
                        <div key={e.name} className="discounts__item" style={{background: `url(${e.image}) white center`}}>
                            <div className="discounts__item__info">
                                <h3 className="discounts__item__info__name">{e.name}</h3>
                                <div className="discounts__item__info__bottom">
                                    <span>Persons: {e.persons}</span>
                                    <span>Price: {e.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Discounts