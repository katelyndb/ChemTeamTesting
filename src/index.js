import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Element from './Element'
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <h1 class="small_padding centered_item ">Testing for Chemistry Team Project</h1>
    <div>
    <i class="small_padding centered_item ">Specifically in React</i>
    </div>
    <section>
      <h2 class="small_padding centered_item ">Personal Testing in React</h2>
      < Element />
    </section>

    <section>
      <h2 class="small_padding centered_item ">Todo List Tutorial</h2>
    <App />
    </section>
    
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
