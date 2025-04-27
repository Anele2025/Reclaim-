
AOS.init();
let userPoints = 200;

function redeemReward() {
  const modal = document.getElementById('rewardModal');
  const modalMessage = document.getElementById('modal-message');
  if (userPoints >= 500) {
    modalMessage.innerText = "Congratulations! You've redeemed a Gift Card!";
    userPoints -= 500;
  } else if (userPoints >= 150) {
    modalMessage.innerText = "Congratulations! You've redeemed a Reusable Water Bottle!";
    userPoints -= 150;
  } else if (userPoints >= 100) {
    modalMessage.innerText = "Congratulations! You've redeemed a Recyclable Bag!";
    userPoints -= 100;
  } else {
    modalMessage.innerText = "You don't have enough points.";
  }
  document.getElementById('user-points').textContent = userPoints;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('rewardModal').style.display = 'none';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const modeToggle = document.getElementById('mode-toggle');
  modeToggle.innerText = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const btn = document.getElementById('scrollTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}

function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
