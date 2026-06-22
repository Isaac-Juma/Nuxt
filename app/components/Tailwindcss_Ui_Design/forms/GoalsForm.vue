<!-- GoalsForm.vue -->
<script setup lang="ts">
// Define the custom submit event channel
const emit = defineEmits(['form-submit'])

const handleSubmit = () => {
  // Pass the submit signal up to the parent form container
  emit('form-submit')
}
</script>

<template>
  <!-- FIXED: Listens to native browser submit here -->
  <form
    @submit.prevent="handleSubmit"
    class="Goals-box flex flex-col bg-blue-300 place-items-center m-2 p-2 rounded-2xl"
  >
    <slot />
  </form>
</template>
