export const fetchTodosData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = response.json();

  return data;
};
