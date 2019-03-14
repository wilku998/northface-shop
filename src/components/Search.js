import React from 'react';
import { jackets, shoes, tops, tents } from '../data/data';
const data = [...jackets, ...shoes, ...tops, ...tents];

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchedItems: data
        }
    }

    search(e){
        e.preventDefault();
    }
    render(){
        return (
            <div className="search-container">
                <div className="search row">
                    <form className="search__form" onClick={e => this.search(e)}>
                        <label className="label">
                            Query
                            <input className="input" type="text"/>
                        </label>
                        <label className="label">
                            Sex
                            <select className="input input--select">
                                <option>female</option>
                                <option>male</option>
                            </select>
                        </label>
                        <label className="label">
                            Category
                            <select className="input input--select">
                                <option>jackets</option>
                                <option>pants</option>
                                <option>backbag</option>
                                <option>tents</option>
                            </select>
                        </label>
                        <label className="label">
                            Sort by
                            <select className="input input--select">
                                <option>Price increasing</option>
                                <option>Price decreasing</option>
                            </select>
                        </label>
                        <button className="button-1 search__form__button">Search</button>
                    </form>
                    <div className="search__items">
                        {this.state.searchedItems.map((e, i) => (
                            <div key={i} className="search__item" style={{ background:`url(${e.image}) center/cover` }}>
                            
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;