async function downloadReport() {
    const firstName = document.getElementById('firstName')?.value.trim() || '';
    const lastName = document.getElementById('lastName')?.value.trim() || '';
    const userName = `${firstName} ${lastName}`.trim() || 'User';

    const resultsContainer = document.getElementById('resultsGrid');
    
    if (!resultsContainer || resultsContainer.innerHTML.trim() === '') {
        alert('Please calculate your results before downloading the report.');
        return;
    }

    // 1. Create the PDF wrapper container
    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.left = '0';
    wrapper.style.top = '0';
    wrapper.style.width = '210mm';
    wrapper.style.backgroundColor = '#ffffff';
    wrapper.style.padding = '20px';
    wrapper.style.boxSizing = 'border-box';
    wrapper.style.fontFamily = 'Arial, sans-serif';
    wrapper.style.zIndex = '999999';

    // 2. Create Title Page
    const titlePage = document.createElement('div');
    titlePage.style.textAlign = 'center';
    titlePage.style.padding = '60px 20px 40px 20px';
    titlePage.style.fontSize = '26px';
    titlePage.style.fontWeight = 'bold';
    titlePage.style.color = '#b8860b';
    titlePage.textContent = `${userName} Numerology Report`;
    wrapper.appendChild(titlePage);

    // 3. Save original parent and next sibling of resultsContainer so we can put it back later
    const originalParent = resultsContainer.parentNode;
    const originalNextSibling = resultsContainer.nextSibling;

    // Force the results container to be visible and styled for the PDF export
    resultsContainer.style.display = 'block';
    resultsContainer.style.visibility = 'visible';
    resultsContainer.style.opacity = '1';
    resultsContainer.style.width = '100%';
    
    // Move resultsContainer directly into the PDF wrapper
    wrapper.appendChild(resultsContainer);

    // 4. Attach wrapper to body so html2canvas can render it
    document.body.appendChild(wrapper);

    // Brief delay to let browser paint
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
        // 5. Put resultsContainer safely back into its original spot on your webpage
        if (originalNextSibling) {
            originalParent.insertBefore(resultsContainer, originalNextSibling);
        } else {
            originalParent.appendChild(resultsContainer);
        }
        
        // Remove the temporary PDF wrapper
        wrapper.remove();
    }
}