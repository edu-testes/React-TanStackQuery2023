import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ITodo } from './app.interface';

const todoId = 1;

function App() {

  const { isLoading, error, data } = useQuery(
    ['todos', todoId], () => 
    axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/1'),
    {
      select: ({ data }) => data,
    }
  )
  console.log(data);
  return <div>{data ? <h1>Todo: {data.title}</h1> : <h1>Data not found!</h1>}</div>
}

export default App
