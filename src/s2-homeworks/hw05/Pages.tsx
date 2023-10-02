import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import junior from "./pages/Junior";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
              <Route path={'/pre-junior'} element={<PreJunior/>}/>
                <Route path={'/junior'} element={<Junior/>}/>
                <Route path={'/junior-plus'} element={<JuniorPlus/>}/>  {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
