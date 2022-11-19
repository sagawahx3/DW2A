import React from 'react'
import { ReactComponentElement } from "react"
import { Link } from 'react-router-dom'
import '../styles/header.scss'

const Header=()=>{

    return(
        <section class="header">
        <ul className="header-ul">
        <li><Link to="/progress">Progresso</Link></li>
        <li><Link to="/">Responder</Link></li>
        <li><Link to="/insert">Inserir</Link></li>
        <li><Link to="/user">Usuário</Link></li>
        </ul>
        </section>
    )
}

export default Header
