document.addEventListener('DOMContentLoaded', function() {
    var headerList = document.getElementById('headerList');
    var contentList = document.getElementById('contentList');

    headerList.addEventListener('scroll', function() {
        contentList.scrollLeft = headerList.scrollLeft;
    });

    contentList.addEventListener('scroll', function() {
        headerList.scrollLeft = contentList.scrollLeft;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const widgetItems = document.querySelectorAll('.widget li .widget-item h5');

    widgetItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const parentLi = this.closest('li');
            const icon = parentLi.querySelector('.widget-item .fas');
            const isActive = parentLi.classList.contains('active');

            if (isActive) {
                parentLi.classList.remove('active');
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                // Đóng tất cả các mục khác
                document.querySelectorAll('.widget li').forEach(function (li) {
                    li.classList.remove('active');
                    const otherIcon = li.querySelector('.widget-item .fas');
                    if (otherIcon) {
                        otherIcon.classList.remove('fa-minus');
                        otherIcon.classList.add('fa-plus');
                    }
                });

                parentLi.classList.add('active');
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });
});

