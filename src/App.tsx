import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ITodo } from './app.interface';

const todoId = 1;

function App() {

  const { isLoading, error, data } = useQuery({ 
    queryKey: ['todos'], 
    queryFn: async() => {
      await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/1'),
      {
        select: ({ data }) => {
          return data;
        }
      }
    },} 
  )
  console.log(data);
  return <div>{data ? <h1>Todo: {data}</h1> : <h1>Data not found!</h1>}</div>
}















export default App








/*

    ['todos', todoId], () => 
    axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/1'),
    {
      select: ({ data }) => data,
    }

*/