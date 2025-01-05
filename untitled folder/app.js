function showContent(tabId) {
    // Hide all content sections
    let sections = document.querySelectorAll('.content');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Remove active class from all tabs and aria-selected
    let tabs = document.querySelectorAll('.nav-item');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
    });

    // Show the content for the selected tab
    document.getElementById(tabId).classList.add('active');

    // Add active class to the clicked tab and update aria-selected
    let activeTab = document.querySelector(`.nav-item[onclick="showContent('${tabId}')"]`);
    activeTab.classList.add('active');
    activeTab.setAttribute('aria-selected', 'true');
}
