document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.toggle-item');

    items.forEach(function(item, index) {
        var toggleParagraph = document.getElementById('toggle-paragraph-' + (index + 1));
        var toggleIcon = item.querySelector('.toggle-icon');
        var spanLine = item.querySelector('.span-line');

        item.addEventListener('click', function() {

            toggleParagraph.classList.toggle('hidden');

            toggleIcon.classList.toggle('active');

            spanLine.classList.toggle('active');
        });
    });
});
