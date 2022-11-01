<template>
  <router-link
    v-if="url"
    class="button"
    :to="url"
    :class="{
      'button--rounded': rounded,
      'button--outlined-dark': outlinedDark,
      'button--outlined-light': outlinedLight,
      'button--on-accent': onAccent,
      'button--on-light': onLight,
      'button--text-accent': textAccent,
      'button--text-dark': textDark,
      'button--text-light': textLight,
    }"
  >
    <slot>{{ linkName }}</slot>
  </router-link>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    default: "/",
  },
  linkName: {
    type: String,
    default: "link",
  },
  rounded: {
    type: Boolean,
  },
  outlinedDark: {
    type: Boolean,
  },
  outlinedLight: {
    type: Boolean,
  },
  onAccent: {
    type: Boolean,
  },
  onLight: {
    type: Boolean,
  },
  textAccent: {
    type: Boolean,
  },
  textDark: {
    type: Boolean,
  },
  textLight: {
    type: Boolean,
  },
});
</script>
