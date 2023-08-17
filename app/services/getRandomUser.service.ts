export const getRandomUser = async () => {
  const resp = await fetch(`https://randomuser.me/api/`)
  return resp.json();
}