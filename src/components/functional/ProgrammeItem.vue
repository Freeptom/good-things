<template>
  <li class="programme-item">
    <h3 class="programme-item__title"><slot name="title"></slot></h3>
    <p>
      <slot></slot>
    </p>

    <slot name="cta"></slot>
  </li>
</template>
