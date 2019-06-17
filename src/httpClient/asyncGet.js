import api from '../config/api';

const asyncGet = async (url) => {
  let loading = true;
  let error = false;
  let data = [];

  const fetchResources = async () => {
    await api.get(url).then(res => {
      loading = false;
      data = res.data;
    }).catch(error => {
      console.error(error);
      loading = false;
      error = true;
    });
  }
  await fetchResources();

  return { data, loading, error };
};

export default asyncGet;
