function openSection(sectionId) {
    const sections = document.querySelectorAll('.lesson-section');

    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = section.style.display === 'block' ? 'none' : 'block';
        } else {
            section.style.display = 'none';
        }
    });
}