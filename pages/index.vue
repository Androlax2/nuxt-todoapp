<template>
  <div>
    <TaskForm />
    <TaskList />
  </div>
</template>

<style lang="scss" scoped>
div > * + * {
  margin-top: clamp(1rem, 5vw, 3.125rem);
}
</style>
