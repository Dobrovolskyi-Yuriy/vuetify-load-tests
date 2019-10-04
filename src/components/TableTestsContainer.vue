<template>
  <div class="table-container d-flex flex-column align-center">
    <TableTests
      v-for="(test, index) in allTests"
      :key="index"
      :test="test"
      :headers="headers"
    />
  </div>
</template>

<script>
import TableTests from "./TableTests";

export default {
  name: "TableTestsContainer",
  components: {
    TableTests
  },
  props: {
    allTests: Array
  },
  data: () => ({
    headers: [
      {
        text: "Step",
        sortable: false,
        align: "center",
        value: "step"
      },
      {
        text: "Count of reviews",
        sortable: false,
        align: "center",
        value: "countOfReviews"
      },
      {
        text: "Reviews",
        sortable: false,
        align: "center",
        value: "reviews"
      },
      {
        text: "Companies",
        sortable: false,
        align: "center",
        value: "companies"
      },
      {
        text: "Total",
        sortable: false,
        align: "center",
        value: "total"
      },
      {
        text: "Users Statistic",
        sortable: false,
        align: "center",
        value: "usersStatistic"
      }
    ]
  })
};
</script>

<style scoped>
.table-container {
  width: 100%;
}
</style>
