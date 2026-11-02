<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher<{ add: string }>();

  let title = '';

  function handleSubmit() {
    if (!title.trim()) return;
    dispatch('add', title.trim());
    title = '';
  }
</script>
//

<form on:submit|preventDefault={handleSubmit} class="flex gap-2 mb-6">
  <input
    type="text"
    bind:value={title}
    placeholder="What needs to be done?"
    class="flex-1 px-3.5 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#9151FF] focus:border-transparent text-sm text-gray-800 shadow-sm"
  />
  <button
    type="submit"
    class="px-4 py-2 bg-[#9151FF] text-white rounded-lg hover:opacity-90 transition font-medium text-sm shadow-sm"
  >
    Add Task
  </button>
</form>