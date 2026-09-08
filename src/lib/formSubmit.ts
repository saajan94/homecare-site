// The site's forms submit to FormSubmit.co (https://formsubmit.co), a free form
// backend that emails each submission. It requires a plain browser form POST
// (method="POST", encType="multipart/form-data") so that file uploads — the
// résumé on the application form — are included; its AJAX endpoint drops files.
//
// Set VITE_FORMSUBMIT_CODE (see .env.example) to the random code from your
// FormSubmit account, or to the destination email address.

export const FORMSUBMIT_CODE = import.meta.env.VITE_FORMSUBMIT_CODE;

/** Form `action` URL, or undefined when no code is configured yet. */
export const formsubmitAction = FORMSUBMIT_CODE
  ? `https://formsubmit.co/${encodeURIComponent(FORMSUBMIT_CODE)}`
  : undefined;

/** Absolute URL FormSubmit redirects back to after a successful submission. */
export function thankYouUrl(path: string) {
  const origin =
    typeof window !== "undefined" ? window.location.origin : "";
  return `${origin}${path}`;
}
