<template>
  <div class="border-2 p-[1.5rem] rounded-md">
    <div class="flex flex-col">
      <label
        :class="{
          'text-red-500': !isAValidNote && isSubmited && !noteInput.title.length,
        }"
        class="my-[0.5rem]"
      >
        Title*
      </label>
      <input
        placeholder="Note Title"
        class="ml-[0.25rem] border-2 border-[#00000033] p-[0.25rem] py-[0.5rem] rounded-[0.25rem] outline-none focus:border-blue-300"
        :class="{
          'border-red-500':
            !isAValidNote && isSubmited && !noteInput.title.length,
        }"
        v-model="noteInput.title"
      />
      <label
        :class="{
          'text-red-500': !isAValidNote && isSubmited && !noteInput.note.length,
        }"
        class="mt-[1rem] mb-[0.5rem]"
      >
        Details*
      </label>
      <textarea
        placeholder="Note Details..."
        class="ml-[0.25rem] border-2 border-[#00000033] p-[0.25rem] py-[0.5rem] rounded-[0.25rem] outline-none focus:border-blue-300"
        :class="{
          'border-red-500':
            !isAValidNote && isSubmited && !noteInput.note.length,
        }"
        v-model="noteInput.note"
      />
      <div class="flex justify-center mt-[1rem]">
        <button
          class="bg-blue-400 rounded px-[2rem] py-[0.5rem] text-[#fff] hover:bg-blue-500"
          :class="{
            'bg-[#EBEBE4] hover:bg-[#EBEBE4] text-[#C6C6C6]': !isAValidNote,
          }"
          :disabled="!isAValidNote"
          @click="handleSaveNote"
        >
          Save Note
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const noteInput = reactive({
  title: '',
  note: '',
});

const isValid = ref(false);
const isSubmited = ref(false);
const isAValidNote = computed(() => {
  return !!(noteInput?.title.length && noteInput?.note.length);
});

const { supabase } = useSupabase();

const { user } = useAuth();

watch(noteInput, (val) => {
  if (val?.title.length && val.note.length) {
    isValid.value = true;
  } else {
    isValid.value = false;
  }
});

const emit = defineEmits(['refreshNotes']);

const handleSaveNote = async () => {
  isSubmited.value = true;
  if (!isAValidNote) {
    return;
  }

  await supabase.from('notes').insert({
    title: noteInput.title,
    note: noteInput.note,
    user_id: user.value.id,
    inserted_at: new Date(),
    updated_at: new Date(),
  });

  noteInput.title = '';
  noteInput.note = '';
  isSubmited.value = false;

  emit('refreshNotes');
};
</script>
