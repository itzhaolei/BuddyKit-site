const dayCells = document.querySelectorAll('.days i');
dayCells.forEach((cell, index) => {
  cell.title = `2026 年 9 月 ${index + 1} 日：${[0, 1, 2, 3, 4, 5][index % 6] * 120} 积分`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.feature-card, .stats-preview, .download-panel').forEach((item) => {
  item.classList.add('reveal');
  observer.observe(item);
});
