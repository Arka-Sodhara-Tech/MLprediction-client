const API_URL = 'http://127.0.0.1:5000';

export const forecastMaterial = async () => {
  const response = await fetch(`${API_URL}/forecast`, {
    method: 'POST',
  });
  return response.json();
};

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_URL}/upload`, {
    method: 'POST',
    body: formData,
  });
  return response.json();
};

export const getData = async () => {
  const response = await fetch(`${API_URL}/data`, {
    method: 'GET',
  });
  return response.json();
};
