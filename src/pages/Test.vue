<template>
<div style="color:white">
  <Slottest v-slot="slotData">
    슬롯
    {{slotData.slotData}}
    <button @click="slotData.valueSet" type="button">slot++</button>
  </Slottest>
</div>

</template>

<script>
import Slottest from './Slottest'
export default {
  name: 'Test',
  methods: {
    test() {
      this.slotData.slotData++;
      console.log(this.slotData.slotData++);
    }
  },
  components: 
    {Slottest}
  
}

</script>

<style>
</style>