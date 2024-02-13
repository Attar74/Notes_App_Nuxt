import type { NotesForm } from '#build/components';
<template>
  <div class="my-[5rem] relative" v-if="notesRes?.data?.length">
    <h1 class="text-5xl mb-[2rem] text-center">Your Notes</h1>
    <div class="border-2 p-[1.5rem] rounded-md">
      <ul
        v-for="(note, i) in notesRes?.data"
        :key="note.id"
        class="list-none px-[2rem]"
      >
        <li
					class="text-2xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
					:class="{'-translate-x-[60rem]': deletedNote === note.id}"
					@mouseover="setHoveredNoteId(note.id)"
					@mouseleave="setHoveredNoteId()">
          <div class="flex justify-between">
						<h2>
            	{{ note.title }}
          	</h2>
						<div class="flex" >
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
								class="w-6 h-6 mx-2 hover:text-red-500 hover:scale-125 transition-all duration-150 ease-in-out" @click="handleDelete(note.id)">
								<path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
							</svg>
							<svg v-if="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-2 hover:text-green-500">
								<path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
							</svg>

						</div>
					</div>
          <ul class="list-disc">
            <li class="text-[1rem] ml-[2rem]">
              {{ note.note }}
            </li>
          </ul>
        </li>
        <div class="h-[0.1rem] w-full bg-[#e5e7eb] my-[1rem]"></div>
      </ul>
    </div>
		<button class="absolute -right-[10rem] bottom-0 hover:scale-110 transition-all duration-100 ease-linear border-4 border-blue-600 rounded-full p-[0.75rem]" @click="scrollTo(0)">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">

import { scrollTo } from '@/helper/scroll'

const props = defineProps<{
	notesRes: any
}>();

const hoveredNoteId = ref('')

const deletedNote = ref('')

const setHoveredNoteId = ((id: string = '') => {
	hoveredNoteId.value = id
})

const emit = defineEmits(['refreshNotes'])

const { supabase } = useSupabase()

const handleDelete = (async (noteId: string) => {
	deletedNote.value = noteId
	const { error } = await supabase
  .from('notes')
  .delete()
  .eq('id', noteId)
	if(error) {
		throw error
	}
	emit('refreshNotes')
	deletedNote.value = ''
})

</script>
