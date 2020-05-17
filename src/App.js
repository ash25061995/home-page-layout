import React from 'react';
import './App.css';
import Layout from '../src/hoc/Layout/Layout'
import LiveClasses from './components/LiveClasses/LiveClasses';
import LiveVideos from './components/LiveVideos/LiveVideos';

const App=()=>{

  
    return (
      <div className="App">
       <Layout>
         <LiveVideos/>
         <LiveClasses/>
       </Layout>
      </div>
    );

}
 
export default App;
