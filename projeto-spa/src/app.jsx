import { QuestionRender } from './components/QuestionRender'
import { BankFactory } from './components/Bank'
import './styles/global.scss'
import Header from './components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export function App(){

    return (
        <div>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element  = {<QuestionRender />}/>
    <Route path="/answer" element = {<h1>Responder</h1>}/>
    <Route path="/insert" element = {<h1>Inserir</h1>}/>
    <Route path="/user" element = {<h1>Usuário</h1>}/>
    </Routes>
    </BrowserRouter>
       </div>
    )

}