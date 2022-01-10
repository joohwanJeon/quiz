<template>
    <v-dialog
      v-model="dialog"
      :persistent="isPersistent"
    >
      <slot :dialogClose="dialogClose"></slot>
    </v-dialog>
</template>

<script>
export default {
  props: ['isPersistent'],
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