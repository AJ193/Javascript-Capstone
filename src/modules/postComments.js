const postComments = async (id, username, comment) => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/Apps/Eo5MGdJJXbNxseIFE3vX/comments',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        username,
        comment,
      }),
    });
  return res;
};

export default postComments;