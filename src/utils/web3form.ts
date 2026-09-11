/**
 * Submits a form to Web3Forms without leaving the page.
 * Returns the API's `message` string on success, otherwise throws.
 */
export async function submitWeb3Form(form: HTMLFormElement): Promise<string> {
  const formData = new FormData(form);
  const object = Object.fromEntries(formData.entries());
  const json = JSON.stringify(object);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Something went wrong. Please try again.");
  }

  return result.message || "Form submitted successfully!";
}