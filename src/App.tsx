import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ITodo } from "./app.interface";

const todoId = 1;

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await axios.get<ITodo>(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      return response.data;
    },
  });
  return (
    <div>
      {/*error && <div>{error}</div>*/}

      {isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <h1>Todo: {data.title}</h1>
      ) : (
        <h1>Data not found!</h1>
      )}
      </div>
  );
}

export default App;
