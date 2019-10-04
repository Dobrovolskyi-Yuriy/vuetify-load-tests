<template>
  <v-card class="table ma-5">
    <v-card-title>{{ tableTitle }}</v-card-title>
    <v-data-table
      :headers="headers"
      :items="testsInSeconds"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <v-alert
      v-if="test.error"
      border="top"
      color="red"
      type="error"
      prominent
      >{{ this.test.error }}</v-alert
    >
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
      tests: Array,
      error: Object
    }
  },
  computed: {
    tableTitle() {
      return `Count of reviews: ${this.test.countOfReviews} | Creation step: ${this.test.creationStep}`;
    },
    testsInSeconds() {
      return this.test.tests.map(test => ({
        ...test,
        reviews: this.toSeconds(test.reviews),
        companies: this.toSeconds(test.companies),
        total: this.toSeconds(test.total),
        usersStatistic: this.toSeconds(test.usersStatistic)
      }));
    }
  },
  methods: {
    toSeconds(milliseconds) {
      return isNaN(milliseconds) ? "" : milliseconds / 1000 + "s";
    }
  }
};
</script>

<style scoped>
.table {
  width: 800px;
}
</style>
