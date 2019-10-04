<template>
  <v-app>
    <div class="pa-12">
      <LoadTestsContainer />
    </div>
  </v-app>
</template>

<script>
import LoadTestsContainer from "./components/LoadTestsContainer";

export default {
  name: "App",
  components: {
    LoadTestsContainer
  }
};
</script>
