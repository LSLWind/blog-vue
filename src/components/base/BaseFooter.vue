<template>
  <div class="footer">
    <div>LSL</div>
    <div class="number">
      <a href="http://www.beian.miit.gov.cn" target="_blank"
      >粤ICP备18141506号</a
      >
    </div>
  </div>

</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseFooter",
});
</script>

<style>

.footer {
  text-align: center;
  padding: 20px;
  font-weight: bold;
}

</style>
