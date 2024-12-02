const tg = window.Telegram.WebApp;
const list = document.getElementById('list');
const joinBtn = document.getElementById('join-btn');

let players = [];

tg.expand();

joinBtn.addEventListener('click', () => {
  const username = tg.initDataUnsafe?.user?.username || 'Неизвестный';
  if (!players.includes(username)) {
    players.push(username);
    updateList();
    alert(`Вы записаны, ${username}!`);
  } else {
    alert('Вы уже в списке!');
  }
});

function updateList() {
  list.innerHTML = players.map((player, index) => `<li>${index + 1}. ${player}</li>`).join('');
}
