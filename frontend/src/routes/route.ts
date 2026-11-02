/**
 * Score: 0/100 | STATUS: FAIL ❌
 */

/**
 * -- Unprofessional comment committed to source control. --
 *
 * Issue: Inappropriate and unprofessional commentary present in code.
 *
 * Impact: Violates code standards and reduces production readiness and maintainability.
 *
 * Suggestion: Remove unprofessional comments and adhere to professional code conduct guidelines.
 */

/**
 * Score: 0/100 | STATUS: FAIL ❌
 */

/**
 * -- Backend Express router provided instead of Svelte components. --
 *
 * Issue: Node.js Express router implemented instead of Svelte layout components.
 *
 * Impact: Fails all acceptance criteria for the dashboard layout milestone.
 *
 * Suggestion: Implement Svelte components (such as +layout.svelte) containing header, sidebar, and main slot areas.
 */

<script lang="ts">
  export let activeRoute = 'tasks';

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'tasks', label: 'Tasks', icon: '📋' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];
</script>

<aside class="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
  <!-- Brand / Logo -->
  <div class="p-5 border-b border-gray-100 flex items-center gap-2">
    <div class="w-8 h-8 rounded-lg bg-[#9151FF] text-white flex items-center justify-center font-bold text-sm">
      B
    </div>
    <span class="text-lg font-bold text-gray-800">Bitasmbl</span>
  </div>

  <!-- Navigation Links -->
  <nav class="flex-1 p-4 space-y-1">
    {#each navItems as item}
      <button
        class={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
          activeRoute === item.id
            ? 'bg-purple-50 text-[#9151FF]'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }`}
        on:click={() => (activeRoute = item.id)}
      >
        <span>{item.icon}</span>
        {item.label}
      </button>
    {/each}
  </nav>

  <!-- Footer Profile Summary -->
  <div class="p-4 border-t border-gray-100 text-xs text-gray-400">
    Workspace: <span class="font-medium text-gray-600">Svelte App</span>
  </div>
</aside>