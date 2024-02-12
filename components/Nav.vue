<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between lg:px-8 px-2"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink to="/Home" class="text-lg font-semibold leading-6 text-gray-900 hover:underline">
          <span class="sr-only">Your Company</span>
          <img
            class="h-[8rem] w-auto transform hover:scale-110 transition-all ease-linear duration-200"
            src="https://media-cdn.tripadvisor.com/media/photo-s/1b/85/67/3c/nosso-novo-logotipo.jpg"
            alt=""
          />
        </NuxtLink>
      </div>
      <div class="lg:flex lg:flex-1 lg:justify-end" v-if="isLoggedIn()">
        <button
          @click="handlSignOut"
          class="text-2xl font-semibold leading-6 text-gray-900 hover:underline flex transform hover:scale-110 transition-all ease-linear duration-200"
        >
          <p class="mr-2">
            Sign Out
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end" v-else-if="path != '/'">
        <NuxtLink
          to="/"
          class="text-2xl font-semibold leading-6 text-gray-900 hover:underline cursor-pointer flex transform hover:scale-110 transition-all ease-linear duration-200"
        >
          <p class="mr-2">
            Sign In
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
          </svg>

        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">

const { signOut, isLoggedIn } = useAuth();
const route = useRoute();

const path = computed(() => route.path)

const handlSignOut = async () => {
  await signOut();
};
</script>
