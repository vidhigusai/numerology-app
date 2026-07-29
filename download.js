async function loadPageContent(url, selector) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        const text = await response.text();
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = text;
        const content = tempDiv.querySelector(selector);
        return content ? content.innerHTML : `<p>[Content not found in ${url}]</p>`;
    } catch (error) {
        console.error(error);
        return `<p>[Error loading ${url}]</p>`;
    }
}

async function prepareCombinedContent() {
    const container = document.createElement('div');
    container.id = 'combinedReportContent';

    const pages = [
        { url: 'mobile.html', selector: '.results-container' },
        { url: 'personal.html', selector: '.results-container' },
        { url: 'loshugrid.html', selector: '.results-container' }
    ];

    for (const page of pages) {
        const contentHtml = await loadPageContent(page.url, page.selector);
        const sectionDiv = document.createElement('div');
        sectionDiv.innerHTML = contentHtml;
        
        const title = document.createElement('h2');
        title.style.color = '#b8860b';
        title.style.marginTop = '20px';
        title.textContent = `Report Section`;
        
        container.appendChild(title);
        container.appendChild(sectionDiv);
        
        const pageBreak = document.createElement('div');
        pageBreak.className = 'page-break';
        container.appendChild(pageBreak);
    }

    return container;
}

async function downloadReport() {
    const userName = (document.getElementById('firstName')?.value.trim() + " " + document.getElementById('lastName')?.value.trim()).trim() || 'User';

    // Create main wrapper container that will be temporarily rendered off-screen
    const wrapper = document.createElement('div');
    wrapper.style.position = 'absolute';
    wrapper.style.left = '-9999px';
    wrapper.style.top = '0';
    wrapper.style.width = '800px'; // Set a fixed standard width for clean PDF layout
    wrapper.style.backgroundColor = '#ffffff';
    wrapper.style.padding = '20px';
    wrapper.style.fontFamily = 'Arial, sans-serif';

    // Create title page section
    const titlePage = document.createElement('div');
    titlePage.style.textAlign = 'center';
    titlePage.style.padding = '100px 20px';
    titlePage.style.fontSize = '28px';
    titlePage.style.fontWeight = 'bold';
    titlePage.style.color = '#b8860b';
    titlePage.textContent = `${userName} Numerology Report`;
    
    wrapper.appendChild(titlePage);

    // Fetch and append the rest of the content pages
    const combinedContent = await prepareCombinedContent();
    wrapper.appendChild(combinedContent);

    // Append to body temporarily so html2canvas can calculate element sizes/rendering
    document.body.appendChild(wrapper);

    const opt = {
        margin: 10,
        filename: `${userName.replace(/\s+/g, '_')}_Numerology_Report.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
        await html2pdf().set(opt).from(wrapper).save();
    } catch (err) {
        console.error("PDF generation failed:", err);
    } finally {
        // Clean up wrapper from DOM after saving
        wrapper.remove();
    }
}

// CSS for page breaks
const style = document.createElement('style');
style.textContent = `
@media print {
    .page-break {
        page-break-before: always;
    }
}
`;
document.head.appendChild(style);