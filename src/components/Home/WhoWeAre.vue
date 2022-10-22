<script setup>
import ButtonLink from "@/components/functional/ButtonLink.vue";
</script>

<template>
  <section class="who-we-are">
    <img
      class="who-we-are__image"
      src="@/assets/images/stock2.jpg"
      alt="Woods"
    />

    <div class="who-we-are__details section-padding">
      <h2>We are a social change charity, helping people to improve their lives through digital.</h2>
      <p>
        We tackle the most pressing issues of our time, working with partners in thousands of communities across the UK
        and further afield..
      </p>
      <button-link
        outlined-light
        rounded
        text-light
        >Learn more about us</button-link
      >
    </div>
  </section>
</template>
