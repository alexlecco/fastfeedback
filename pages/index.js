import Head from 'next/head'
import { useAuth } from '../lib/auth'

const Home = () => {
  const auth = useAuth();

  return (
    <div className="container">
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <main>
        <h1>Fast Feedback</h1>
        <p>
          Current user: <code>{auth.user ? auth.user.email : null}</code>
        </p>

        {auth.user ? (
          <button onClick={e => auth.signout()}>Sign out</button>
        ) : (
            <button onClick={e => auth.signinWithGithub()}>Sign in</button>
          )}
      </main>
    </div>
  )
}

export default Home;