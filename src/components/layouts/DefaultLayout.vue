<template>
  <div class="wrapper">
    <secondary-navigation />
    <primary-navigation />
    <slot />
  </div>
</template>

<script setup>
import PrimaryNavigation from "@/components/PrimaryNavigation.vue";
import SecondaryNavigation from "@/components/SecondaryNavigation.vue";
</script>
