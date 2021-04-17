import "./App.css";
import { Switch, Route } from "react-router-dom";
// navBar
/*top*/ import NavBar from "./components/navigationTop/NavBar";
/*right*/ import SideNavBar from "./components/navigationSide/SideNav";
/*filter*/ import CategoryFilter from "./components/navigationSide/CategoryFilter";
/*footer*/ import Footer from "./components/Footer/Footer";

//Report bar
import ReportBar from "./components/ReportBar/ReportBar"

//Pages - Authority
import HomePage from "./webPages/Authority/HomePage";
import ClosedListPage from "./webPages/Authority/ClosedListPage";
import OpenListPage from "./webPages/Authority/OpenListPage";
import ProgressListPage from "./webPages/Authority/ProgressListPage";
import RejectedListPage from "./webPages/Authority/RejectedListPage";
import HelpPage from "./webPages/Authority/HelpPage";
import LoginPage from "./webPages/Authority/LoginPage";
import ProfilePage from "./webPages/Authority/ProfilePage";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* nav Bar */}
        <div className="header">
          <NavBar />
        </div>

        {/* body and it's content */}
        <div className="body">
          {/* sidenavbar */}
          <div className="sideNav"><SideNavBar /></div>
          {/* body and footer */}
          <div className="comnfot" >
            {/* load web page content */}
            <div className="mainContent">
              <ReportBar/>
              <Switch>
                <Route path="/" exact>
                  <HomePage />
                </Route>
                <Route path="/closedList">
                  <ClosedListPage />
                </Route>
                <Route path="/openList">
                  <OpenListPage />
                </Route>
                <Route path="/progressList">
                  <ProgressListPage />
                </Route>
                <Route path="/rejectedList">
                  <RejectedListPage />
                </Route>
                <Route path="/help">
                  <HelpPage />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/profile">
                  <ProfilePage />
                </Route>
              </Switch>
            </div>
            {/* footer */}
            <div className="footer">
              <Footer/>
            </div>

          </div>
          {/* filter */}
          <div className="filter">
            <CategoryFilter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
