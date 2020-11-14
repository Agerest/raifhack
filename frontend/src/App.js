import { useEffect } from 'react';
import { Switch, Route, useHistory, BrowserRouter, useLocation } from 'react-router-dom';
import './App.css';
import Table from './app/table/table';
import Menu from './app/menu/menu';
import Order from './app/order/order';
import Header from './app/global/header/header';
import pageNames from './app/global/header/pageNames';
import Settings from './app/settings/settings';

function App() {
  let history = useHistory();

  useEffect(() => {
    history.push("/app/menu");
  }, []);

  return (
    <>
      <Header pageName={pageNames.menu} />
      <Route path="/app/table">
        <Table />
      </Route>
      <Route path="/app/menu">
        <Menu />
      </Route>
      <Route path="/app/order">
        <Order />
      </Route>
      <Route path="/app/settings">
        <Settings />
      </Route>
    </>
  );
}

export default App;
