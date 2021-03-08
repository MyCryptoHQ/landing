---
slug: '/security'
date: '2021-03-08'
title: 'Security Program'
---

## Intro

MyCrypto is a cryptocurrency interface (commonly referred to as a "wallet") that allows people to interact with their cryptocurrency assets in a user-friendly way. We **do not** take custody of any customer's assets, nor do we collect personally-identifiable information about any of our customers. The user's private keys and passwords are never saved, stored anywhere, or transferred.

Our security policy is centered around ensuring our software allows people to safely and privately interact with their own assets. We want to ensure nothing unexpected happens that could result in a user losing their assets in an unexpected way—whether that is via a third-party or malicious actor or their own actions.

MyCrypto looks forward to working with the security community to find security vulnerabilities in order to keep our businesses and customers safe. We are particularly interested in vulnerabilities found in the application layer, but any vulnerability across our stack that could lead to compromise of user funds is within scope (except as listed in "Out of Scope"). We are always appreciative when you share insights that will make our product safer, even if they aren't specifically in scope.

Toegther we can make the cryptocurrency space safer.

You can submit tickets to us [via OpenBugBounty](https://www.openbugbounty.org//report/) or [via Email](mailto://security@mycrypto.com).

## Vulnerability Response Process

#### Preliminary Statement

1. Please refrain from committing the following acts, as they will not be recognized as an exploit on our platform:

   - Denial of Service attacks to any servers running MyCrypto software, 3rd party software we rely on (such as our Geth and Parity nodes), or APIs we rely on.
   - Social engineering manipulation of MyCrypto staff members or contractors.
   - Attempts to gain physical access to hardware that MyCrypto uses.

2. Other instances running our software (private or public forks, domains that are not listed in **"In Scope"** but are running our software) are not in scope - only the code under the `MyCryptoHQ` namespace on GitHub.com is (with a select few other projects under the MyCrypto banner but a different namespace) - see the **"In Scope"** section for more information.

3. The disclosure process will be run through encrypted email or via OpenBugBounty.

4. Any ticket that we have agreed to grant a reward to will not be rewarded if the vulnerability / exploit is made public before:

   - We have acknowledged receipt of the report
   - You have given us enough time from responsible disclosure (90 days) to patch.

5. A researcher will open one vulnerability per report with enough details for us to start an investigation.

## Avenues to Contact

- https://www.openbugbounty.org/report/
- Email: security@mycrypto.com - PGP fingerprint: [3005 29EC 5558 495B 6298 F347 389C 5789 B2A4 1011](https://keybase.io/mycrypto/pgp_keys.asc?fingerprint=300529ec5558495b6298f347389c5789b2a41011)

## Response Team

- Harry Denley ([@409h](https://keybase.io/409h))
- Michael Hahn ([@blurpesec](https://keybase.io/blurpesec))
- Taylor Monahan ([@tayvano](https://keybase.io/tayvano))
- Mia Alexander ([@miagx](https://keybase.io/miagx))

## SLA

MyCrypto will make a best effort to meet the following SLAs for hackers participating in our program:

- Time to first response (from report submit) - 3 business days
- Time to triage (from report submit) - 9 business days

We will try to keep you informed about our progress throughout the process.

## Incident Response

1. A ticket is opened with details about the vulnerability (outlining the impacts) and enough information to replicate it.

   - If there is not enough information to replicate the issue, we will ask for more
   - We will contact you if your issue:
     - Has already been noticed internally and is included in a scheduled release (a public acknowledgment will still be made to reporters who have opened a ticket about it before release)
     - Is either out-of-scope or a non-issue - the process will halt here until the issue becomes in-scope/a valid vulnerability.

2. We will verify and internally escalate the issue with the appropriate team (dev, infra, ...)

3. We will discuss internally and establish the severity of the vulnerability - any dispute about the classification of the vulnerability can be discussed but the MyCrypto team will ultimately define it.

   - **HIGH** Example: User funds are at risk of being taken maliciously or user secrets are at risk of being exposed - anything that directly affects user funds/secrets with ease.
   - **MEDIUM** Example: Exploits in the software that give the user bad data, which could lead users to take actions that expose themselves to risk.
   - **LOW** Example: Issues that are low impact to users or are extremely hard to do (e.g., needing very specific hardware)

4) We will respond to you within three days, acknowledging that we have verified the issue, escalated it internally as appropriate, and classified it.

5) We will develop a patch and communicate with the researcher to validate.

   - The vulnerability is still to be treated as private
   - The researcher is given a private branch to verify the patch (if code related - this could be a staging URL for the patch) or asked to verify externally (if infrastructure related)

6) A vulnerability announcement is drafted (using an internal template that includes the severity, details of the patch, and acknowledgment to the researcher(s))

   - A release date is internally discussed and set

7) At release date, we coordinate with the developers (if code-related vulnerability) to include the vulnerability announcement in the release notes (published on our repository at GitHub)

## Post-Release Disclosure Process

1. The team has 90 days to go through the life cycle of a valid vulnerability report and issue a patch to production.

2. The published vulnerability announcement will acknowledge the reporter(s)

   - The reporter will be named by default, but can be kept anonymous upon request
   - The published announcement will detail:
     - The project affected (repository name / infrastructure descriptor)
     - The versions of software known to be affected
     - The versions of software known not to be affected (e.g., exploit was unintentionally introduced in v1.5 - anything prior to this version is unaffected)
     - The versions of software that were not checked (e.g., versions that are now considered EOL by the MyCrypto team)
     - Any mitigating factors (e.g., the vulnerability is only present in non-default configurations on a specific environment)

3. If we have decided to reward a user, we will notify them and the reward will be processed via email.

## Reward Distribution

MyCrypto currently has no set standards for rewards at this time. We do have a budget, an amazing amount of swag, and our gratitude to offer. Rewards, when applicable, will be considered on a case-by-case basis and are at the sole discretion of MyCrypto. If your report has been considered for a reward, this will be communicated to you via email.

As we have security researchers on our team, we are very conscious of rewarding those who take the time and effort to protect us and our users.

## In scope

### Executables

#### MyCrypto Desktop

Latest executables can be found [https://github.com/MyCryptoHQ/MyCrypto/releases/latest](https://github.com/MyCryptoHQ/MyCrypto/releases/latest).

Previous versions can be found listed https://github.com/MyCryptoHQ/MyCrypto/releases/ - or you can [build yourself](https://github.com/MyCryptoHQ/MyCrypto/tree/legacy#running-the-app)

_Note: The Desktop application is running on the `legacy` branch_

### Domains

#### mycrypto.com

This is our landing product page - it exists to promote/onboard users to our application (that sits on the `app` subdomain). It holds no functionality other than reading materials.

https://github.com/MyCryptoHQ/landing

#### app.mycrypto.com

MyCrypto is a cryptocurrency interface that allows people to interact with their cryptocurrency assets in a way that is more user-friendly than other solutions. We do not hold custody of any customer's assets nor do we collect personally-identifiable information about any of our customers, so our security policy is centered on how well our software allows people to safely and privately interact with their own assets.

The web interface allows for only third-party signers to interact, meaning the app does not take custody of any signing keys.

https://github.com/MyCryptoHQ/MyCrypto/tree/master

#### support.mycrypto.com

This is our knowledge base and contact form for handling support tickets. It is our source of truth that we direct users to learn about our products.

https://github.com/MyCryptoHQ/support.mycrypto.com

#### download.mycrypto.com

This is a simple GUI product page to detail our desktop app. For vulnerabilities for the desktop app, see the "Executable" type named "MyCrypto Desktop".

https://github.com/MyCryptoHQ/download.mycrypto.com

#### buy.mycrypto.com

This is an interface to use the Moonpay widget. Private data is handled by them.

https://github.com/MyCryptoHQ/buy.mycrypto.com

#### etherscamdb.info (decommissioned)

This is a directory of known cryptocurrency related scams.

https://github.com/MrLuit/EtherScamDB

#### cryptoscamdb.org

This is a directory of known cryptocurrency related scams.

https://github.com/CryptoScamDB/frontend-gatsby

#### ambo.io

Ambo.io is a product page for Ambo mobile application.

#### ambo.herokuapp.com

This is the network proxy between third-party APIs and the Ambo app.

### Applications

#### iOS: App Store 1460081235

This is the Ambo application - a mobile Ethereum wallet.

https://itunes.apple.com/us/app/ambo/id1460081235
