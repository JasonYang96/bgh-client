import { AppPage } from './app.po';

describe('social-deduction-facilitator App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
  });
});
