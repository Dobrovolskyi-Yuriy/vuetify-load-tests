<template>
  <LoadTests :data="$data" :start="startTests" />
</template>

<script>
import LoadTests from "./LoadTests";
import {
  postReviews,
  getReviews,
  getCompanies,
  getTotal,
  getUsersStatistic,
  deleteReviews
} from "@/services/api";

export default {
  name: "LoadTestsContainer",
  components: {
    LoadTests
  },
  data: () => ({
    formForTests: {
      countOfReviews: "",
      creationStep: ""
    },
    loading: false,
    allTests: []
  }),
  methods: {
    async startTests() {
      this.loading = true;

      this.allTests.push({});
      const thisTest = this.allTests[this.allTests.length - 1];

      this.$set(
        thisTest,
        "countOfReviews",
        parseInt(this.formForTests.countOfReviews)
      );

      this.$set(
        thisTest,
        "creationStep",
        parseInt(this.formForTests.creationStep)
      );

      this.$set(thisTest, "tests", []);

      const tests = thisTest.tests;

      let index = 0;
      let currentStep = thisTest.creationStep;
      while (currentStep < thisTest.countOfReviews) {
        tests.push({});

        this.$set(tests[index], "step", index + 1);

        const postResult = await postReviews(currentStep);
        this.$set(tests[index], "countOfReviews", postResult);

        const resultReviews = await getReviews();
        this.$set(tests[index], "reviews", resultReviews);

        const resultCompanies = await getCompanies();
        this.$set(tests[index], "companies", resultCompanies);

        const resultTotal = await getTotal();
        this.$set(tests[index], "total", resultTotal);

        const resultUsersStatistic = await getUsersStatistic();
        this.$set(tests[index], "usersStatistic", resultUsersStatistic);

        currentStep += thisTest.creationStep;
        index++;
      }

      await deleteReviews();
      this.loading = false;
    }
  }
};
</script>
