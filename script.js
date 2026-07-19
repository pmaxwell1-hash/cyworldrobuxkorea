// ============================================
//   로벅스 코리아 — 싸이월드 스타일 스크립트
// ============================================

// 반짝이 별 생성
(function createStars() {
  var container = document.getElementById('stars');
  if (!container) return;
  var symbols = ['★', '☆', '✦', '✧', '✩'];
  for (var i = 0; i < 30; i++) {
    var el = document.createElement('span');
    el.className = 'star-item';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.top = Math.random() * 100 + '%';
    el.style.animationDelay = (Math.random() * 2).toFixed(2) + 's';
    el.style.animationDuration = (1 + Math.random() * 2).toFixed(2) + 's';
    el.style.fontSize = (10 + Math.random() * 10).toFixed(0) + 'px';
    el.style.opacity = (0.3 + Math.random() * 0.5).toFixed(2);
    container.appendChild(el);
  }
})();

// 주문 모달 열기
function openOrder(robux, price) {
  var bg = document.getElementById('modal-bg');
  var info = document.getElementById('modal-info');
  var label = (robux === 'Premium') ? 'Roblox Premium' : robux.toLocaleString() + ' Robux';
  info.innerHTML = label + ' &nbsp;&mdash;&nbsp; $' + price;
  bg.classList.add('active');
}

// 모달 닫기 (배경 클릭)
function closeModal(e) {
  if (e.target.id === 'modal-bg') {
    e.target.classList.remove('active');
  }
}

// 계좌번호 복사
function copyAccount() {
  copyText('29650207718501', '계좌번호가 복사되었습니다!');
}

// 디스코드 ID 복사
function copyDiscord() {
  copyText('robuxkorea', '디스코드 ID가 복사되었습니다!');
}

function copyText(text, msg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      showToast(msg);
    }).catch(function() { fallbackCopy(text, msg); });
  } else {
    fallbackCopy(text, msg);
  }
}

function fallbackCopy(text, msg) {
  var el = document.createElement('textarea');
  el.value = text;
  el.style.position = 'fixed';
  el.style.opacity = '0';
  document.body.appendChild(el);
  el.select();
  try { document.execCommand('copy'); } catch(e) {}
  document.body.removeChild(el);
  showToast(msg);
}

// 토스트 알림
function showToast(msg) {
  var toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, 2200);
}

// FAQ 토글
function toggleFaq(el) {
  el.classList.toggle('open');
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.getElementById('modal-bg').classList.remove('active');
  }
});

// 부드러운 앵커 이동
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var href = this.getAttribute('href');
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
