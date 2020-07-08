import { PAGES } from './fixtures';
import { Selector } from 'testcafe';

fixture(`Home`).page(PAGES.HOME);

test('Homepage should render correctly', async t => {
  const page = await Selector('main');

  await t.expect(page).ok();
});
