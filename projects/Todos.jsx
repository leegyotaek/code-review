import React from 'react';

const Todos = (props) => {

    console.log('---->', props)

    return (
        <div className="App">
            {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>*/}
            <h2>{props.title}</h2>
            <ul>
                {props.items.map((item, index)=> {
                    return <li key={'todo'+index}> <input type ="checkbox"/>{item}</li>;
                })}
            </ul>
        </div>
    );
}

export default Todos
