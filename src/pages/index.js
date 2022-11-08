import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
export default function Home() {
  return (

    <Layout>
    <section className={styles.header}>
  
    <div>
       <h2>Desarrollador</h2>
        <h3>Full Stack</h3>
        <p>React | Gatsby | NodeJs | Express </p>
        <Link className={styles.btn} to="/projects">Portafolio</Link>
    </div>
    </section>
    </Layout>
  )
}
