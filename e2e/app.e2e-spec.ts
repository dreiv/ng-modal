import { NgModalPage } from './app.po';

describe('ng-modal App', () => {
  let page: NgModalPage;

  beforeEach(() => {
    page = new NgModalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
