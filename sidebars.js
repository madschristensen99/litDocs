/**
 * Creating a sidebar enables you to:
 create an ordered group of docs
 render a sidebar for each doc of that group
 provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  // learningLab: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'learningLab',
  //   },
  // ],

  // ecosystem: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'Ecosystem',
  //   },
  // ],

  learn: [
    {
      type: 'category',
      label: 'Overview',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'learn/overview/intro',
      },
      items: [
        'learn/overview/what-is-lit',
        {
          type: 'category',
          label: 'How Lit Protocol Works',
          collapsible: false,
          link: {
            type: 'doc',
            id: 'learn/overview/how-it-works/overview',
          },
          items: [
            {
              type: 'category',
              label: 'Lit Networks',
              collapsed: true,
              items: [
                'learn/overview/how-it-works/lit-networks/mainnets',
                'learn/overview/how-it-works/lit-networks/testnets',
                'learn/overview/how-it-works/lit-networks/migrating-to-datil',
              ],
            },
            {
              type: 'category',
              label: 'Lit Blockchains',
              collapsed: true,
              items: [
                'learn/overview/how-it-works/lit-blockchains/chronicle-yellowstone',
                'learn/overview/how-it-works/lit-blockchains/chronicle',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'The Lit SDK',
          collapsible: false,
          link: {
            type: 'doc',
            id: 'learn/overview/lit-sdk/overview',
          },
          items: [
            {
              type: 'category',
              label: 'Migrating Versions',
              collapsed: true,
              items: ['learn/overview/lit-sdk/migrating-versions/v5-to-v6'],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Authentication',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'learn/authentication/overview',
      },
      items: [
        'learn/authentication/auth-sigs',
        'learn/authentication/session-sigs',
        'learn/authentication/lit-resources-and-abilities',
      ],
    },
    {
      type: 'category',
      label: 'Paying for Usage',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'learn/paying-for-lit/overview',
      },
      items: [
        'learn/paying-for-lit/capacity-credits',
        'learn/paying-for-lit/payment-delegation-db',
        'learn/paying-for-lit/lit-relayer',
      ],
    },
    {
      type: 'category',
      label: 'Signing Data',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'learn/signing-data/overview',
      },
      items: [
        'learn/signing-data/pkps',
        'learn/signing-data/wrapped-keys',
        'learn/signing-data/pkps-vs-wrapped-keys',
        'learn/signing-data/claimable-keys',
      ],
    },
    {
      type: 'category',
      label: 'Encryption & Access Control',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'learn/encryption-access-control/overview',
      },
      items: [
        'learn/encryption-access-control/encrypting-data-with-lit',
        'learn/encryption-access-control/boolean-logic',
        'learn/encryption-access-control/lit-action',
        'learn/encryption-access-control/unified-access-control-conditions',
        {
          type: 'category',
          label: 'EVM Based Conditions',
          collapsed: true,
          items: [
            'learn/encryption-access-control/evm/chain-conditions',
            'learn/encryption-access-control/evm/token-conditions',
            'learn/encryption-access-control/evm/contract-conditions',
            'learn/encryption-access-control/evm/siwe',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Decentralized Compute (Lit Actions)',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'learn/lit-actions/overview',
      },
      items: [
        'learn/lit-actions/deploying',
        'learn/lit-actions/using-dependencies',
      ],
    },
  ],
  build: [
    {
      type: 'category',
      label: 'Overview',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'build/overview/intro',
      },
      items: [
        {
          type: 'category',
          label: 'SDK Reference Docs',
          collapsed: true,
          items: [
            {
              type: 'link',
              label: 'Lit SDK Docs',
              href: 'https://v6-api-doc-lit-js-sdk.vercel.app/',
            },
            {
              type: 'link',
              label: 'Lit Action Docs',
              href: 'https://actions-docs.litprotocol.com/#welcome',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'build/getting-started/overview',
      },
      items: [
        'build/getting-started/installing-sdk',
        'build/getting-started/connecting-to-lit',
        'build/getting-started/authenticating-a-session',
        {
          type: 'category',
          label: 'Capacity Credits',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'build/getting-started/capacity-credits',
          },
          items: [
            {
              type: 'category',
              label: 'Minting a Credit',
              collapsed: true,
              items: [
                'build/getting-started/capacity-credits/minting/via-lit-explorer',
                'build/getting-started/capacity-credits/minting/via-lit-contracts-sdk',
              ],
            },
            {
              type: 'category',
              label: 'Delegating a Credit',
              collapsed: true,
              items: [
                'build/getting-started/capacity-credits/delegating/delegate-a-credit',
                'build/getting-started/capacity-credits/delegating/use-delegated-credit',
              ],
            },
          ],
        },
        'build/getting-started/making-first-decryption',
        'build/getting-started/making-first-signing',
        {
          type: 'category',
          label: 'Payment Delegation DB',
          collapsed: true,
          // link: {
          //   type: 'doc',
          //   id: 'build/payment-delegation-db/overview',
          // },
          items: [
            'build/payment-delegation-db/register-payer-wallet',
            'build/payment-delegation-db/adding-payees',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Session Signatures',
      collapsed: true,
      // link: {
      //   type: 'doc',
      //   id: 'build/session-sigs/overview',
      // },
      items: [
        {
          type: 'category',
          label: 'Generating a Session',
          collapsed: true,
          items: [
            'build/session-sigs/generating-a-session/using-auth-sig',
            {
              type: 'category',
              label: 'Using a PKP',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'build/session-sigs/generating-a-session/using-pkp/overview',
              },
              items: [
                'build/session-sigs/generating-a-session/using-pkp/auth-with-eth-wallet',
                'build/session-sigs/generating-a-session/using-pkp/auth-with-google-oauth',
                'build/session-sigs/generating-a-session/using-pkp/auth-with-discord-oauth',
                'build/session-sigs/generating-a-session/using-pkp/auth-with-google-jwt',
                'build/session-sigs/generating-a-session/using-pkp/auth-with-custom-auth-method',
              ],
            },
            // 'build/session-sigs/generating-a-session/using-lit-action',
            // 'build/session-sigs/generating-a-session/with-delegated-capacity',
          ],
        },
        'build/session-sigs/making-a-request',
        'build/session-sigs/restricting-a-session',
      ],
    },
    {
      type: 'category',
      label: 'Programmable Key Pairs (PKPs)',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'build/pkps/overview',
      },
      items: [
        {
          type: 'category',
          label: 'Mint via',
          collapsed: true,
          items: [
            'build/pkps/minting/lit-contracts-sdk',
            'build/pkps/minting/lit-explorer',
            'build/pkps/minting/email-sms-otp',
            'build/pkps/minting/google-oauth',
            'build/pkps/minting/discord-oauth',
            'build/pkps/minting/stytch',
            'build/pkps/minting/web-authn',
            'build/pkps/minting/custom-auth-method',
            'build/pkps/minting/with-multiple-auth-methods',
          ],
        },
        {
          type: 'category',
          label: 'Connect to a dApp via',
          collapsed: true,
          items: [
            'build/pkps/connecting-to-dapp/pkp-ethers-wallet',
            'build/pkps/connecting-to-dapp/wallet-connect',
          ],
        },
        {
          type: 'category',
          label: 'Manage Permitted Auth Methods',
          collapsed: true,
          items: [
            'build/pkps/manage-auth-methods/add-auth-method',
            'build/pkps/manage-auth-methods/add-custom-auth-method',
            'build/pkps/manage-auth-methods/remove-auth-method',
          ],
        },
        {
          type: 'category',
          label: 'Deterministically Derive Keys (Claimable Keys) Using',
          items: [
            'build/pkps/derive-keys/lit-action',
            'build/pkps/derive-keys/discord-oauth',
            'build/pkps/derive-keys/google-oauth',
            'build/pkps/derive-keys/stytch',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Wrapped Keys',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'build/wrapped-keys/overview',
      },
      items: [
        'build/wrapped-keys/generate',
        'build/wrapped-keys/import',
        'build/wrapped-keys/export',
        'build/wrapped-keys/get-metadata',
        'build/wrapped-keys/store-metadata',
        'build/wrapped-keys/list-keys-for-pkp',
        'build/wrapped-keys/sign-msg',
        'build/wrapped-keys/sign-tx',
        'build/wrapped-keys/custom-wrapped-key',
      ],
    },
    {
      type: 'category',
      label: 'Encryption',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'build/encryption/overview',
      },
      items: [
        'build/encryption/encrypt-string',
        'build/encryption/zip-encrypt-string',
        'build/encryption/encrypt-file',
        'build/encryption/zip-encrypt-file',
        'build/encryption/zip-encrypt-files',
        'build/encryption/encrypt-to-json',
      ],
    },
    {
      type: 'category',
      label: 'Access Control',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'build/access-control/overview',
      },
      items: [
        'build/access-control/jwt-auth',
        {
          type: 'category',
          label: 'Combine Control Conditions',
          items: [
            'build/access-control/combining/unified-accs',
            'build/access-control/combining/boolean-logic',
          ],
        },
        {
          type: 'category',
          label: 'EVM Based Control Conditions',
          items: [
            'build/access-control/evm/custom-contract-calls',
            {
              type: 'category',
              label: 'ERC-1155',
              items: [
                'build/access-control/evm/erc1155/possess-token-with-id',
                'build/access-control/evm/erc1155/possess-token-with-ids',
              ],
            },
            {
              type: 'category',
              label: 'ERC-721',
              items: [
                'build/access-control/evm/erc721/possess-token-with-id',
                'build/access-control/evm/erc721/possess-token-in-collection',
              ],
            },
            {
              type: 'category',
              label: 'Sign in with Ethereum (SIWE)',
              items: [
                'build/access-control/evm/siwe/specific-domain',
                'build/access-control/evm/siwe/specific-resources',
              ],
            },
            {
              type: 'category',
              label: 'POAP',
              items: [
                'build/access-control/evm/poap/possess-poap-specific-name',
                'build/access-control/evm/poap/possess-poap-specific-event-id',
              ],
            },
            'build/access-control/evm/erc20-possess-token',
            'build/access-control/evm/possess-eth',
            'build/access-control/evm/specific-address',
            'build/access-control/evm/time-based',
            'build/access-control/evm/dao-member',
            'build/access-control/evm/proof-of-humanity',
          ],
        },
        {
          type: 'category',
          label: 'Solana Based Control Conditions',
          items: [
            'build/access-control/solana/possess-sol',
            'build/access-control/solana/specific-address',
            'build/access-control/solana/possess-token',
            'build/access-control/solana/specific-token-account-balance',
            'build/access-control/solana/program-derived-address',
          ],
        },
        'build/access-control/lit-action',
      ],
    },
    {
      type: 'category',
      label: 'Lit Actions (Decentralized Compute)',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'build/lit-actions/overview',
      },
      items: [
        'build/lit-actions/conditional-signing',
        'build/lit-actions/http-requests',
        'build/lit-actions/decryption',
        'build/lit-actions/sign-msg',
        'build/lit-actions/sign-eth-tx',
        'build/lit-actions/eip-191-signing',
        'build/lit-actions/run-on-single-node',
        'build/lit-actions/get-rpc-urls',
        'build/lit-actions/broadcast-and-collect',
      ],
    },
  ],
};

module.exports = sidebars;
