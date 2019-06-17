import api from '../config/api';

const post = async (url, form) => {
  let loading = false;
  let error = false;

  await api.post(url, form).then(res => {
    console.log(res);
    loading = false;
  }).catch(error => {
    console.error(error);
    loading = false;
    error = true;
  });

  return { loading, error };
};

export default post;
