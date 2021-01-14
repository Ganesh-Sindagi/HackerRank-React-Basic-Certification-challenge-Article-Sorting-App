import React, { useState, useEffect } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';
const title = "Sorting Articles";

function App({articles}) {
    const [article, setArticles] = useState(articles);
    const[count, setCount] = useState(0)
    
    useEffect(() => {
        console.log("You clicked Count", count)
    }, [article])

    function mostUpvoted() {
        article.sort((a, b) => (a.upvotes > b.upvotes) ? 1 : -1);
        article.reverse();
        setCount(count+1);
        console.log("New Article", article)
    }

    function mostRecent() {
        article.sort((a, b) => (a.date > b.date) ? 1 : -1);
        article.reverse();
        setCount(count+1);
        console.log("New Article", article)
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={mostUpvoted}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={mostRecent}>Most Recent</button>
            </div>
            {console.log("Articles at render are", article)}
            <Articles articles={article}/>
        </div>
    );

}

export default App;
