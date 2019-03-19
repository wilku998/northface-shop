import React from 'react';
import { jackets, shoes, tops, tents } from '../data/data';
let data = [...jackets, ...shoes, ...tops, ...tents];

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchedItems: data,
            formName: '',
            formSex: 'all',
            formCat: 'all',
            sortBy: 'inc'
        }
    }

    onPropertyChange(property, value){
        this.setState(() => ({
            [property]: value
        }))
    }

    getItems(name, sex, cat){
        const formNameArr = name.toLowerCase().trim().split(' ');
        let searchedItems = data.filter(item => {
            let nameMatch;
            const itemNameArr = item.name.toLowerCase().trim().split(' ');

            const mathArr = formNameArr.filter((e) => itemNameArr.includes(e))
            nameMatch = mathArr.length===formNameArr.length

            return (sex === item.sex || sex==='all') && (cat===item.cat || cat==='all') && (nameMatch || name.trim()==='')
        })
        return searchedItems
    }

    sortItems(items, sortBy){
        const sign = sortBy === 'inc' ? 1 : -1
        return items.sort((a, b) => {
            return a.price > b.price ? sign : sign*(-1)
        })
    }

    componentDidMount(){
        console.log(this.props.match.params.type)
        if(this.props.match.params.type){
            this.setState(() => ({
                formCat: this.props.match.params.type
            }))
        }
    }

    render(){
        return (
            <section className="search-container">
                <div className="search row">
                    <form className="search__form">
                        <label className="label">
                            Name
                            <input className="input" type="text" onChange={(e) => this.onPropertyChange('formName', e.target.value)}
                                value={this.state.formName}
                            />
                        </label>
                        <label className="label">
                            Sex
                            <select className="input input--select" onChange={(e) => this.onPropertyChange('formSex', e.target.value)} 
                                value={this.state.formSex}
                            >
                                <option value="all">all</option>
                                <option value="female">female</option>
                                <option value="male">male</option>
                            </select>
                        </label>
                        <label className="label">
                            Category
                            <select className="input input--select" onChange={(e) => this.onPropertyChange('formCat', e.target.value)}
                                value={this.state.formCat}
                            >
                                <option value="all">all</option>
                                <option value="jackets">jackets</option>
                                <option value="shoes">shoes</option>
                                <option value="hoodies">hoodies</option>
                                <option value="tents">tents</option>
                            </select>
                        </label>
                        <label className="label">
                            Sort by
                            <select className="input input--select" onChange={(e) => this.onPropertyChange('sortBy', e.target.value)}
                                value={this.state.sortBy}
                            >
                                <option value="inc">Price increasing</option>
                                <option value="dec">Price decreasing</option>
                            </select>
                        </label>
                        <button className="button-1 search__form__button">Search</button>
                    </form>
                    <div className="search__items">
                        {this.sortItems(this.getItems(this.state.formName, this.state.formSex, this.state.formCat), this.state.sortBy)
                        .map((e, i) => (
                            <div key={i} className="search__item" style={{ background:`url(${e.image}) white center/cover` }}>

                                <div className="search__item-info">
                                    <h3 className="search__item__name">{e.name}</h3>
                                    <span>Price: {e.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default Search;