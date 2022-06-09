import React from 'react';
import CurrentData from './CurrentData';
import HistoricalData from './HistoricalData';
import {Switch,Route} from 'react-router-dom';
export default function App(){
  return(
    <>
    <Switch>
      <Route exact path="/" component={CurrentData}/>
      <Route exact path="/historical" component={HistoricalData}/>
    </Switch>
    </>
  )
}