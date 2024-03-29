import Logo from "./Logo"
import React from "react"
import style from "./findcoder.module.css"
import Menu from "./Menu"
import Button from "./Button"

const Findcoder=()=>{
    return(
        <section id={style.nav}>
            <article>
                <div className={style.logo}><Logo></Logo></div>
                <div className={style.menu}><Menu></Menu></div>
                <div className={style.btn}><Button></Button></div>
            </article>
        </section>
       
    )
}
export default Findcoder