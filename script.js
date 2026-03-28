const pdfInput = document.getElementById('pdf-input');
const fileName = document.getElementById('file-name');
const downloadSection = document.getElementById('download-section');
const downloadLink = document.getElementById('download-link');

pdfInput.addEventListener('change', function (e) {
    const file = e.target.files[0];

    if (file && file.type === "application/pdf") {
        // Show file name
        fileName.textContent = `Selected: ${file.name}`;

        // Create a temporary local URL for the file
        const fileURL = URL.createObjectURL(file);

        // Set the download link to that URL
        downloadLink.href = fileURL;
        downloadLink.download = file.name;

        // Reveal the download section
        downloadSection.classList.remove('hidden');
    } else {
        alert("Please select a valid PDF file.");
        fileName.textContent = "No file selected";
        downloadSection.classList.add('hidden');
    }
});