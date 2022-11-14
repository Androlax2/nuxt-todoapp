<template>
  <div class="item" :data-is-done="task.done" @click="toggleTask(task)">
    <button class="done-button">
      <svg
        aria-hidden="true"
        width="22"
        height="17"
        viewBox="0 0 22 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1.59826"
          y1="8.55982"
          x2="7.67648"
          y2="15.5064"
          stroke="white"
          stroke-width="3"
        />
        <line
          x1="6.39001"
          y1="14.5315"
          x2="20.2831"
          y2="1.50675"
          stroke="white"
          stroke-width="3"
        />
      </svg>
    </button>
    <p class="title">{{ task.title }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'

export default defineComponent({
  props: {
    task: {
      type: Object as () => Task,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      toggleTask: 'tasks/toggleTask',
    }),
  },
})
</script>

<style lang="scss" scoped>
.item {
  user-select: none;
  display: flex;
  align-items: center;
  gap: clamp(0.75rem, 3vw, 1.5rem);
  cursor: pointer;
}
.done-button {
  all: unset;
  width: clamp(1.5rem, 5vw, 2.5rem);
  height: clamp(1.5rem, 5vw, 2.5rem);
  border-radius: 100%;
  flex-shrink: 0;
  border: 2px solid rgba(191, 86, 255, 0.79);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 50%;
    height: 45%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
}
.title {
  display: block;
  font-size: clamp(1.25rem, 4vw, 2.25rem);
  color: var(--task-color, rgba(255, 255, 255, 0.7));
  letter-spacing: 0.1em;
  width: 100%;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    height: 2.5px;
    background-color: rgba(255, 255, 255, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
}

.item[data-is-done='true'] {
  --task-color: rgba(15, 144, 162, 0.57);

  .done-button {
    background: linear-gradient(
      111.35deg,
      #e600fa 10.12%,
      rgba(82, 97, 234, 0) 82.22%
    );
    svg {
      opacity: 1;
    }
  }
  .title::before {
    opacity: 1;
  }
}
</style>
