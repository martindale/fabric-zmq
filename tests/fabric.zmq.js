'use strict';

// Testing
const assert = require('assert');
const ZMQ = require('../services/zmq');

describe('@fabric/zmq', function () {
  describe('ZMQ', function () {
    it('can create an instance', async function provenance () {
      const zmq = new ZMQ({
        name: 'Test'
      });

      assert.ok(zmq);
    });
  });
});
