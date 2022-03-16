<!--日历显示-->
<template>
  <el-calendar>
    <template #dateCell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }}
        {{ data.isSelected ? '✔️' : '' }}
      </p>
    </template>
  </el-calendar>
</template>

<script>
export default {
  name: "DateCalendar"
}
</script>

<style scoped>
.is-selected {
  color: #1989fa;
}
</style>