export default async function fetchData(url) {
  const response = await fetch(url);
  try {
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
  }
}
