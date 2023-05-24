const getComments = async (id) => {
  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/Apps/Eo5MGdJJXbNxseIFE3vX/comments?item_id=${id}`;
  const res = await fetch(URL,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const data = await res.json();
  // console.log(data)
  return data;
};

export default getComments;