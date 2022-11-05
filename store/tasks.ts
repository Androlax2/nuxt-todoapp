export const state = () => ({
  tasks: []
});

export const mutations = {
  addTask(state: any, task: Task) {
    state.tasks.push(task);
  },
  toggleTask(state: any, task: Task) {
    task.done = !task.done;
  },
  clearCompletedTasks(state: any) {
    state.tasks = state.tasks.filter((task: Task) => !task.done);
  }
}
