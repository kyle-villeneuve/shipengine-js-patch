/* validate_address.ts */
/* initialize */
import { default as ShipEngine } from '../../src';

const shipengine = ShipEngine(process.env.API_KEY);

/* wrapper start */
(async () => {
  /* validate address args */
  const isValid = await shipengine.validateAddress({
    street: '1 E 161 St',
    cityLocality: 'The Bronx',
    postalCode: '10451',
    stateProvince: 'NY',
    country: 'US',
  });

  console.log(isValid ? 'valid!' : 'invalid!');

  /* wrapper end */
})();
