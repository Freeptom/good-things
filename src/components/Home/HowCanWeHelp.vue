<script setup>
import ButtonLink from "@/components/functional/ButtonLink.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const whoOptions = computed(() => store.state.whoOptions);
const wantOptions = computed(() => store.state.wantOptions);

const who = computed({
  get() {
    return store.state.whoSelection;
  },
  set(newValue) {
    store.commit("updateWhoSelection", newValue);
  },
});

const want = computed({
  get() {
    return store.state.wantSelection;
  },
  set(newValue) {
    store.commit("updateWantSelection", newValue);
  },
});
</script>

<template>
  <section class="how-can-we-help section-padding">
    <h2>How we can help you?</h2>
    <p>
      Let us know who you are and what you're looking for, and we'll help you
      get to the right place.
    </p>

    <form class="how-can-we-help__form">
      <div class="how-can-we-help__selection">
        I am
        <select v-model="who" name="who" id="who">
          <option v-for="(option, index) in whoOptions" :key="index">
            {{ option }}
          </option>
        </select>
        and I want
        <select v-model="want" name="want" id="want">
          <option v-for="(option, index) in wantOptions" :key="index">
            {{ option }}
          </option>
        </select>
      </div>
      <button-link rounded on-accent text-light>Start now</button-link>
    </form>
  </section>
</template>
