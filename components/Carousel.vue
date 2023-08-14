<template>
  <client-only fallback="Loading...">
    <f-div height="500px">
      <f-carousel :auto-play="true">
        <f-carousel-content v-for="slide in slides" :content-id="slide">
          <f-div
            height="300px"
            width="100%"
            padding="large"
            gap="large"
            variant="curved"
            state="secondary"
            align="middle-center"
            overflow="hidden"
          >
            <f-text size="x-large" variant="heading" align="center">
              Get Mega Discounts {{ slide }}
            </f-text>
          </f-div>
        </f-carousel-content>
      </f-carousel>
    </f-div>
  </client-only>
</template>
<script setup>
const slides = ref(["slide-1", "slide-2", "slide-3", "slide-4", "slide-5"]);
</script>
