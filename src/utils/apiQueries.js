import { toast } from 'react-toastify';

export const addDataToApi = (data) => {
  return fetch(process.env.REACT_APP_API_KEY, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data);
};

export const deleteTodoFromApi = (id) => {
  const deleteToast = toast.loading('Deleting...');
  fetch(`${process.env.REACT_APP_API_KEY}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      toast.update(deleteToast, {
        render: `${data.content} deleted.`,
        type: 'success',
        autoClose: 2000,
        isLoading: false,
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      toast.update(deleteToast, {
        render: 'An error occurred while deleting Todo.',
        type: 'error',
        autoClose: 2000,
        isLoading: false,
      });
    });
};

export const updateTodoFromApi = (id, data) => {
  const updateToast = toast.loading('Updating...');

  fetch(`${process.env.REACT_APP_API_KEY}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      toast.update(updateToast, {
        render: `${data.content} updated.`,
        type: 'success',
        autoClose: 2000,
        isLoading: false,
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      toast.update(updateToast, {
        render: 'An error occurred while updating Todo.',
        type: 'error',
        autoClose: 2000,
        isLoading: false,
      });
    });
};
