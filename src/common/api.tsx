let proxy = "https://cors-anywhere.herokuapp.com";
export async function http<T>(url: string): Promise<T> {
  const response = await fetch(`${proxy}/${url}`);
  const body = await response.json();
  return body;
}