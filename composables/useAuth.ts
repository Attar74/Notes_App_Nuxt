import useSupabase from "./useSupabase";

const useAuth = () => {
  const user = useState<any>('uesr', () => null)
  const { supabase }: {supabase: any} = useSupabase()
  const router = useRouter();

  supabase.auth.onAuthStateChange((e: any, session: any) => {
    user.value = session?.user || null
  })

  const signUp = async ({email, password, ...metaData}: { email: string, password: string, metaData: Object }) => {
    const { user: userData, error} = await supabase.auth.signUp({ 
      email,
      password,
      options: {
        data: {
          ...metaData
        },
        // redirectTo: `${window.location.origin}/profile?source=email`
      }
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
    router.push('/auth');
  }

  const isLoggedIn = () => {
    return !!user.value
  }

  const userName = computed(() => {
    return user.value?.user_metadata?.metaData?.name ?? ''
  })
  
  return {
    user,
    signUp,
    signIn,
    signOut,
    isLoggedIn,
    userName
  }
};

export default useAuth;
