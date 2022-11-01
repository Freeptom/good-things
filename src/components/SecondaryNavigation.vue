<template>
  <div class="secondary-nav-container">
    <input
      id="search"
      name="search"
      placeholder="search"
    />
    <nav
      aria-label="Secondary"
      class="secondary-nav"
    >
      <ul role="list">
        <li
          v-for="route in secondaryRoutes"
          :key="route.name"
        >
          <a :href="route.link">{{ route.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const secondaryRoutes = computed(() => store.state.secondaryRoutes);
</script>
