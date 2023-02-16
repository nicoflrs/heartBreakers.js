window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

const clearButton = document.createElement("button");
clearButton.setAttribute("name", "Clear");
clearButton.innerText = "Clear";
clearButton.className='clearButton'
document.body.appendChild(clearButton);

const off = document.createElement("button");
off.setAttribute("name", "off");
off.innerText = "Off";
document.body.appendChild(off);

const getTabId = async () => {
  let queryOptions = { active: true, currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs[0].id;
};

const chromeScripting = (id, file) =>
  chrome.scripting
    .executeScript({
      target: { tabId: id },
      files: [file],
    })

const clear = async (e) => {
  const tabId = await getTabId();
  await chromeScripting(tabId, "clear.js");
  if (e.target.name === 'off') {
    var id = chrome.runtime.id;
    chrome.management.get(id, async function (ex) {
      if (ex.enabled) {
        await chrome.management.setEnabled(id, false);
      };
    });
  }
};

clearButton.addEventListener("click", clear);
off.addEventListener("click", clear);
