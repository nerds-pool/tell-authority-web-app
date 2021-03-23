import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom"
// navBar
import NavBar from "./components/navigationTop/NavBar"

//homePage
import HomePage from "./webPages/HomePage"
//aboutPage
import AboutPage from "./webPages/ClosedListPage"
//users
import UsersPage from "./webPages/OpenListPage"


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
            <div className="sideNav"> hi </div>
            <div className="mainContent"> 
                <Switch>
                    <Route path='/' exact>
                        <HomePage/>
                    </Route>
                    <Route path='/about'>
                        <AboutPage/>
                    </Route>
                    <Route path='/users'>
                      <UsersPage/>
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
