async function loadPageContent(url, selector) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Failed to fetch ${url}: Status ${response.status}`);
            return `<p style="color: red;">[Could not load ${url} - Status ${response.status}]</p>`;
        }
        const text = await response.text();
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = text;
        const content = tempDiv.querySelector(selector);
        
        if (!content) {
            console.error(`Selector "${selector}" not found in ${url}`);
            return `<p style="color: red;">[Selector ${selector} missing in ${url}]</p>`;
        }
        return content.innerHTML;
    } catch (error) {
        console.error(`Error loading ${url}:`, error);
        return `<p style="color: red;">[Error loading ${url}]</p>`;
    }
}

async function prepareCombinedContent() {
    const container = document.createElement('div');
    container.id = 'combinedReportContent';

    const pages = [
        { url: './mobile.html', selector: '.results-container' },
        { url: './personal.html', selector: '.results-container' },
        { url: './loshugrid.html', selector: '.results-container' }
    ];

    for (const page of pages) {
        const contentHtml = await loadPageContent(page.url, page.selector);
        const sectionDiv = document.createElement('div');
        sectionDiv.innerHTML = contentHtml;
        
        container.appendChild(sectionDiv);
        
        const pageBreak = document.createElement('div');
        pageBreak.className = 'page-break';
        container.appendChild(pageBreak);
    }

    return container;
}

async function downloadReport() {
    // 1. Safely grab the user name
    const firstName = document.getElementById('firstName')?.value.trim() || '';
    const lastName = document.getElementById('lastName')?.value.trim() || '';
    const userName = `${firstName} ${lastName}`.trim() || 'User';

    // 2. Create the wrapper container
    const wrapper = document.createElement('div');
    wrapper.style.position = 'absolute';
    wrapper.style.left = '-9999px';
    wrapper.style.top = '0';
    wrapper.style.width = '800px';
    wrapper.style.backgroundColor = '#ffffff';
    wrapper.style.padding = '30px';
    wrapper.style.fontFamily = 'Arial, sans-serif';

    // 3. Create title page section
    const titlePage = document.createElement('div');
    titlePage.style.textAlign = 'center';
    titlePage.style.padding = '150px 20px';
    titlePage.style.fontSize = '28px';
    titlePage.style.fontWeight = 'bold';
    titlePage.style.color = '#b8860b';
    titlePage.textContent = `${userName} Numerology Report`;
    wrapper.appendChild(titlePage);

    // 4. Try to append combined content safely
    try {
        const combinedContent = await prepareCombinedContent();
        wrapper.appendChild(combinedContent);
    } catch (err) {
        console.error("Error building combined content:", err);
        const errorMsg = document.createElement('p');
        errorMsg.style.color = 'red';
        errorMsg.style.textAlign = 'center';
        errorMsg.textContent = 'Error loading additional report sections.';
        wrapper.appendChild(errorMsg);
    }

    // 5. Append wrapper to DOM so html2canvas can render it
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
        alert("Failed to generate PDF. Check console for details.");
    } finally {
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