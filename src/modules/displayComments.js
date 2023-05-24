import getComments from './getComments.js';

const chart = document.getElementById('chart');
const displayComments = async (id) => {
  const data = await getComments(id);
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