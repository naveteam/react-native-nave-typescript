const { device, expect, element, by, waitFor } = require('detox');

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should show hello screen after tap', async () => {
    await element(by.text('Uillia todo poderoso')).tap();
    await expect(element(by.text('texto do uillia')));
  });
});

