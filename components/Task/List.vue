<template>
  <div class="tasks">
    <div v-if="tasks.length > 0" class="tasks-list">
        <TaskItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
        />
    </div>
    <div class="tasks-meta">
      <p class="tasks-count">{{ tasks.length }} Item<span v-if="tasks.length > 1">s</span></p>
      <button
        v-if="tasks.length > 0 && hasCompletedTasks()"
        class="tasks-clear-complete"
        @click="clearCompletedTasks()"
      >Clear Complete</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  computed: {
    tasks() {
      return this.$store.state.tasks.tasks;
    },
  },
  methods: {
    hasCompletedTasks() {
      return this.tasks.some((task) => task.done);
    },
    ...mapMutations({
      clearCompletedTasks: 'tasks/clearCompletedTasks',
    }),
  }
}
</script>

<style lang="scss" scoped>
.tasks {
  --tasks-divider-height: 4px;
  --tasks-sides-padding: 1.625rem;

  background-color: #25273C;
  width: 100%;
}

/*
|--------------------------------------------------------------------------
| Lists
|--------------------------------------------------------------------------
|
|
|
*/

.tasks-list {
  padding: 1.25rem var(--tasks-sides-padding);
  max-height: min(55vh, 90vw);
  height: 100%;
  overflow-y: auto;
}
.tasks-list > * + * {
  margin-top: calc(1.25rem + var(--tasks-divider-height));
  padding-top: calc(1.25rem + var(--tasks-divider-height));
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 85%;
    top: calc((var(--tasks-divider-height) / 2) * -1);
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: var(--tasks-divider-height);
    background-color: rgba(72, 64, 64, 0.37);
  }
}

/*
|--------------------------------------------------------------------------
| Meta
|--------------------------------------------------------------------------
|
|
|
*/

.tasks-meta {
  padding: 1rem var(--tasks-sides-padding);
  display: flex;
  gap: clamp(0.75rem, 3vw, 1.5rem);
  align-items: center;
  justify-content: space-between;
  border: 2px solid #AD02FE;
  font-size: clamp(0.85rem, 3.5vw, 1.5rem);
  letter-spacing: 0.1em;
  color: #FFFFFF;
}

// =============================================
// Clear Complete
// =============================================

.tasks-clear-complete {
  all: unset;
  cursor: pointer;
}

</style>
