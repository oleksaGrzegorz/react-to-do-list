export const getExampleTasks = async () => {
  const response = await fetch("/react-to-do-list/exampleTasks.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
