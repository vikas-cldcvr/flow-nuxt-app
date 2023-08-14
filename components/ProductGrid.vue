<template>
  <f-div direction="column" height="hug-content" padding="x-large">
    <f-grid
      :gap="'x-large'"
      :min-cell-width="200"
      :max-cell-width="350"
      :cell-height="150"
    >
      <f-div v-for="product in 4" state="secondary" align="middle-center">
        <f-text align="center">{{ product }}</f-text>
      </f-div>
    </f-grid>
  </f-div>
</template>
