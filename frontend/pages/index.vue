<template>
  <v-container class="py-12" fluid>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-8 rounded-xl" elevation="8">
          <div class="d-flex align-center justify-space-between mb-6">
            <div>
              <p class="text-overline mb-1 text-primary">AI MOCK INTERVIEW</p>
              <h1 class="text-h3 font-weight-bold">Practice with confidence</h1>
            </div>
            <v-avatar color="primary" size="56">
              <v-icon icon="mdi-robot" size="32" color="white" />
            </v-avatar>
          </div>

          <p class="text-body-1 mb-6">
            Simulate real interviews, get instant feedback, and improve your communication skills with AI-powered coaching.
          </p>

          <v-row dense>
            <v-col cols="12" sm="6">
              <v-card variant="tonal" class="pa-4 rounded-lg" color="primary">
                <div class="d-flex align-center mb-3">
                  <v-icon icon="mdi-account-check" class="mr-2" />
                  <span class="font-weight-medium">Smart evaluation</span>
                </div>
                <p class="mb-0 text-body-2">Live scoring and actionable feedback based on your answers.</p>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card variant="tonal" class="pa-4 rounded-lg" color="secondary">
                <div class="d-flex align-center mb-3">
                  <v-icon icon="mdi-lightbulb-on" class="mr-2" />
                  <span class="font-weight-medium">Interview prep</span>
                </div>
                <p class="mb-0 text-body-2">Practice technical, behavioral, and leadership questions.</p>
              </v-card>
            </v-col>
          </v-row>

          <v-divider class="my-6" />

          <div class="d-flex flex-column flex-sm-row gap-3">
            <v-btn color="primary" size="large" prepend-icon="mdi-play-circle" block>
              Start Mock Interview
            </v-btn>
            <v-btn variant="outlined" size="large" color="secondary" prepend-icon="mdi-chart-line" block>
              View Dashboard
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
