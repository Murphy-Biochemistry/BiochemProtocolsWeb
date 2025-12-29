async function waitForAuth() {
  while (!window.auth?.initialized) {
    await new Promise(r => setTimeout(r, 10));
  }
}

function updatePricingVisibility() {
  const loggedIn = !!window.auth.user;

  document.querySelectorAll('.pricing-logged-in')
    .forEach(el => el.style.display = loggedIn ? 'block' : 'none');

  document.querySelectorAll('.pricing-logged-out')
    .forEach(el => el.style.display = loggedIn ? 'none' : 'block');
}

document.addEventListener('DOMContentLoaded', async () => {
  await waitForAuth();
  updatePricingVisibility();
});

supabaseClient.auth.onAuthStateChange(async () => {
  await waitForAuth();
  updatePricingVisibility();
});
