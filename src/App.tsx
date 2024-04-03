import { useQuery } from "@tanstack/react-query";
import todoService from "./services/todo.service";


function App() {
  const { status, isLoading, error, data } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await todoService.getAll();
      return response.data;
    },
  });

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data?.length ? (
        data.map(todo => (
          <div key={todo.id}><b>{todo.id}:</b>{todo.title}</div>
        ))
      ) : (
        <h1>Data not found!</h1>
      )}
      </div>
  );
}

export { App }
