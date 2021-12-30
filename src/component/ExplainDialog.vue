<template>
    <v-dialog
      v-model="dialog"
    >
      <slot :dialogClose="dialogClose"></slot>
    </v-dialog>
</template>

<script>
export default {
  methods: {
    dialogClose() {
      this.dialog = false;
      this.$EventBus.$emit('explainDialogClosed');
    },
  },
  data() {
    return {
      dialog: true,
      color: "#385F73",
    }
  },
  created() {
  },
}

</script>

<style>
</style>