<template>
  <div class="primary-nav-container">
    <img
      class="logo"
      src="@/assets/images/logo.png"
      alt="Good Things"
    />
    <nav
      aria-label="Primary"
      class="primary-nav"
    >
      <ul role="list">
        <li
          v-for="route in primaryRoutes"
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
const primaryRoutes = computed(() => store.state.primaryRoutes);
</script>
