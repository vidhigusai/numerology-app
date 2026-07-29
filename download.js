function downloadReport() {
    const firstName = document.getElementById('firstName')?.value.trim() || '';
    const lastName = document.getElementById('lastName')?.value.trim() || '';
    const userName = `${firstName} ${lastName}`.trim() || 'User';

    const resultsContainer = document.getElementById('resultsGrid');
    
    if (!resultsContainer || resultsContainer.innerHTML.trim() === '') {
        alert('Please calculate your results before downloading the report.');
        return;
    }

    // Temporarily set a document title so the default PDF filename matches the user's name
    const originalTitle = document.title;
    document.title = `${userName.replace(/\s+/g, '_')}_Numerology_Report`;

    // Force results container visible for printing
    resultsContainer.style.display = 'block';

    // Trigger the browser's native print dialog (User can select "Save as PDF")
    window.print();

    // Restore original title after printing dialog closes
    setTimeout(() => {
        document.title = originalTitle;
    }, 1000);
}