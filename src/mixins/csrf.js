export default {
  computed: {
    csrf: () =>
      document.querySelector('meta[name="csrf-token"]').getAttribute("content")
  }
};
