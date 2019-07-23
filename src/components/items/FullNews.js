import React, {Component} from 'react';
import {Link} from "react-router-dom";

class FullNews extends Component {

    render(){
        const {news} = this.props;
        return (
            <table>
                <tbody>
                <tr>
                    <td>Title</td>
                    <td>{news.title}</td>
                </tr>
                <tr>
                    <td>Date</td>
                    <td>{(new Date(news.changeDate)).toDateString()}</td>
                </tr>
                <tr>
                    <td>Brief</td>
                    <td>{news.brief}</td>
                </tr>
                <tr>
                    <td>Content</td>
                    <td>{news.content}</td>
                </tr>
                <tr>
                    <td width="80%"/>
                    <td>
                        <Link to={'/manage/news/edit/'+news.id}><button>Edit</button></Link>
                        <button>Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default FullNews;