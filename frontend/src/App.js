import { useEffect, useState } from 'react';
import { Switch, Route, useHistory, BrowserRouter, useLocation } from 'react-router-dom';
import './App.css';
import Table from './app/table/table';
import Menu from './app/menu/menu';
import Order from './app/order/order';
import Header from './app/global/header/header';
import pageNames from './app/global/header/pageNames';
import Settings from './app/settings/settings';
import useSettings from './app/settings/useSettings';

function App() {
  let history = useHistory();
  let settings = useSettings();

  let [styles, setStyles] = useState({});

  useEffect(() => {
    let getSettings = async () => {
      let st = await settings.get();

      if (st) setStyles(st);

      history.push("/app/menu");
    }
    getSettings();
  }, []);

  return (
    <>
      <Header styles={styles} />
      <Route path="/app/table">
        <Table styles={styles} />
      </Route>
      <Route path="/app/menu">
        <Menu styles={styles} />
      </Route>
      <Route path="/app/order">
        <Order styles={styles} />
      </Route>
      <Route path="/app/settings">
        <Settings styles={styles} />
      </Route>
    </>
  );
}

export default App;
