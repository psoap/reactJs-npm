import React, {Component} from 'react';
import LangMenu from '../items/LangMenu';
import {Link} from "react-router-dom";

class Header extends Component{
    render(){
        return (
            <header>
                <Link to={'/'}><h1>NEWS</h1></Link>
                <Link to={'/auth'}>Auth</Link>
                <Link to={'/manage/news/add'}>Add</Link>
                <LangMenu locales={["Eng","Rus"]}/>
            </header>
        )
    }
}

export default Header;