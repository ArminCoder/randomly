export default {
  methods: {
    $displayServerResponse(response) {
      if (response.error) return this.$displayErrorToast(response.error);
      if (response.success) this.$displaySuccessToast(response.success);
    },
    $displayErrorToast(message) {
      this.$toast.open({
        message,
        type: "error"
      });
    },
    $displaySuccessToast(message) {
      this.$toast.open({
        message,
        type: "success"
      });
    }
  }
};
