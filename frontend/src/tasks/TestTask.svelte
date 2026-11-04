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


  }
</script>



  }
</script>
</script>
</script>
</script>
</script>
</script>
</script>
</script>
</script>
</script>
</script>
</script>
</script>
</script>
</script>
</script>
</script>
</script>