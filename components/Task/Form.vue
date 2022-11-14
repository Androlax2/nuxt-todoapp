<template>
  <div>
    <input
      :placeholder="placeholder"
      type="text"
      @keyup.enter="addTask()"
    >
    <button @click="addTask()">
      <svg aria-hidden="true" fill="none" height="33" viewBox="0 0 56 33" width="56" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.8394 2.50969C38.8238 2.79836 41.5346 12.2524 41.3919 16.9433" stroke="white" stroke-width="4" />
        <line stroke="white" stroke-width="4" x1="0.828796" x2="29.9339" y1="2.14552" y2="2.14552" />
        <path
          d="M39.8439 32.0585C40.6249 32.8523 41.891 32.8729 42.672 32.1046L55.3982 19.5841C56.1791 18.8158 56.1791 17.5495 55.3982 16.7557C54.6172 15.9619 53.3511 15.9413 52.5701 16.7096L41.2579 27.8389L29.9457 16.3408C29.1648 15.547 27.8986 15.5263 27.1177 16.2947C26.3367 17.063 26.3367 18.3293 27.1177 19.1231L39.8439 32.0585ZM39.2582 15.4553L39.2582 30.6347L43.2577 30.6999L43.2577 15.5205L39.2582 15.4553Z"
          fill="white"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    placeholder: {
      type: String,
      default: 'Create a new todo...'
    }
  },
  computed: {
    $input(): HTMLInputElement|null {
      return this.$el.querySelector('input')
    }
  },
  
  methods: {
    addTask() {
      if (!this.$input) {
        return;
      }

      const title = this.$input.value;

      if (!title) {
        return;
      }

      this.$store.commit('tasks/addTask', {
        id: Date.now(),
        title,
        done: false
      });

      this.$input.value = '';
    }
  }
})
</script>

<style lang="scss" scoped>
div {
  display: flex;
}

input,
button {
  all: unset;
}

input {
  width: 100%;
  padding: 0.75rem 1.75rem;
  background-color: #25273C;
  border-top-left-radius: 1.875rem;
  border-bottom-left-radius: 1.875rem;

  &,
  &::placeholder {
    font-size: clamp(1rem, 5vw, 2.25rem);
    color: rgba(255, 255, 255, 0.7);
    line-height: 1;
    letter-spacing: 0.1em;
  }
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(5rem, 10vw, 9rem);
  cursor: pointer;
  padding: 0.5rem;
  background: rgba(90, 255, 49, 0.6);
  border-top-right-radius: 1.875rem;
  border-bottom-right-radius: 1.875rem;
}
</style>
