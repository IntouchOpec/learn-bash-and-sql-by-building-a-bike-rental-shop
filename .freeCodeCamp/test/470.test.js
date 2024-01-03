const assert = require('assert');
const { getFileContents} = require('./utils');

describe('Your script', () => {
  it('should echo the suggested output', async () => {
    const scriptFile = await getFileContents('../bike-shop.sh');
    
    assert(true);
  });
});
