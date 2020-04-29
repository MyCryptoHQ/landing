/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import { Root } from './src/Root';

// Include theme fonts.
require('typeface-lato');
require('typeface-roboto-mono');

export const wrapRootElement = Root;
