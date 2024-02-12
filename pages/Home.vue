<template>
  <div class="container mx-auto max-w-6xl px-[2rem] xl:px-0">
    <h3 class="my-[3rem] text-center text-5xl">
      Notes App
    </h3>
    <NotesForm @refreshNotes="loadNotes"/>
    <NotesTable :notesRes="notesRes" />
  </div>
</template>

<script lang="ts" setup>
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
    .eq('user_id', user.value.id);
})

if (process.client) {
  await loadNotes()
}
</script>

<style scoped></style>
