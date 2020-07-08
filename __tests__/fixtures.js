const ENV = {
  // Defined in github/workflow to run against mycryptobuilds
  E2E_BASE_URL: process.env.E2E_BASE_URL || 'https://localhost:8000',
};

const ENV_KEYS = Object.keys(ENV);
if (ENV_KEYS.some(k => !ENV[k])) {
  const envKeysUnset = ENV_KEYS.filter(k => !ENV[k]);
  throw Error(
    `Required ENV variables to be set: '${envKeysUnset.join("','")}'`
  );
}

const FIXTURES_CONST = {
  TIMEOUT: 5000,
  BASE_URL: ENV.E2E_BASE_URL,
};

const PAGES = {
  HOME: `${FIXTURES_CONST.BASE_URL}/`,
};

export { ENV, FIXTURES_CONST, PAGES };
