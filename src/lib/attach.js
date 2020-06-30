// Function to load script into page
export const attach = url => {
  const scriptTag = document.createElement("script");
  scriptTag.setAttribute("src", url);
  document.head.appendChild(scriptTag);
};
