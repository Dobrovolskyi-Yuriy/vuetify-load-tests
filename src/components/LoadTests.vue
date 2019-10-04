<template>
  <div class="d-flex">
    <FormTests
      v-model="data.formForTests"
      :loading="data.loading"
      @start="start"
    />
    <TableTestsContainer :allTests="data.allTests" />
  </div>
</template>

<script>
import FormTests from "./FormTests";
import TableTestsContainer from "./TableTestsContainer";

export default {
  name: "LoadTests",
  components: {
    FormTests,
    TableTestsContainer
  },
  props: {
    data: {
      formForTests: {
        countOfReviews: String,
        creationStep: String
      },
      loading: Boolean,
      allTests: Array
    },
    start: Function
  }
};
</script>
