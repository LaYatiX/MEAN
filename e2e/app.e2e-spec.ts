import { Test2Page } from './app.po';

describe('test2 App', function() {
  let page: Test2Page;

  beforeEach(() => {
    page = new Test2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
