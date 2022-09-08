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
  const deleteToast = toast.loading('Siliniyor...');
  fetch(`${process.env.REACT_APP_API_KEY}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      toast.update(deleteToast, {
        render: `${data.content} silindi.`,
        type: 'success',
        autoClose: 2000,
        isLoading: false,
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      toast.update(deleteToast, {
        render: 'Todo silinirken bir hata oluştu.',
        type: 'error',
        autoClose: 2000,
        isLoading: false,
      });
    });
};

export const updateTodoFromApi = (id, data) => {
  const updateToast = toast.loading('Güncelleniyor...');

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
        render: `${data.content} güncellendi.`,
        type: 'success',
        autoClose: 2000,
        isLoading: false,
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      toast.update(updateToast, {
        render: 'Todo güncellenirken bir hata oluştu.',
        type: 'error',
        autoClose: 2000,
        isLoading: false,
      });
    });
};
