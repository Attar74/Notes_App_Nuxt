import useSupabase from "./useSupabase";

const useAuth = () => {
  const user = useState('uesr', () => null)
  const { supabase }: {supabase: any} = useSupabase()
  const router = useRouter();

  supabase.auth.onAuthStateChange((e: any, session: any) => {
    user.value = session?.user || null
  })

  const signUp = async ({email, password, ...metaData}: { email: string, password: string}) => {
    const { user: userData, error} = await supabase.auth.signUp({ 
      email, 
      password 
    }, {
      data: metaData,
      // redirectTo: `${window.location.origin}/profile?source=email`
    })
    if (error) {
      throw error
    }
    return userData
  }

  const signIn = async ({email, password}: { email: string, password: string}) => {
    const { user: userData, error} = await supabase.auth.signInWithPassword({ 
      email, 
      password 
    })
    if (error) {
      throw error
    }
    return userData
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      throw error
    }
    router.push('/');
  }

  const isLoggedIn = () => {
    return !!user.value
  }
  return {
    user,
    signUp,
    signIn,
    signOut,
    isLoggedIn
  }
};

export default useAuth;
