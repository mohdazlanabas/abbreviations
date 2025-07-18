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
    const inputValue = document.getElementById("abbrInput").value.trim();
    if (!inputValue) {
        document.getElementById("result").innerHTML = "❌ Please enter an abbreviation.";
        return;
    }

    // Convert input to uppercase for matching
    const abbr = inputValue.toUpperCase();
    
    // Find the result (case-insensitive search)
    let result = null;
    let matchedKey = null;
    
    // First try exact match
    if (data[abbr]) {
        result = data[abbr];
        matchedKey = abbr;
    } else {
        // Try case-insensitive search through all keys
        for (const key in data) {
            if (key.toUpperCase() === abbr) {
                result = data[key];
                matchedKey = key;
                break;
            }
        }
    }
    
    const resultDiv = document.getElementById("result");

    if (result) {
        // Handle different JSON structures
        const indonesian = result["Indonesian Full Form"] || result["indonesian"] || result["Indonesian"];
        const english = result["English Equivalent"] || result["english"] || result["English"];
        const malaysian = result["Malaysian Equivalent"] || result["malaysia"] || result["Malaysian"];
        const category = result["Category"] || result["category"];
        const region = result["Region"] || result["region"];
        
        resultDiv.innerHTML = `
            <strong>${matchedKey}</strong><br>
            🇮🇩 ${indonesian || 'N/A'}<br>
            🇬🇧 ${english || 'N/A'}<br>
            🇲🇾 ${malaysian || 'N/A'}<br>
            📁 ${category || 'N/A'} | 🌍 ${region || 'N/A'}
        `;
    } else {
        resultDiv.innerHTML = "❌ Abbreviation not found.";
    }
}
