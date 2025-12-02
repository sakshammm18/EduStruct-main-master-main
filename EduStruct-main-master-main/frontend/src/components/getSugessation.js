export function getSuggestions(status) {
    const suggestions = [];
  
    if (!status.toilets) {
      suggestions.push("🚽 Toilets are missing – Ensure gender-separated toilet facilities are in place.");
    }
    if (!status.library) {
      suggestions.push("📚 Library is missing – Establish a basic library with age-appropriate books.");
    }
    if (!status.playground) {
      suggestions.push("🏀 Playground is missing – Provide outdoor space for student recreation.");
    }
    if (!status.boundaryWall) {
      suggestions.push("🧱 Boundary wall is missing – Secure the premises with a boundary wall.");
    }
  
    return suggestions;
  }
  