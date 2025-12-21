module.exports = {
  apps: [{
    name: 'tru-prod',
    script: 'node',
    args: '.next/standalone/server.js',
    cwd: '/home/tru/apps/web',
    env: {
      NODE_ENV: 'production',
      PORT: 3032
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    error_file: '/home/tru/logs/pm2-error.log',
    out_file: '/home/tru/logs/pm2-out.log',
    time: true
  }]
};
