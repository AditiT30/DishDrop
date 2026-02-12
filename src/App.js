import React from 'react';
import Header from './components/Header'; //even if we write './components/Header.js' it still works
import Body from './components/Body';

/* const styleCard = {
    backgroundColor: "#f0f0f0",
 } */
//

//hard coded data , URL OR LINKS NEVER kept in component file , KEPT in separate file

const App = () => {
    return (
        <div className="App">
            {/*Header*/}
            <Header/>
            <Body/>
        </div>
    )
}
export default App;