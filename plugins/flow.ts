import "@cldcvr/flow-core";
import "@cldcvr/flow-form-builder";
import "@cldcvr/flow-system-icon";

import "@cldcvr/flow-core/dist/style.css";
import "@cldcvr/flow-form-builder/dist/style.css";

import "@cldcvr/flow-core/dist/types/vue3";
import "@cldcvr/flow-form-builder/dist/types/vue3";

export default defineNuxtPlugin({
  name: "flow",
  enforce: "pre",
  async setup(_nuxtApp) {
    console.log("flow loaded");
  },
});
