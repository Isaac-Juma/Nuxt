<!-- FormInput.vue -->
<script setup lang="ts">
// Nuxt 4 Native: Instantly handles v-model two-way data streaming automatically
const model = defineModel<string>({ default: '' })

// TypeScript-first layout macros for Nuxt 4 properties
defineProps<{
  type?: string
  placeholder?: string
}>()
</script>

<template>
  <div class="flex flex-col m-2 w-full max-w-xs">
    
    <label class="text-sm font-bold text-gray-700 mb-1 text-left px-1">
      <slot />
    </label>
    
    <!-- Nuxt 4 binds directly to the model reference without input emitters -->
    <input 
      v-model="model" 
      :type="type || 'text'" 
      :placeholder="placeholder"
      class="bg-slate-100 text-black text-center font-bold rounded-xl p-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
    />
  </div>
</template>
