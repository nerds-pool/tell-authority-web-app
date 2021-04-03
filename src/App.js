import './App.css';
import {Switch, Route} from "react-router-dom"
// navBar
 /*top*/  import NavBar from "./components/navigationTop/NavBar"
/*right*/ import RignNavBar from "./components/navigationSide/RightNav"

//Pages - Authority
import HomePage from "./webPages/Authority/HomePage"
import ClosedListPage from "./webPages/Authority/ClosedListPage"
import OpenListPage from "./webPages/Authority/OpenListPage"
import ProgressListPage from "./webPages/Authority/ProgressListPage"

function App() {
  return (
    <div className="App">
      <div className="container">
          {/* nav Bar */}
          <div className="header">
            <NavBar/>
          </div>
          {/* body and it's content */}
          <div className="body">
            <div className="sideNav"> <RignNavBar/> </div>
            <div className="mainContent"> 
                <Switch>
                    <Route path='/' exact>
                        <HomePage/>
                    </Route>
                    
                    <Route path='/closedList'>
                        <ClosedListPage/>
                    </Route>
                    <Route path='/openList'>
                      <OpenListPage/>
                    </Route>
                    <Route path='/progressList'>
                      <ProgressListPage/>
                    </Route>
                </Switch>
            
            </div>
            <div className="filter"> bye</div>
          </div>
          {/* footer */}
          <div className="footer"></div>
      </div>
    </div>
  );
}

export default App;
