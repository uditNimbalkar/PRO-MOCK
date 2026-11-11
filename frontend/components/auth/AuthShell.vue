<template>
  <div class="auth-page">
    <header class="auth-header">
      <div class="brand-block">
        <div class="brand-mark">
          <v-icon icon="mdi-terminal" size="18" />
        </div>
        <span class="brand-name">ProMock</span>
        <span class="brand-role">Candidate</span>
      </div>

      <nav class="auth-nav" aria-label="Main navigation">
        <a href="#">Candidate Guide</a>
        <a href="#">System Diagnostics</a>
        <a href="#">Help Center</a>
      </nav>

      <div class="user-pill">
        <v-icon icon="mdi-account" size="18" />
      </div>
    </header>

    <main class="auth-main">
      <div class="ambient-glow ambient-glow--left" />
      <div class="ambient-glow ambient-glow--right" />

      <div class="auth-card-shell">
        <div class="auth-badge">
          <span class="auth-badge__dot" />
          AUTH GATEWAY · V4.12
        </div>

        <v-card class="auth-card" elevation="0">
          <div class="auth-card__header">
            <div class="auth-icon">
              <v-icon icon="mdi-terminal" size="28" />
            </div>

            <h1>Welcome back, Engineer</h1>
            <p>
              Sign in to resume your mock interview preparation and track system design readiness.
            </p>
          </div>

          <LoginForm />
        </v-card>
      </div>
    </main>

    <footer class="auth-footer">
      <div class="auth-footer__left">
        <span class="auth-footer__status" />
        <span>ProMock Secure Sandbox v4.12.0</span>
      </div>

      <div class="auth-footer__right">
        <a href="#">Assessment Integrity &amp; Privacy</a>
        <span>•</span>
        <span>Encrypted Session</span>
      </div>
    </footer>
  </div>
</template>
