import { NgxSemanticPage } from './app.po';

describe('ngx-semantic App', () => {
  let page: NgxSemanticPage;

  beforeEach(() => {
    page = new NgxSemanticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('demo works!');
  });
});
