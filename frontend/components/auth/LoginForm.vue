<script setup lang="ts">
const email = ref('')
const password = ref('')
const rememberMe = ref(true)
const showPassword = ref(false)

const socialProviders = [
  { label: 'Continue with GitHub', icon: 'mdi-github', accent: 'primary', highlight: 'FAST PASS' },
  { label: 'Google', icon: 'mdi-google', accent: 'secondary' },
  { label: 'LinkedIn', icon: 'mdi-linkedin', accent: 'secondary' }
] as const

const handleSubmit = () => {
  console.log('Login form submitted', {
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value
  })
}
</script>

<template>
  <div class="login-form">
    <div class="login-form__social-grid">
      <SocialAuthButton
        v-for="provider in socialProviders"
        :key="provider.label"
        :label="provider.label"
        :icon="provider.icon"
        :accent="provider.accent"
        :highlight="provider.highlight"
      />
    </div>

    <div class="login-form__divider">
      <span>or continue with email</span>
    </div>

    <form class="login-form__fields" @submit.prevent="handleSubmit">
      <div class="field-group">
        <label for="candidate-email">Work or Personal Email</label>
        <div class="input-shell">
          <v-icon icon="mdi-email-outline" class="input-shell__icon" />
          <input
            id="candidate-email"
            v-model="email"
            type="email"
            placeholder="alex@company.com or candidate@gmail.com"
            required
          />
        </div>
      </div>

      <div class="field-group">
        <div class="field-group__header">
          <label for="candidate-password">Password</label>
          <a href="#">Forgot password?</a>
        </div>

        <div class="input-shell">
          <v-icon icon="mdi-lock-outline" class="input-shell__icon" />
          <input
            id="candidate-password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="••••••••••••"
            required
          />
          <button
            type="button"
            class="password-toggle"
            :aria-label="showPassword ? 'Hide password' : 'Show password'"
            @click="showPassword = !showPassword"
          >
            <v-icon :icon="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'" />
          </button>
        </div>
      </div>

      <div class="login-form__meta">
        <label class="remember-me" for="remember-me">
          <input id="remember-me" v-model="rememberMe" type="checkbox" />
          <span>Remember workstation</span>
        </label>

        <button type="button" class="magic-link">Magic Link</button>
      </div>

      <v-btn block class="auth-submit" color="primary" size="large" type="submit">
        Sign In to ProMock
        <v-icon icon="mdi-arrow-right" class="ml-2" />
      </v-btn>
    </form>

    <p class="login-form__signup">
      New to ProMock?
      <a href="#">Create an account</a>
      <span>(Get 3 Free AI Mocks)</span>
    </p>
  </div>
</template>
