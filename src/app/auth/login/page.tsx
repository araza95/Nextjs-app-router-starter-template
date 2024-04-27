// Views
import SignInView from '@/views/Authentication/Login';
import axios from 'axios';

export default async function LoginPage() {
  // Added dummy API calls to test the loading screen
  await (
    await axios.get('https://jsonplaceholder.typicode.com/todos')
  ).data;
  await (
    await axios.get('https://jsonplaceholder.typicode.com/todos')
  ).data;
  await (
    await axios.get('https://jsonplaceholder.typicode.com/todos')
  ).data;
  await (
    await axios.get('https://jsonplaceholder.typicode.com/todos')
  ).data;
  await (
    await axios.get('https://jsonplaceholder.typicode.com/todos')
  ).data;
  await (
    await axios.get('https://jsonplaceholder.typicode.com/todos')
  ).data;
  await (
    await axios.get('https://jsonplaceholder.typicode.com/todos')
  ).data;
  await (
    await axios.get('https://jsonplaceholder.typicode.com/todos')
  ).data;
  await (
    await axios.get('https://jsonplaceholder.typicode.com/todos')
  ).data;
  await (
    await axios.get('https://jsonplaceholder.typicode.com/todos')
  ).data;
  await (
    await axios.get('https://jsonplaceholder.typicode.com/todos')
  ).data;
  return <SignInView />;
}
