+++
date = '2025-12-27T18:37:48+01:00'
draft = false
construction = false
title = 'Pricing'
subtitle = 'Choose the plan that fits your workflow'
author = 'Spike Murphy Müller'
version = ''
version_explanation = ''
updated = ''
finished = false
tested = false
+++

{{< pricing_table_public >}}

{{< pricing_table_stripe >}}

<div id="subscription-message" style="display:none; margin-top:1rem;"></div>

<script>
(() => {
  const params = new URLSearchParams(window.location.search);
  const msg = document.getElementById("subscription-message");

  if (params.get("success")) {
    msg.textContent = "✅ Subscription successful! You now have access.";
    msg.style.display = "block";
  }

  if (params.get("canceled")) {
    msg.textContent = "❌ Subscription canceled. No charges were made.";
    msg.style.display = "block";
  }
})();
</script>
