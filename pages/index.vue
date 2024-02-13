<template>
  <div class="container mx-auto max-w-6xl px-[2rem] xl:px-0">
    <h3 class="my-[3rem] text-center text-5xl">
      Notes App
    </h3>
    <NotesForm @refreshNotes="loadNotes"/>
    <NotesTable :notesRes="notesRes" @refreshNotes="loadNotes"/>
  </div>
</template>

<script lang="ts" setup>
import { scrollTo } from '@/helper/scroll';

definePageMeta({
  middleware: 'auth'
})

const { supabase } = useSupabase();
const { user } = useAuth();

const notesRes:any = ref(null);

const loadNotes = (async() => {
	notesRes.value = await supabase
    .from('notes')
    .select()
    .eq('user_id', user.value.id).
    order('updated_at', { ascending: false });

    // smoothScroll(`note${notesRes?.value?.data?.length}`)
    scrollTo(350)
})

if (process.client) {
  await loadNotes()
}
</script>

<style scoped></style>
