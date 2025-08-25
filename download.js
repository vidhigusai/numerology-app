async function loadPageContent(url, selector) {
    const response = await fetch(url);
    const text = await response.text();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;
    // Extract relevant content part by selector
    const content = tempDiv.querySelector(selector);
    return content ? content.innerHTML : '';
}

async function prepareCombinedContent() {
    const container = document.createElement('div');
    container.style.display = 'none'; // Hide it from visible UI
    container.id = 'combinedReportContent';

    const pages = [
        { url: 'mobile.html', selector: '.results-container' },
        { url: 'personal.html', selector: '.results-container' },
        { url: 'loshgrid.html', selector: '.results-container' }
    ];

    for (const page of pages) {
        const contentHtml = await loadPageContent(page.url, page.selector);
        const sectionDiv = document.createElement('div');
        sectionDiv.innerHTML = contentHtml;
        // Add optional title and page break for clarity in PDF
        const title = document.createElement('h2');
        title.textContent = `Report from ${page.url}`;
        container.appendChild(title);
        container.appendChild(sectionDiv);
        const pageBreak = document.createElement('div');
        pageBreak.className = 'page-break';
        container.appendChild(pageBreak);
    }

    document.body.appendChild(container);
    return container;
}

async function downloadReport() {
    // Prepare combined content if not already
    let combinedContent = document.getElementById('combinedReportContent');
    if (!combinedContent) combinedContent = await prepareCombinedContent();

    const userName = (document.getElementById('firstName')?.value.trim() + " " + document.getElementById('lastName')?.value.trim()).trim() || 'User';

    // Create title page for PDF
    const titlePage = document.createElement('div');
    titlePage.style.textAlign = 'center';
    titlePage.style.padding = '150px 20px';
    titlePage.style.fontSize = '28px';
    titlePage.style.fontWeight = 'bold';
    titlePage.style.color = '#b8860b';
    titlePage.textContent = `${userName} Numerology Report`;

    // Wrap titlePage + combined content in a container
    const wrapper = document.createElement('div');
    wrapper.appendChild(titlePage);
    wrapper.appendChild(combinedContent.cloneNode(true));

    const opt = {
        margin: 10,
        filename: `${userName.replace(/\s+/g, '_')}_Numerology_Report.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 4, useCORS: true, scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(wrapper).save();
}

// CSS to ensure page breaks nicely in PDF
const style = document.createElement('style');
style.textContent = `
@media print {
    .page-break {
        page-break-before: always;
        }
}
`;
document.head.appendChild(style);
