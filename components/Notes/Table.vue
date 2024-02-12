
import type { NotesForm } from '#build/components';
<template>
  <div class="my-[5rem]" v-if="notesRes?.data.length" >
		<h1 class="text-5xl mb-[2rem] text-center">
			Your Notes
		</h1>
		<div class="border-2 p-[1.5rem] rounded-md">
				<ul v-for="note in notesRes?.data" :key="note.id" class="list-none px-[2rem]">
					<li class="text-2xl">
						<h2>
							{{ note.title }}
						</h2>
						<ul class="list-disc">
							<li class="text-[1rem] ml-[2rem]">
								{{ note.note }}
							</li>
						</ul>
					</li>
					<div class="h-[0.1rem] w-full bg-[#e5e7eb] my-[1rem]"></div>
				</ul>
			</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps(['notesRes'])
</script>
