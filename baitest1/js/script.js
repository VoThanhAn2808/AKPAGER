document.addEventListener('DOMContentLoaded', function() {
    var tabLinks = document.querySelectorAll('.tab-link');

    tabLinks.forEach(function(tabLink) {
        tabLink.addEventListener('click', function() {
            var tabId = this.getAttribute('data-tab');
            var animationType = this.getAttribute('data-animation');
            var tabContent = document.getElementById(tabId);

            tabLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            this.classList.add('active');

            var allTabContents = document.querySelectorAll('.tab-content');
            allTabContents.forEach(function(content) {
                content.classList.remove('active');
            });
            
            tabContent.classList.add('active', animationType);
        });
    });

    tabLinks[0].click();
});
