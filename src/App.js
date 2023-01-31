import React, { useEffect } from "react";
import {setAuthToken} from './components/utils/axios'
import { useDispatch, useSelector } from "react-redux";

import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import styles from './styles/app.module.css'

import Login from './components/login/login'

import Layout from './components/layout/index'
import Header from './components/layout/header'
import Main from './pages/main'
import Bundle from './pages/bundle'
import Winners from './pages/winners'
import History from './pages/history'
import Ndfl from './pages/ndfl'
import Statistic from './pages/statistic'
import Validation from "./pages/validation";
import { getAllUsers } from "./redux/actions/users";
import { getAllBundles } from "./redux/actions/data";
import Loader from "./components/utils/Loader";

function App() {
  const dispatch = useDispatch()
  const history = createBrowserHistory();
  const auth = useSelector(state=>state.auth.isAuth)
  // const token = localStorage.token
  // console.log('token: ', token)

  useEffect(() => {
    setAuthToken(localStorage.token)
    if(localStorage.token){
      dispatch(getAllBundles());
    } 
  }, [])



  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/auth" component={Login} />

        <Loader auth={auth} history={history}>
          <div className={styles.appGrid}>
            <div className={styles.layout}>
              <Layout histCurrent={history} />
            </div>
            <div className={styles.header}>
              <Header history={history} />
            </div>
            <div className={styles.main}>
              <Route exact path="/" component={Main} />
              <Route exact path="/bundle/:id" component={Bundle} />
              <Route exact path="/winners" component={Winners} />
              <Route exact path="/history" component={History} />
              <Route exact path="/ndfl" component={Ndfl} />
              <Route exact path="/statistic" component={Statistic} />
              {/* <Route exact path="/validation/:link" component={Validation} /> */}
            </div>
          </div>
        </Loader>
      </Switch>
    </Router>
  );
}

export default App;
