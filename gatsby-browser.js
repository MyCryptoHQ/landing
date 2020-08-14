/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Include theme fonts.
import 'typeface-lato';
import 'typeface-roboto-mono';

import { getRootDomain } from '@utils';

/**
 * We use an iframe to migrate user storage from landing to app ie. <MigrateLS/>.
 * 1. Since an origin is defined as `<protocol>://<host>:<port>` and the websites have different sub-domains,
 *    we need a cross-origin iframe.
 *    https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
 * 2. By setting `document.domain` in both app and landing, the browser will consider them as having the same-origin.
 *    https://javascript.info/cross-window-communication#windows-on-subdomains-document-domain
 * 3. Even if the value is identical to `location.hostname` we need to explicitly set it
 *    in order to set the port part of origin to null.
 *     https://developer.mozilla.org/en-US/docs/Web/API/Document/domain)
 * 4. Since we need run 3 environments we dynamically set the domain to the appropriate hostname.
 */

document.domain = getRootDomain(document.location.hostname);
