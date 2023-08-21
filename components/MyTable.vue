<template>
  <ClientOnly>
    <f-table-schema
      id="table"
      :data="tableData"
      :highlight-selected="true"
      :highlight-hover="true"
      :variant="'underlined'"
      :size="'medium'"
      :stickyHeader="true"
      :rowsPerPage="5"
      :sort-by="'firstName'"
      :sort-order="'desc'"
      :show-search-bar="false"
      @next="handleNext"
      @toggle-row-details="toggleRowDetails"
      @row-input="onRowInput"
      @row-click="onRowClick"
      @header-selected="onHeaderSelect"
    >
    </f-table-schema>
  </ClientOnly>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import getFakeUsers from "./mock-users-data";

export default defineComponent({
  name: "MyTable",
  data() {
    return {
      tableData: getFakeUsers(50),
      searchBar: false,
    };
  },
  methods: {
    handleNext(event: CustomEvent) {
      console.log("next event ", event);
    },
    toggleRowDetails(event: CustomEvent) {
      console.log("row details ", event);
    },
    onRowInput() {
      console.log("row input", event);
    },
    onHeaderSelect() {
      console.log("header select ", event);
    },
    onRowClick(e: CustomEvent) {
      e.detail.selected = !e.detail.selected;
      this.tableData = { ...this.tableData };
      console.log("row-click", e);
    },
  },
});
</script>
