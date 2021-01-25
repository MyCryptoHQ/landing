import { PAGES } from './fixtures';
import { Selector } from 'testcafe';

fixture(`Privacy`).page(PAGES.PRIVACY);

test('Privacy page should render correctly', async t => {
  const page = await Selector('main');
  await t.expect(page).ok();
});
