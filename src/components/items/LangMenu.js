import React, {Component} from 'react';
import {Link} from "react-router-dom";

class LangMenu extends Component {
    render() {
        const {locales} = this.props;
        const menuItems = locales.map(locale =>
            <Link key={locale} to={'/'}>
                <li>{locale}</li>
            </Link>
        );
        return (
            <ul>
                {menuItems}
            </ul>
        )
    }
}

export default LangMenu;