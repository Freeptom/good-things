<script setup>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import TheHero from "@/components/Home/TheHero.vue";
import WhoWeAre from "@/components/Home/WhoWeAre.vue";
import HowCanWeHelp from "@/components/Home/HowCanWeHelp.vue";
import WhatWeDo from "@/components/Home/WhatWeDo.vue";
</script>

<template>
  <default-layout>
    <TheHero />
    <main>
      <WhoWeAre />
      <HowCanWeHelp />
      <WhatWeDo />
    </main>
  </default-layout>
</template>
