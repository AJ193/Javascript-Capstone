import getComments from './getComments.js';

const countComments = async (data) => {
  const length = data?.length ?? 0;
  return length;
};

const chart = document.getElementById('chart');
const commentCounter = document.getElementById('comment-counter');
const displayComments = async (id) => {
  const data = await getComments(id);
  const length = await countComments(data);
  commentCounter.innerHTML = `(${length}) comments`;
  chart.innerHTML = '';
  if (!data.error) {
    data.forEach((comment) => {
      const li = document.createElement('li');
      li.className = 'chart-comments';
      li.innerHTML = `<p class="comments-p">"${comment.comment}" By '${comment.username}' on "${comment.creation_date}"</p>`;
      chart.appendChild(li);
    });
  }
};

export default displayComments;
