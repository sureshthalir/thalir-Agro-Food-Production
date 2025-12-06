document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-link');
    const contentSections = document.querySelectorAll('.content-section');

    // செயல்பாடு: எல்லா பகுதிகளையும் மறைத்தல்
    function hideAllSections() {
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // ஆரம்ப நிலை: Products பகுதியை காட்டுதல்
    hideAllSections();
    document.getElementById('products-content').style.display = 'block';

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            // 1. Active Tab மாற்றுதல்
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // 2. உள்ளடக்கத்தை மாற்றுதல்
            hideAllSections();
            const targetId = this.getAttribute('href').substring(1); // # நீக்குதல்
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});