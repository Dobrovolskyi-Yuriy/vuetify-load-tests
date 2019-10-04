<template>
  <v-form class="form ma-5" @submit.prevent="$emit('start')">
    <v-text-field
      label="Count of reviews"
      type="number"
      :value="value.countOfReviews"
      @input="$emit('input', changeReviews($event))"
    ></v-text-field>
    <v-text-field
      label="Creation step"
      type="number"
      :value="value.creationStep"
      @input="$emit('input', changeStep($event))"
    ></v-text-field>
    <v-btn class="btn" :loading="loading" type="submit">Start Tests</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "FormTests",
  props: {
    value: {
      countOfReviews: String,
      creationStep: String
    },
    loading: Boolean
  },
  methods: {
    changeReviews(value) {
      return { ...this.value, countOfReviews: value };
    },
    changeStep(value) {
      return { ...this.value, creationStep: value };
    }
  }
};
</script>

<style scoped>
.form {
  width: 400px;
}
.btn {
  width: 100%;
}
</style>
