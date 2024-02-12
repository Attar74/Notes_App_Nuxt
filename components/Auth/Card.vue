<template>
  <div class="container max-w-xl lg:max-w-xl px-[1rem] lg:px-0">
    <div class="border-2 border-[#e7e7e7] p-[1rem] rounded-md">
      <h3 class="text-[1.5rem] capitalize">
        {{ authState }}
      </h3>
      <div class="flex flex-col my-[1rem]">
        <label>Email*</label>
        <input
          placeholder="Enter your Email..."
          type="email"
          class="mb-[0.8rem] p-[0.2rem] outline-none border-2 border-[#0000001a] rounded-md"
					v-model="input.email"
        />
        <label>Password*</label>
        <input
          placeholder="Enter your Password..."
          type="password"
          class="mb-[0.8rem] p-[0.2rem] outline-none border-2 border-[#0000001a] rounded-md"
					v-model="input.password"
        />
      </div>
      <div class="flex justify-end">
        <button
					@click="handleSubmit"
          class="bg-blue-400 rounded px-[2rem] py-[0.5rem] text-[#fff] hover:bg-blue-500"
        >
          Submit
        </button>
      </div>
      <div>
        <p
          class="text-[1rem] text-blue-600 cursor-pointer hover:underline"
          @click="toggleAuthState"
        >
          {{
            authState === 'login'
              ? "Don't have an account..! create one now"
              : 'Do U have an account..! Login'
          }}
        </p>
      </div>
			<p v-if="authError" class="text-red-500 text-center text-2xl mt-[1rem]">
				*{{ authError }}*
			</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const authState = ref<'login' | 'signup'>('login');
const authError = ref('')
const router = useRouter()

const { signUp, signIn, user } = useAuth();

const input = reactive({
	email: '',
	password: ''
})
const toggleAuthState = () => {
  if (authState.value === 'login') {
    authState.value = 'signup';
  } else {
    authState.value = 'login';
  }
	authError.value = ''
};

const handleSubmit = async () => {
	try {
		if(authState.value === 'signup') {
			await signUp(input)
		} else {
			await signIn(input)
		}
		router.push('/Home')
	} catch (err) {
		if(err instanceof Error)
			authError.value = err.message
	}
}
</script>
