window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

const button = document.createElement("button");
button.setAttribute("name", "test button");
button.innerText = "Test Button";
document.body.appendChild(button);

// const getTabId = () => {
//   console.log('window:', window);
//   return window.tabId;
// };


async function getTabId () {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  console.log('tab:', tab);
  return tab;
}

const invokedFunc = () => {
    console.log('chrome: ', chrome)
    chrome.scripting.executeScript({
      target: { tabId: getTabId() },
      files: ["script.js"],
    })
    .then(() => console.log('script injected'));
};

button.addEventListener(
  "click", invokedFunc
);
