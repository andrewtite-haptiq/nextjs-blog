// This file is for demonstration purposes only.
// It is not used in the application.

// https://swr.vercel.app
import useSWR from 'swr';

export default function Profile() {
  const { data, error } = useSWR('/api/user', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // render data
  return <div>hello {data.name}!</div>;
}
