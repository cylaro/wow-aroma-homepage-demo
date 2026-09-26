const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const closeMenu = () => { nav?.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-open'); };
menu?.addEventListener('click', () => { const open = !nav.classList.contains('open'); nav.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); document.body.classList.toggle('menu-open', open); });
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

const questions = [...document.querySelectorAll('.question')];
const progress = document.querySelector('.progress i');
const quiz = document.querySelector('.quiz');
const result = document.querySelector('.quiz-result');
let step = 0;
const updateQuiz = () => {
  questions.forEach((question, index) => question.classList.toggle('active', index === step));
  progress.style.width = `${((step + 1) / questions.length) * 100}%`;
  quiz.querySelector('.quiz-top span').textContent = `0${step + 1} / 04`;
};
document.querySelectorAll('.answers button').forEach(button => button.addEventListener('click', () => {
  if (step < questions.length - 1) { step += 1; updateQuiz(); return; }
  questions.at(-1).classList.remove('active'); result.style.display = 'block'; progress.style.width = '100%'; quiz.querySelector('.quiz-top span').textContent = 'готово';
}));
document.querySelector('.quiz-result a')?.addEventListener('click', () => { window.location.href = 'https://wow-aroma.ru/catalog'; });
document.querySelector('.bag').href = 'https://wow-aroma.ru/catalog';
document.querySelector('.bag span').textContent = 'Магазин';
document.querySelector('.bag b').textContent = '↗';
