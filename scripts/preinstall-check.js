const fs = require('fs');
['package-lock.json', 'yarn.lock'].forEach((f) => {
  try {
    fs.unlinkSync(f);
  } catch (e) {}
});
const ua = process.env.npm_config_user_agent || '';
if (!/pnpm\//.test(ua)) {
  console.error('Use pnpm instead');
  process.exit(1);
}
