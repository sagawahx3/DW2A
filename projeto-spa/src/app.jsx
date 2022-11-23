import { QuestionRender } from './components/QuestionRender'
import { QuestionForm } from './components/InputQuestion'
import './styles/global.scss'
import Header from './components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  BankInstance  from "./components/Bank"
import { UserManager } from './components/UserManager'

export function App(){

    return (
        <div>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element  = {<QuestionRender />}/>
    <Route path="/answer" element = {<h1>Responder</h1>}/>
    <Route path="/insert" element = {<QuestionForm />}/>
    <Route path="/user" element = {<UserManager />}/>
    </Routes>
    </BrowserRouter>
       </div>
    )

}