---
title: "Registration successful"
---

<div class="callback-container">
  <h1>✅ Registration successful</h1>
  <p>Your email has been confirmed.</p>
  <p>You will be redirected to the homepage in <strong id="countdown">5</strong> seconds.</p>

  <p class="callback-note">
    If the redirect does not happen automatically,
    <a href="/BiochemProtocols/">click here</a>.
  </p>
</div>

<script>
  (async () => {
    // Session initialisieren
    const { data } = await supabaseClient.auth.getSession();

    if (data?.session) {
      // URL von Tokens bereinigen
      window.history.replaceState({}, document.title, "/BiochemProtocols/");
    }

    // Countdown + Redirect
    let seconds = 5;
    const el = document.getElementById("countdown");

    const timer = setInterval(() => {
      seconds--;
      if (el) el.textContent = seconds;

      if (seconds <= 0) {
        clearInterval(timer);
        window.location.href = "/BiochemProtocols/";
      }
    }, 1000);
  })();
</script>

<style>
.callback-container {
  max-width: 600px;
  margin: 4rem auto;
  padding: 2rem;
  text-align: center;
}

.callback-container h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.callback-container p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.callback-note {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>