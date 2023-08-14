<template>
  <client-only fallback="Loading...">
    <f-form-builder :field.prop="fields"> </f-form-builder>
  </client-only>
</template>
<script lang="ts" setup>
import { FormBuilderField } from "@cldcvr/flow-form-builder";
const fields = ref<FormBuilderField>({
  type: "object",
  direction: "vertical",
  fields: {
    textField: {
      type: "text",
    },
    selectField: {
      type: "select",
      options: ["option1", "option2"],
    },
  },
});
</script>
