document.addEventListener('DOMContentLoaded', async () => {
  // wait for auth
  while (!window.auth?.initialized) {
    await new Promise(r => setTimeout(r, 10));
  }

  // ONLY guard pages that define required_plan
  const requiredAttr = document.body.dataset.requiredPlan;
  if (!requiredAttr) return;

  // NOW require login
  if (!window.auth.user) {
    window.location.replace(
      '/BiochemProtocolsWeb/user/registration/pricing/?login=1'
    );
    return;
  }

  // wait for subscription
  await window.subscriptionReady;

  const allowedPlans = requiredAttr.split(',').map(p => p.trim());
  const allowedStatuses = ['active', 'trialing'];

  if (
    !window.subscription.loaded ||
    !allowedStatuses.includes(window.subscription.status) ||
    !allowedPlans.includes(window.subscription.plan)
  ) {
    window.location.replace('/BiochemProtocolsWeb/user/registration/pricing/');
  }
});
