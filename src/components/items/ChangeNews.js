import React, {Component} from 'react';

class ChangeNews extends Component {
    constructor(props) {
        super(props);
        const {news} = this.props;

        if(typeof news === 'undefined' || news === null){
            console.log(news);
            this.state = {
                title: '',
                brief: '',
                content: '',
                changeDate: '',
                uri: '',
                isNew: true
            }
        } else {
            this.state = {
                title: news.title,
                brief: news.brief,
                content: news.content,
                changeDate: new Date(news.changeDate).toLocaleDateString("en-US"),
                uri: news.uri,
                isNew:false
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.name + "-" + event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        // state.isNew?'':'';
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td>Title</td>
                        <td>
                            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td>
                            <input type="text" name="changeDate" value={this.state.changeDate}
                                   onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Brief</td>
                        <td>
                            <input type="text" name="brief" value={this.state.brief} onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Content</td>
                        <td>
                            <input type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Uri</td>
                        <td>
                            <input type="text" name="uri" value={this.state.uri} onChange={this.handleChange}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button>save</button>
                {/*<input formAction={'/'} value={'save'}/>*/}
                {/*<input formAction={'/'} value={'cancel'}/>*/}
            </form>
        )
    }
}

export default ChangeNews;