import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState} from "react";
import axios from 'axios'

export default function Home() {

    const [value, setValue]=useState('')

    const submitHandler = async data=>{

        await axios.post('/api/contact', {
            data
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form onSubmit={e=> {
            e.preventDefault()
            submitHandler(value)
        }}>
          <input
              value={value}
              onChange={e=>setValue(e.target.value)}
              type="text"/>
          <button type={'submit'}>Submit</button>
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
