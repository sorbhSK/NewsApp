import React ,{Component} from "react";
import Navbar  from "./components/Navbar";
import LoadingBar from 'react-top-loading-bar'
import News from "./components/News"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
class App extends Component{
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress : 0, 
  }
  setProgress = (progress) => {
    this.setState({progress : progress})
  }
  render(){
    return (
      <div> 
        <Router>  
          <Navbar />
          <LoadingBar color='#f11946' progress={this.state.progress} height={3}/>
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} category="general"/>} ></Route>
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} category="business"/>} ></Route>
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} category="entertainment"/>} ></Route>
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} category="general"/>} ></Route>
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} category="health"/>} ></Route>
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} category="science"/>} ></Route>
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} category="sports"/>} ></Route>
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} category="technology"/>} ></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
export default App;
