<template>
  <v-form class="form ma-5" @submit.prevent="validateForm">
    <v-text-field
      label="Count of reviews"
      :error="incorectInput"
      type="number"
      :value="value.countOfReviews"
      @input="$emit('input', changeReviews($event))"
      @focus="hideAllAlerts"
    ></v-text-field>
    <v-text-field
      label="Creation step"
      :error="incorectInput"
      type="number"
      :value="value.creationStep"
      @input="$emit('input', changeStep($event))"
      @focus="hideAllAlerts"
    ></v-text-field>
    <v-btn block :loading="loading || requestLoading" type="submit"
      >Start Tests</v-btn
    >
    <v-alert
      v-if="incorectInput"
      border="top"
      color="red"
      type="error"
      class="mt-3"
      text
      >Count of reviews must be bigger then Creation step</v-alert
    >
    <v-alert
      v-if="requestCouldNotBeSent"
      border="top"
      color="orange"
      type="warning"
      class="mt-3"
      text
      >Now the request could not be sent. Try again in a few minutes</v-alert
    >
  </v-form>
</template>

<script>
import { canInsert } from "@/services/api";

export default {
  name: "FormTests",
  props: {
    value: {
      countOfReviews: String,
      creationStep: String
    },
    loading: Boolean
  },
  data: () => ({
    incorectInput: false,
    requestCouldNotBeSent: false,
    requestLoading: false
  }),
  methods: {
    changeReviews(value) {
      return { ...this.value, countOfReviews: value };
    },
    changeStep(value) {
      return { ...this.value, creationStep: value };
    },
    isCorectInput() {
      const count = parseInt(this.value.countOfReviews) || 0;
      const step = parseInt(this.value.creationStep) || 0;

      return count > step;
    },
    requestCouldBeSent() {
      return canInsert()
        .then(() => true)
        .catch(() => false);
    },
    async validateForm() {
      this.hideAllAlerts();

      if (!this.isCorectInput()) {
        this.incorectInput = true;
        return;
      }

      try {
        this.requestLoading = true;
        await canInsert();
      } catch {
        this.requestCouldNotBeSent = true;
        return;
      } finally {
        this.requestLoading = false;
      }

      this.$emit("start");
    },
    hideAllAlerts() {
      this.incorectInput = false;
      this.requestCouldNotBeSent = false;
    }
  }
};
</script>

<style scoped>
.form {
  width: 400px;
}
</style>
