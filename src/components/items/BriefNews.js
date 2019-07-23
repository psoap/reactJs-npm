import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BriefNews extends Component {
    render() {
        const {news} = this.props;
        const dateString = new Date(news.changeDate).toISOString().split('T')[0];
        return (
            <div style={{width: '100%', borderTop: '1px solid grey'}}>
                <div>
                    <Link to={'/news/'+dateString+'/'+news.uri}>
                        <span style={{fontWeight: 'bold'}}>{news.title}</span>
                    </Link>
                    <span style={{width: '15%', float: 'right'}}>{(new Date(news.changeDate)).toDateString()}</span>
                </div>
                <div>
                    {news.brief}
                </div>
                <div>
                    <div style={{width: '15%', float: 'right'}}>
                        <Link to={'/news/'+dateString+'/'+news.uri}>view</Link>
                        <Link to={'/manage/news/edit/'+news.id}>edit</Link>
                        <input type={'checkbox'} name={'id'} value={news.id}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BriefNews;