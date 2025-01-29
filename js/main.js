document.addEventListener('DOMContentLoaded', function() {
    // Sound
    const pop = document.getElementById('pop');
    if (pop) {
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                pop.play();
            });
        });
    }

    // Questions and Answers
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.qa-fa');

        // Initially hide answers
        if (answer) {
            answer.style.display = 'none';
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }

        question.addEventListener('click', () => {
            if (answer) {
                answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
                icon.classList.toggle('fa-minus');
                icon.classList.toggle('fa-plus');
            }
        });
    });
});