<template>
  <v-card class="table ma-5">
    <v-card-title>{{ tableTitle }}</v-card-title>
    <v-data-table
      :headers="headers"
      :items="test.tests"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "TableTests",
  props: {
    headers: Array,
    test: {
      countOfReviews: String,
      creationStep: String,
      tests: Array
    }
  },
  computed: {
    tableTitle() {
      return `Count of reviews: ${this.test.countOfReviews} | Creation step: ${this.test.creationStep}`;
    }
  }
};
</script>

<style scoped>
.table {
  width: 800px;
}
</style>
