export const getArticles = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15');
    if (!response.ok) throw new Error('Erreur lors de la récupération des données');
    return await response.json();
  } catch (error) {
    throw error;
  }
};