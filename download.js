async function downloadReport() {
    const firstName = document.getElementById('firstName')?.value.trim() || '';
    const lastName = document.getElementById('lastName')?.value.trim() || '';
    const userName = `${firstName} ${lastName}`.trim() || 'User';

    const wrapper = document.createElement('div');
    wrapper.style.position = 'absolute';
    wrapper.style.left = '-9999px';
    wrapper.style.top = '0';
    wrapper.style.width = '800px';
    wrapper.style.backgroundColor = '#ffffff';
    wrapper.style.padding = '30px';
    wrapper.style.fontFamily = 'Arial, sans-serif';

    // Title Page
    const titlePage = document.createElement('div');
    titlePage.style.textAlign = 'center';
    titlePage.style.padding = '50px 20px';
    titlePage.style.fontSize = '28px';
    titlePage.style.fontWeight = 'bold';
    titlePage.style.color = '#b8860b';
    titlePage.textContent = `${userName} Numerology Report`;
    wrapper.appendChild(titlePage);

    // Grab the active results container directly from the current page DOM
    const resultsContainer = document.getElementById('resultsGrid');
    if (resultsContainer && resultsContainer.innerHTML.trim() !== '') {
        const clone = resultsContainer.cloneNode(true);
        clone.style.display = 'block'; // Make sure it's visible in the PDF clone
        wrapper.appendChild(clone);
    } else {
        const warning = document.createElement('p');
        warning.style.textAlign = 'center';
        warning.style.color = 'red';
        warning.textContent = 'Please calculate your results before downloading the report.';
        wrapper.appendChild(warning);
    }

    document.body.appendChild(wrapper);

    const opt = {
        margin: 10,
        filename: `${userName.replace(/\s+/g, '_')}_Report.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
        await html2pdf().set(opt).from(wrapper).save();
    } catch (err) {
        console.error("PDF generation failed:", err);
    } finally {
        wrapper.remove();
    }
}