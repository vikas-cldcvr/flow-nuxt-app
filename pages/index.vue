<template>
  <f-div direction="column" align="top-left">
    <Carousel></Carousel>
    <ProductGrid></ProductGrid>
    <f-popover :open="isOpen">
      <f-div width="100%" height="300px" state="secondary" direction="column">
        <f-div
          padding="large"
          height="53px"
          gap="auto"
          border="small solid default bottom"
        >
          <f-text weight="bold">Welcome to flow in Nuxt</f-text>
          <f-icon
            source="i-close"
            clickable
            @click="handleClick"
            size="small"
          ></f-icon>
        </f-div>
        <f-div padding="large" direction="column">
          <f-text variant="code" size="large" align="center"
            >This is Nuxt using flow-core</f-text
          >
          <f-spacer size="x-small"></f-spacer>
          <f-divider :variant="'dashed'"></f-divider>
          <f-spacer size="x-small"></f-spacer>
          <f-text
            >flow is installed using plugin config, checkout file at
            "plugins/flow".</f-text
          >
        </f-div>
      </f-div>
    </f-popover>
  </f-div>
</template>
<script setup lang="ts">
const isOpen = ref(true);
const handleClick = (event: MouseEvent) => {
  isOpen.value = !isOpen;
};
</script>
