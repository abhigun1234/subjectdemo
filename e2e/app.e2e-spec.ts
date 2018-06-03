import { SubjectdemoPage } from './app.po';

describe('subjectdemo App', function() {
  let page: SubjectdemoPage;

  beforeEach(() => {
    page = new SubjectdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
