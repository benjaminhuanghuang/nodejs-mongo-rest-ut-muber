const assert = require('assert');
const User = require('../src/user');

describe('Creating User', () => {
  it('saves a user', (done) => {
    const joe = new User({ name: 'Joe' });

    joe.save()
      .then(() => {
        // Has joe been saved successfully?
        assert(!joe.isNew);
        done();
      });
  });
});