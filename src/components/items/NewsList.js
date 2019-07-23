import React, {Component} from 'react';
import BriefNews from "./BriefNews";

class NewsList extends Component{
    render(){
        const {news} = this.props;
        const newsElements = news.map(news_ =>
            <tr key={news_.id}>
                <td>
                    <BriefNews news={news_}/>
                </td>
            </tr>
        );
        return (
            <form action={'/'}>
                <table style={{width:'100%'}}>
                    <tbody>
                    {newsElements}
                    </tbody>
                </table>
                <input type={'submit'} value={'delete'}/>
            </form>
        )
    }
}

export default NewsList;