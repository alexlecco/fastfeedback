import Head from 'next/head'
import { useAuth } from '../lib/auth'
import styles from '../styles/Home.module.css'

const Home = () => {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.navbar}>
          <div className={styles.navbarContent}>
            {!auth?.user && (
              <button onClick={e => auth.signinWithGithub()}>Sign in</button>
            )}
            {auth?.user && (
              <>
                <div className={styles.greetings}>{`Welcome ${auth?.user?.email}`}</div>
                <button onClick={e => auth.signout()}>Sign out</button>
              </>
            )}
          </div>
        </div>

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
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

export default Home;