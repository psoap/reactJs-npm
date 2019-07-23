import React from 'react';
import {render} from 'react-dom';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FullNews from "./components/items/FullNews";
import Auth from "./components/items/Auth";
import ChangeNews from "./components/items/ChangeNews";
import NewsList from "./components/items/NewsList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NewsService from "./components/service/NewsService";


render(
    <BrowserRouter>
        <div style={{width: '900px', margin: 'auto'}}>
            <Header/>
            <Switch>
                <Route exact path="/" render={() => <NewsList news={NewsService.getByPage(0)}/>}/>
                {/*<Route path="/:page" component={NewsList}/>*/}
                <Route path="/news/:date/:uri" render={props =>
                    <FullNews news={NewsService.getByUri(props.match.params.date, props.match.params.uri)}/>
                }/>
                <Route path="/manage/news/add" component={ChangeNews}/>
                <Route path="/manage/news/edit/:id" render={props => <ChangeNews news={NewsService.getById(props.match.params.id)}/>}/>
                {/*<Route path="/manage/news/remove" component={}/>*/}

                <Route path="/auth" component={Auth}/>

                {/*<Route path="/reg" component={}/>*/}

            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);

