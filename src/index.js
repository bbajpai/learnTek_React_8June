import React, {Component} from 'react';
import ReactDOM from 'react-dom';



//Import Components
import Header1 from './components/header';
import JSON from './db.json';

import NewsList from './components/news_list';

//JSX :: 
// var app =  function(){
//   // logic for function
// }


// const App = () =>{
//   // return <h1>This is first Component</h1>
//   // <Header/>

//   console.log(JSON);
//   return(
//     <div>
//         <Header1/>
//     </div>
//   )
// }


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      news:JSON,
      filtered:JSON
    }
  }

  filterNews(keywords){
    //console.log('inside filter news ',keywords);
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keywords) > -1;
    })

    console.log('Filtered News :: ' , filtered);
    this.setState({filtered:filtered});
  }

    render(){
      return(
        <div>
          <Header1 newsSearch={keywords => this.filterNews(keywords)}/>
          <NewsList newsData={this.state.filtered} />
        </div>
      )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));



