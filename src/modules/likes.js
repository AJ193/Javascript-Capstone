const getLikes = async () => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8akpQq4YTxQqETVC3jxI/likes');
  const likes = await res.json();
  return likes;
};

const addLikes = async (id) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8akpQq4YTxQqETVC3jxI/likes',
    {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    });
};

export { getLikes, addLikes };