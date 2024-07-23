document.addEventListener('DOMContentLoaded', function () {
    const widgetItems = document.querySelectorAll('.main-content .content .widget ul li .widget-item ');

    widgetItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const parentLi = this.closest('li');
            const icon = this.nextElementSibling;
            const isActive = parentLi.classList.contains('active');

            // Đóng tất cả các mục khác
            document.querySelectorAll('.main-content .content .widget ul li').forEach(function (li) {
                li.classList.remove('active');
                li.querySelector('.widget-item i').classList.remove('minus');
                li.querySelector('.widget-item i').classList.add('plus');
            });

            if (!isActive) {
                parentLi.classList.add('active');
                icon.classList.remove('plus');
                icon.classList.add('minus');
            }
        });
    });
});