import { sanitize } from "dompurify";

const cleanHtml = (html) => {
  return sanitize(html);
};

export default cleanHtml;
