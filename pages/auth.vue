<template>
  <div>
    <div class="mx-auto flex justify-center align-center h-[60vh]">
      <AuthCard class="my-auto" v-if="!isLoggedIn()"/>
      <div v-else class="flex justify-center h-[40vh]">
        <div class="my-auto">
          <div class="text-2xl lg:text-4xl text-center mb-[2rem]">
            <p>Welcome</p>  
            <p class="mt-[1.5rem] text-blue-700">{{ userName }}</p>
          </div>
          <NuxtLink to="/">
            <div class="flex justify-center mt-5">
              <button class="bg-blue-600 rounded px-[2rem] py-[0.5rem] text-[#fff] hover:bg-blue-700 mx-auto w-[15rem] text-xl">
                Start with Notes
              </button>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: 'auth'
})
const { isLoggedIn, user, userName } = useAuth();

</script>