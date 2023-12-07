function calculateLevenshteinDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  // La pondération pour la proximité de 100
  const proximityWeight = 100 / Math.max(a.length, b.length);

  return matrix[b.length][a.length] * proximityWeight;
}

// Exemple d'utilisation
const userMessage = "komant ca vaa";
const question = "Comment ça va ?";
const maxDistance = 20; // Définissez la distance maximale acceptable

if (calculateLevenshteinDistance(userMessage, question) <= maxDistance) {
  console.log("Correspondance trouvée !");
  }

