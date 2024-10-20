export default function taskBlock(trueOrFalse) {
  const task = false;   // Use const for variables that won't be reassigned
  const task2 = true;

  if (trueOrFalse) {
    const task = true;   // Block-scoped using const
    const task2 = false; // Block-scoped using const
  }

  return [task, task2];  // Returns the outer-scoped task and task2
}
