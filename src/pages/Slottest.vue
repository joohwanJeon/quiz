<template>
<div style="color:white;">
  <div>slot 테스트입니다</div>
  {{slotData}}
  <slot :slotData="slotData" :valueSet="valueSet"></slot>
</div>

</template>

<script>
export default {
  name: 'Slottest',
  methods: {
    valueSet() {
      this.slotData++;
    }
  },
  data() {
    return {
      slotData: 1
    }
  }
}

</script>

<style>
</style>