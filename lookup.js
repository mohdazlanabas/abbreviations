let data = {};

// Load the JSON data when the script is loaded
fetch('abbreviations.json')
    .then(response => response.json())
    .then(json => {
        data = json;
    })
    .catch(error => {
        console.error('Error loading abbreviations:', error);
        document.getElementById("result").innerHTML = "❌ Error loading abbreviation data.";
    });

function lookup() {
    const abbr = document.getElementById("abbrInput").value.toUpperCase();
    const result = data[abbr];
    const resultDiv = document.getElementById("result");

    if (result) {
        resultDiv.innerHTML = `
            <strong>${abbr}</strong><br>
            🇮🇩 ${result["Indonesian Full Form"]}<br>
            🇬🇧 ${result["English Equivalent"]}<br>
            🇲🇾 ${result["Malaysian Equivalent"]}<br>
            📁 ${result.Category} | 🌍 ${result.Region}
        `;
    } else {
        resultDiv.innerHTML = "❌ Abbreviation not found.";
    }
}