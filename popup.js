window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

const button = document.createElement("button");
button.setAttribute("name", "Clear");
button.innerText = "Clear";
document.body.appendChild(button);

const getTabId = async () => {
  let queryOptions = { active: true, currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs[0].id;
};

const chromeScripting = (id) =>
  chrome.scripting
    .executeScript({
      target: { tabId: id },
      files: ["clear.js"],
    })

const clear = async (e) => {
  const tabId = await getTabId();
  chromeScripting(tabId)
};

button.addEventListener("click", clear);
