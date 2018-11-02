import { EnvironmentSchema } from './schema';

/**
 * Environment: prod
 */
const env: EnvironmentSchema = {
  name: 'production',
  enableAnimations: true,
  ratesAPI: {
    acm: 'https://api.actinium.org/v1/acm/rates',
    bch: 'https://bitpay.com/api/rates/bch'
  },
  activateScanner: true
};

export default env;
