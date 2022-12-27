import useAxios from './useAxios';

function MyComponent() {
  const [name, setName] = useState('');

  // Make a GET request to retrieve the data
  const { data, loading, error } = useAxios('https://my-api.com/endpoint');

  // Make a POST request to create a new resource
  const [postData, setPostData] = useState(null);
  const { loading: postLoading, error: postError } = useAxios(
    'https://my-api.com/endpoint',
    'POST',
    { name },
    { headers: { 'Content-Type': 'application/json' } }
  );

  // Make a PUT request to update an existing resource
  const [updateData, setUpdateData] = useState(null);
  const { loading: updateLoading, error: updateError } = useAxios(
    'https://my-api.com/endpoint/123',
    'PUT',
    { name: 'Updated Name' },
    { headers: { 'Content-Type': 'application/json' } }
  );

  // Make a DELETE request to delete an existing resource
  const [deleteData, setDeleteData] = useState(null);
  const { loading: deleteLoading, error: deleteError } = useAxios(
    'https://my-api.com/endpoint/123',
    'DELETE'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setName('');
      }}
    >
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}