import React from 'react'
import Home from './Component/Home'
import Error from './Component/Error'
import {Routes,Route} from 'react-router-dom'


const App = () =>{
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </React.Fragment>
    )
}




export default App