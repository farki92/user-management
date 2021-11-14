import {message} from 'antd';

const headers = {'Content-Type': 'application/json'};

export const fetchData = async <T>(url: string): Promise<T | null> => {
  const response = await fetch(url, {
    headers,
    method: 'GET'
  });
  const data = response.json();
  if (!response.ok) {
    message.error('Oops, something went wrong.');
    return null;
  } else return data;
};

export const postData = async <T, B>(
  path: string,
  body: B
): Promise<T | null> => {
  const response = await fetch(path, {
    headers,
    method: 'POST',
    body: JSON.stringify(body)
  });
  const data = response.json();
  if (!response.ok) {
    message.error('Oops, something went wrong.');
    return null;
  } else return data;
};

export const patchData = async <T, B>(
  path: string,
  body: B
): Promise<T | null> => {
  const response = await fetch(path, {
    headers,
    method: 'PATCH',
    body: JSON.stringify(body)
  });
  const data = response.json();
  if (!response.ok) {
    message.error('Oops, something went wrong.');
    return null;
  } else return data;
};
