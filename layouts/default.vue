<template>
  <f-div state="default" width="100%" height="100%" direction="column">
    <f-div
      height="53px"
      padding="medium"
      align="middle-right"
      border="small solid default bottom"
    >
      <f-icon source="i-cart" size="large"></f-icon>
    </f-div>
    <f-div padding="x-large" width="100%">
      <slot />
    </f-div>
  </f-div>
</template>
