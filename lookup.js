const data = {
    "PKS": {
        "indonesian": "Perjanjian Kerja Sama",
        "english": "Cooperation Agreement",
        "malaysia": "Perjanjian Kerjasama",
        "category": "Document",
        "region": "National"
    },
    "KLH": {
        "indonesian": "Kementerian Lingkungan Hidup",
        "english": "Ministry of Environment",
        "malaysia": "Ministry of Natural Resources and Environment",
        "category": "Ministry",
        "region": "National"
    }
    // ... Full dataset loaded from abbreviations.json in the full version
};

function lookup() {
    const abbr = document.getElementById("abbrInput").value.toUpperCase();
    const result = data[abbr];
    const resultDiv = document.getElementById("result");

    if (result) {
        resultDiv.innerHTML = `
            <strong>${abbr}</strong><br>
            🇮🇩 ${result.indonesian}<br>
            🇬🇧 ${result.english}<br>
            🇲🇾 ${result.malaysia}<br>
            📁 ${result.category} | 🌍 ${result.region}
        `;
    } else {
        resultDiv.innerHTML = "❌ Abbreviation not found.";
    }
}