const CDN_URL = 'https://cdn.thesimpsonsapi.com/500';
const API_URL = 'https://thesimpsonsapi.com/api/characters';

function normalizeCharacter(character) {
  return {
    id: character.id ?? crypto.randomUUID(),
    name: character.name ?? 'Unknown',
    image: character.portrait_path ? `${CDN_URL}${character.portrait_path}` : null,
  };
}

export async function fetchSimpsons(page = 1) {
  const response = await fetch(`${API_URL}?page=${page}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch characters (page ${page}).`);
  }

  const data = await response.json();
  return data.results.map(normalizeCharacter);
}

export async function getSimpsonsCollection() {
  let page = 1;
  const results = [];
  const LIMIT = 50
  const MAX_PAGES = 10;

  while (results.length < LIMIT && page <= MAX_PAGES) {
    const simpsons = await fetchSimpsons(page);

    if (!simpsons.length) break;

    results.push(...simpsons);
    page++;
  }

  return results.slice(0, LIMIT);
}
