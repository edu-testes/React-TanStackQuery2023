import { useQuery } from "@tanstack/react-query";
import todoService from "./services/todo.service";


function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await todoService.getAll();
      return response.data;
    },
  });
  return (
    <div>
      {/*error && <div>{error}</div>*/}

      {isLoading ? (
        <div>Loading...</div>
      ) : data?.length ? (
        data.map(todo => (
          <div><b>{todo.id}:</b>{todo.title}</div>
        ))
      ) : (
        <h1>Data not found!</h1>
      )}
      </div>
  );
}

export { App }
