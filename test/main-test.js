require = require('esm')(module /*, options*/);

const assert = require('assert');
const main = require('../src/main');

describe('Validate project names', function () {
  it('should return true if provided a valid project name', async function () {
    return main.validateProjectName('@anjulalk/hello-world').then(result => {
      assert.equal(result, true)
    });
  });

  it('should throw error if provided an invalid project name', async function () {
    return main.validateProjectName('hello\\world').then(result => {
      throw new Error('was not supposed to succeed');
    }).catch(err => {
      return assert(err, 'name can only contain URL-friendly characters');
    }
    )
  });

});
