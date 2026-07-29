async function downloadReport() {
    const firstName = document.getElementById('firstName')?.value.trim() || '';
    const lastName = document.getElementById('lastName')?.value.trim() || '';
    const userName = `${firstName} ${lastName}`.trim() || 'User';

    // 1. Create a dedicated container for the PDF
    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.left = '0';
    wrapper.style.top = '0';
    wrapper.style.width = '210mm'; // Standard A4 width
    wrapper.style.backgroundColor = '#ffffff';
    wrapper.style.padding = '20px';
    wrapper.style.boxSizing = 'border-box';
    wrapper.style.fontFamily = 'Arial, sans-serif';
    wrapper.style.zIndex = '999999';

    // 2. Create Title Page
    const titlePage = document.createElement('div');
    titlePage.style.textAlign = 'center';
    titlePage.style.padding = '80px 20px';
    titlePage.style.fontSize = '26px';
    titlePage.style.fontWeight = 'bold';
    titlePage.style.color = '#b8860b';
    titlePage.textContent = `${userName} Numerology Report`;
    wrapper.appendChild(titlePage);

    // 3. Grab the generated results from the page
    const resultsContainer = document.getElementById('resultsGrid');
    
    if (resultsContainer && resultsContainer.innerHTML.trim() !== '') {
        const contentClone = resultsContainer.cloneNode(true);
        // Force the clone to be visible so html2canvas can read it
        contentClone.style.display = 'block';
        contentClone.style.visibility = 'visible';
        contentClone.style.opacity = '1';
        contentClone.style.color = '#000000'; // Ensure text is visible
        wrapper.appendChild(contentClone);
    } else {
        const warning = document.createElement('p');
        warning.style.textAlign = 'center';
        warning.style.color = 'red';
        warning.style.fontSize = '16px';
        warning.textContent = 'Please calculate your results before downloading the report.';
        wrapper.appendChild(warning);
    }

    // 4. Temporarily attach wrapper to the live DOM so the browser renders it
    document.body.appendChild(wrapper);

    // Give the browser a split second to paint the elements
    await new Promise(resolve => setTimeout(resolve, 200));

    const opt = {
        margin: 10,
        filename: `${userName.replace(/\s+/g, '_')}_Numerology_Report.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true, 
            logging: false,
            windowWidth: document.documentElement.offsetWidth
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
        await html2pdf().set(opt).from(wrapper).save();
    } catch (err) {
        console.error("PDF generation failed:", err);
        alert("Failed to generate PDF. Please try again.");
    } finally {
        // 5. Clean up by removing the temporary wrapper from the page
        wrapper.remove();
    }
}