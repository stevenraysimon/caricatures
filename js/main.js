document.addEventListener('DOMContentLoaded', function () {
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
    const makeTime = 175;
    questions.forEach(question => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.qa-fa');

        // Initially hide answers
        answer.style.display = 'none';
        answer.style.overflow = 'hidden';
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');

        question.addEventListener('click', function () {
            // Slide Toggle Logic
            if (answer.style.display === 'none') {
                // Slide Down
                answer.style.display = 'block';
                answer.style.height = '0px';

                // Animate height
                const fullHeight = answer.scrollHeight;
                answer.style.height = `${fullHeight}px`;

                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');

                // Reset height after animation
                setTimeout(() => {
                    answer.style.height = '';
                }, makeTime);
            } else {
                // Slide Up
                const currentHeight = answer.scrollHeight;
                answer.style.height = `${currentHeight}px`;

                // Animate to zero height
                setTimeout(() => {
                    answer.style.height = '0px';
                }, 0);

                // Hide after animation
                setTimeout(() => {
                    answer.style.display = 'none';
                    answer.style.height = '';
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }, makeTime);
            }
        });
    });
});

function playSound(id) {
    const audio = document.getElementById(id);
    if (audio) audio.play();
}
