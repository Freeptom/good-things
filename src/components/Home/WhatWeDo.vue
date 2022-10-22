<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ButtonLink from "@/components/functional/ButtonLink.vue";
import ProgrammeItem from "@/components/functional/ProgrammeItem.vue";
const store = useStore();
const programmes = computed(() => store.state.programmes);
</script>

<template>
  <section class="what-we-do section-padding">
    <h2>What do we do?</h2>
    <p>
      You might no have heard of us, but we're the people behind the following
      impactful programmes.
    </p>
    <ul role="list" class="programme-list">
      <programme-item v-for="programme in programmes" :key="programme.title">
        <template #title> {{ programme.title }}</template>
        {{ programme.description }}
        <template #cta>
          <button-link
            :url="programme.link"
            outlined-dark
            rounded
            text-accent
            >{{ programme.cta }}</button-link
          >
        </template>
      </programme-item>
    </ul>
    <button-link
      class="what-we-do__additional-cta"
      url="/"
      rounded
      text-accent
      onLight
      >More about what we do</button-link
    >
  </section>
</template>
