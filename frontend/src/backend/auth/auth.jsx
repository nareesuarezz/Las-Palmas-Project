import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth, Button, IconFacebook } from '@supabase/ui'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient("https://gdovlzckdjkuudotrxob.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkb3ZsemNrZGprdXVkb3RyeG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTQ2NTEsImV4cCI6MjAyNTI5MDY1MX0.hgVrFsLYyVwnggB1eJ9oNPcm1wfZPW3ENpwxuZyFFp8");

export const Login = () => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signInWithFacebook = async () => {
    const { error } = await supabase.auth.signIn({ provider: 'facebook' })
    if (error) console.log(error.message)
  }

  if (!session) {
    return (
      <div>
        <Button block size="large" icon={<IconFacebook />} onClick={signInWithFacebook}>
          Continuar con Facebook
        </Button>
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </div>
    )
  }
  else {
    return (<div>Logged in!</div>)
  }
}
