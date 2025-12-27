// JS_STREAMLINE
// JS_COMMENTS

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".local-comment").forEach(box => {
    const id = box.dataset.commentId;
    const textarea = box.querySelector("textarea");
    const saveBtn = box.querySelector(".save");
    const deleteBtn = box.querySelector(".delete");
    const lockBtn = box.querySelector(".lock");
    const status = box.querySelector(".status");

    const KEY = `comment:${id}`;
    const EXP = `comment-exp:${id}`;
    const LOCK = `comment-lock:${id}`;
    const TTL = 24 * 60 * 60 * 1000;

    function setLockUI(locked) {
      lockBtn.textContent = locked ? "🔐" : "🔓";
      lockBtn.title = locked
        ? "Locked (saved indefinitely)"
        : "Unlocked (expires in 24h)";
    }

    function load() {
      const locked = localStorage.getItem(LOCK) === "true";
      setLockUI(locked);

      const saved = localStorage.getItem(KEY);
      if (!saved) return;

      if (!locked) {
        const exp = localStorage.getItem(EXP);
        if (!exp || Date.now() > exp) {
          localStorage.removeItem(KEY);
          localStorage.removeItem(EXP);
          return;
        }
      }

      textarea.value = saved;
      deleteBtn.style.display = "inline-block";
      status.textContent = locked
        ? "Saved locally indefinitely."
        : "Saved locally for 24 hours.";
    }

    saveBtn.addEventListener("click", () => {
      const locked = localStorage.getItem(LOCK) === "true";

      localStorage.setItem(KEY, textarea.value);

      if (locked) {
        localStorage.removeItem(EXP);
        status.textContent = "Comment saved indefinetely.";
      } else {
        localStorage.setItem(EXP, Date.now() + TTL);
        status.textContent = "Comment saved for 24h.";
      }

      deleteBtn.style.display = "inline-block";
    });

    lockBtn.addEventListener("click", () => {
      const locked = localStorage.getItem(LOCK) === "true";
      const newState = !locked;

      localStorage.setItem(LOCK, newState);
      setLockUI(newState);

      if (newState) {
        localStorage.removeItem(EXP);
        status.textContent = "Locked (saves indefinitely).";
      } else {
        localStorage.setItem(EXP, Date.now() + TTL);
        status.textContent = "Unlocked (saves for 24h).";
      }
    });

    deleteBtn.addEventListener("click", () => {
      localStorage.removeItem(KEY);
      localStorage.removeItem(EXP);
      localStorage.removeItem(LOCK);
      textarea.value = "";
      deleteBtn.style.display = "none";
      setLockUI(false);
      status.textContent = "Comment deleted.";
    });

    load();
  });
});
