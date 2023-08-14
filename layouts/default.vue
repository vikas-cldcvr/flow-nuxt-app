<template>
  <f-div state="default" height="100%" direction="column">
    <f-div
      height="53px"
      padding="medium"
      align="middle-right"
      border="small solid default bottom"
    >
      <f-icon source="i-cart" size="large"></f-icon>
    </f-div>
    <f-div padding="x-large">
      <slot />
    </f-div>
  </f-div>
</template>
