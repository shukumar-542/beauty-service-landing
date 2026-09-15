module.exports = {
  apps: [
    {
      name: 'landingpage',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};