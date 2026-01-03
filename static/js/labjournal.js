// JS_STREAMLINE
// JS_COMMENTS

document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     ELEMENT REFERENCES
  ================================ */
  const editor = document.getElementById("elj-editor");
  const saveBtn = document.getElementById("elj-save");
  const clearAllBtn = document.getElementById("elj-clear-all");
  const projectInput = document.getElementById("elj-project");
  const entriesDiv = document.getElementById("elj-entries");

  const recipeSelect = document.getElementById("recipe-select");
  const protocolselect = document.getElementById("method-select");

  if (!editor || !recipeSelect || !protocolselect) {
    console.error("Labjournal elements not found in DOM");
    return;
  }

  const STORAGE_KEY = "eljEntries";
  const DRAFT_KEY = "eljDraft";
  const baseURL = (window.eljBaseURL || "").replace(/\/$/, "");

  /* ================================
     TEXT FORMATTING TOOLBAR
  ================================ */
  document.querySelectorAll("#elj-toolbar [data-cmd]").forEach(btn => {
    btn.addEventListener("mousedown", e => {
      e.preventDefault();
      editor.focus();
      document.execCommand(btn.dataset.cmd, false, null);
    });
  });

  /* ================================
     INSERT HTML AT CURSOR
  ================================ */
  function insertHTMLAtCursor(html) {
    const sel = window.getSelection();
    if (!sel.rangeCount) return;

    const range = sel.getRangeAt(0);
    range.deleteContents();

    const temp = document.createElement("div");
    temp.innerHTML = html;

    const frag = document.createDocumentFragment();
    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }

    range.insertNode(frag);
    range.collapse(false);
    editor.focus();
  }

  /* ================================
     PREVENT DUPLICATE INSERTS
  ================================ */
  function alreadyInserted(path) {
    return editor.querySelector(`[data-source="${path}"]`);
  }

  /* ================================
     POPULATE DROPDOWNS FROM HUGO
  ================================ */
  const journalCache = {};

  async function populateSelect(section, select) {
    try {
      if (journalCache[section]) {
        addOptions(journalCache[section], select);
        return;
      }

      const res = await fetch(`${baseURL}/${section}/journal.json`);
      if (!res.ok) throw new Error(res.status);

      const pages = await res.json();
      journalCache[section] = pages;
      addOptions(pages, select);

    } catch (err) {
      console.error(`Failed to load ${section} journal index`, err);
    }
  }

  function addOptions(pages, select) {
    pages.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.path;
      opt.textContent = p.title;
      select.appendChild(opt);
    });
  }

  populateSelect("recipes", recipeSelect);
  populateSelect("protocols", protocolselect);

  /* ================================
     INSERT SELECTED BODY CONTENT
  ================================ */
  async function insertFromSelect(select) {
    const path = select.value;
    if (!path) return;

    if (alreadyInserted(path)) {
      alert("This item is already inserted.");
      select.value = "";
      return;
    }

    try {
      const url = path.replace(/\/$/, "") + "/body.html";

      const html = await fetch(url).then(r => {
        if (!r.ok) throw new Error(r.status);
        return r.text();
      });

      insertHTMLAtCursor(`
        <hr class="elj-insert-sep">
        <div class="elj-inserted" data-source="${path}">
          ${html}
        </div>
      `);

      select.value = "";

    } catch (err) {
      console.error(err);
      alert("Could not load selected content.");
    }
  }

  recipeSelect.addEventListener("change", e => insertFromSelect(e.target));
  protocolselect.addEventListener("change", e => insertFromSelect(e.target));

  /* ================================
     SAVE + LOAD JOURNAL ENTRIES
  ================================ */
  function loadEntries() {
    entriesDiv.innerHTML = "";

    const entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    entries.forEach(entry => {
      const div = document.createElement("div");
      div.className = "elj-entry";
      div.innerHTML = `
        <h3>${entry.date}</h3>
        <h4>${entry.project}</h4>
        <div>${entry.content}</div>
      `;
      entriesDiv.appendChild(div);
    });
  }

  saveBtn.addEventListener("click", () => {
    const content = editor.innerHTML.trim();
    if (!content) return;

    const entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    entries.unshift({
      date: new Date().toLocaleString(),
      project: projectInput.value || "Unassigned",
      content
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));

    editor.innerHTML = "";
    projectInput.value = "";
    localStorage.removeItem(DRAFT_KEY);

    loadEntries();
  });

  /* ================================
     CLEAR ALL ENTRIES
  ================================ */
  if (clearAllBtn) {
    clearAllBtn.addEventListener("click", () => {
      if (!confirm("Delete ALL saved journal entries? This cannot be undone.")) {
        return;
      }

      localStorage.removeItem(STORAGE_KEY);
      entriesDiv.innerHTML = "";
    });
  }

  /* ================================
     AUTOSAVE DRAFT
  ================================ */
  editor.innerHTML = localStorage.getItem(DRAFT_KEY) || "";

  setInterval(() => {
    localStorage.setItem(DRAFT_KEY, editor.innerHTML);
  }, 5000);

  /* ================================
     INIT
  ================================ */
  loadEntries();
  editor.focus();

});
