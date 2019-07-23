// import data from '../../data'

import axios from 'axios'

const domain = 'http://localhost:8081/api/news/';

class NewsService {
    static getById(id) {

        return '';
    }

    static getByUri(date, uri) {
        let data;
        // return data.filter(news=>news.uri===uri&&new Date(news.changeDate).toISOString().split('T')[0]===date)[0];
        axios.get(domain + date + '/' + uri).then(res => {
                data = res.data;
            }
        );
        console.log(data);
        return data;
    }

    static getByPage(pageNumber) {
        let data;
        axios.get(domain).then(res => {
                data = res.data;
                console.log(data);
            }
        );
        console.log('asd '+data);
        return data;

    }

    add(news) {

    }

    edit(news) {

    }

    remove(ids) {

    }
}

export default NewsService;