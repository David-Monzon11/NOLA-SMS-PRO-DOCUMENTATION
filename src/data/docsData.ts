export interface DocFAQ {
  q: string;
  a: string;
}

export interface RelatedPage {
  id: string;
  title: string;
}

export interface ScreenshotPlan {
  filename: string;
  alt: string;
  caption: string;
}

export interface DocPageUseCase {
  scenario: string;
  benefit: string;
}

export interface DocPage {
  id: string;
  title: string;
  description: string;
  section: 'OVERVIEW' | 'SETUP' | 'MESSAGING' | 'ACCOUNT' | 'SUPPORT';
  subsection?: string;
  readingTime: string;
  purpose: string; // 1. What is this?
  whyItMatters: string; // 2. Why is it important?
  prerequisites?: string[]; // 3. What do I need before I begin?
  steps?: string[]; // 4. How do I use it?
  expectAfter?: string; // 5. What should I expect afterwards?
  
  // Custom interactive/visual widgets triggers
  hasIntegrationFlow?: boolean;
  hasModuleEcosystem?: boolean;
  hasProblemsSolved?: boolean;
  hasTargetPersonas?: boolean;
  hasFirstSMSChecklist?: boolean;
  hasTicketForm?: boolean;

  // 6. Common questions / tips
  tips?: string[];
  notes?: string[];
  warnings?: string[];
  commonIssues?: string[];
  faqs?: DocFAQ[];

  // 7. Where should I go next?
  nextPageCTA?: { title: string; desc: string; id: string };

  screenshots?: ScreenshotPlan[];
  relatedPages?: RelatedPage[];
  capabilities?: string[];
  useCases?: DocPageUseCase[];
}

export const defaultSmsReminder =
  'After installation, NOLA SMS Pro transmits messages using the default sender mask NOLASMSPro until an approved custom Sender ID is active. Sending requires available SMS credits. A standard local SMS is limited to 160 characters per credit segment, with longer or special-character messages drawing multiple credits. Verify status logs in Message History after dispatch.';

export const sidebarStructure = [
  {
    title: 'OVERVIEW',
    items: [
      { id: 'welcome', title: 'Welcome' },
      { id: 'what-is-nola-sms-pro', title: 'What is NOLA SMS Pro?' },
      { id: 'how-nola-sms-pro-works', title: 'How NOLA SMS Pro Works' },
      { id: 'core-features', title: 'Core Features' }
    ]
  },
  {
    title: 'SETUP',
    items: [
      { id: 'install-nola-sms-pro', title: 'Install NOLA SMS Pro' },
      { id: 'create-or-sign-in', title: 'Create or Sign In' },
      { id: 'connect-highlevel', title: 'Connected Highlevel' },
      { id: 'dashboard-overview', title: 'Dashboard Overview' },
      { id: 'send-your-first-sms', title: 'Send Your First SMS' }
    ]
  },
  {
    title: 'MESSAGING',
    items: [
      { id: 'contacts', title: 'Contacts' },
      { id: 'compose-sms', title: 'Compose SMS' },
      { id: 'message-templates', title: 'Message Templates' },
      { id: 'sender-ids', title: 'Sender IDs' },
      { id: 'message-history', title: 'Message History' }
    ]
  },
  {
    title: 'ACCOUNT',
    items: [
      { id: 'sms-credits', title: 'SMS Credits' },
      { id: 'settings', title: 'Settings' }
    ]
  },
  {
    title: 'SUPPORT',
    items: [
      { id: 'troubleshooting', title: 'Troubleshooting' },
      { id: 'support-help', title: 'Support & Help' },
      { id: 'faq', title: 'Frequently Asked Questions' }
    ]
  }
];

export const docsData: DocPage[] = [
  {
    id: 'welcome',
    title: 'Welcome to NOLA SMS Pro',
    description: 'An embedded SMS communication platform operating natively within your HighLevel sub-account.',
    section: 'OVERVIEW',
    readingTime: '2 min read',
    purpose: 'NOLA SMS Pro is a native communication portal built directly inside your HighLevel workspace. This user guide acts as a guided setup journey, designed to take you from installation to sending your first customer text message.',
    whyItMatters: 'Reaching customer mobiles directly from your CRM keeps conversation logs aligned, ensures faster support replies, and secures customer databases by eliminating manual list exports.',
    prerequisites: [
      'An active HighLevel sub-account.',
      'Administrator level permissions to authorize applications in the HighLevel Marketplace.'
    ],
    steps: [
      'Locate NOLA SMS Pro in the HighLevel Marketplace.',
      'Connect it to your specific sub-account location.',
      'Register your admin owner profile for billing and settings configuration.',
      'Verify credit levels and start sending branded SMS directly next to client CRM profiles.'
    ],
    expectAfter: 'You will have a unified SMS dashboard fully integrated inside your HighLevel sub-account, ready to configure compliance masks and message customer bases in the Philippines.',
    relatedPages: [
      { id: 'what-is-nola-sms-pro', title: 'What is NOLA SMS Pro?' },
      { id: 'install-nola-sms-pro', title: 'Install NOLA SMS Pro' }
    ],
    nextPageCTA: {
      title: 'What is NOLA SMS Pro?',
      desc: 'Understand the business benefits and setup outcomes of NOLA SMS Pro.',
      id: 'what-is-nola-sms-pro'
    },
    screenshots: [
      {
        filename: '/images/docs/welcome-nola-inside-highlevel.png',
        alt: 'NOLA SMS Pro embedded in HighLevel sub-account menu.',
        caption: 'Find and access NOLA SMS Pro directly inside your sub-account navigation panel.'
      }
    ]
  },
  {
    id: 'what-is-nola-sms-pro',
    title: 'What is NOLA SMS Pro?',
    description: 'A native communication portal built to facilitate text messaging with Philippine mobile subscribers.',
    section: 'OVERVIEW',
    readingTime: '2 min read',
    purpose: 'NOLA SMS Pro centralizes contacts lookup, custom copywriting, template storage, credit refills, and carrier logs inside your HighLevel workspace.',
    whyItMatters: 'Traditional external texting systems cause "tab fatigue" and risk contact data exposure. NOLA SMS Pro replaces these fragmented tools with a secure, embedded outbox right next to your CRM database.',
    prerequisites: [
      'HighLevel sub-account location access.',
      'Philippine-based customer contacts with mobile numbers.'
    ],
    steps: [
      'Access the app natively via the HighLevel sub-account menu.',
      'Avoid duplicate typing by searching contact files synced in real-time.',
      'Ensure standard, professional replies by loading pre-saved templates.',
      'Brand your messages using verified custom Sender IDs registered with local networks.'
    ],
    expectAfter: 'Your support, sales, and marketing teams will communicate directly with mobile leads without transferring files, leaving tabs open, or copying numbers.',
    hasProblemsSolved: true,
    hasTargetPersonas: true,
    relatedPages: [
      { id: 'how-nola-sms-pro-works', title: 'How NOLA SMS Pro Works' }
    ],
    nextPageCTA: {
      title: 'How NOLA SMS Pro Works',
      desc: 'Learn about the carrier routing and credit system behind our dashboard.',
      id: 'how-nola-sms-pro-works'
    }
  },
  {
    id: 'how-nola-sms-pro-works',
    title: 'How NOLA SMS Pro Works',
    description: 'Bridges your CRM workspace directly to Philippine telco networks via a secure carrier gateway.',
    section: 'OVERVIEW',
    readingTime: '3 min read',
    purpose: 'NOLA SMS Pro connects your sub-account directly to local networks (Globe, Smart, DITO) in the Philippines, delivering messages reliably at localized rates.',
    whyItMatters: 'Direct local gateway routing ensures fast delivery speeds and compliance with carrier-level spam filters, preventing message blocks.',
    prerequisites: [
      'Active SMS credits in your NOLA SMS Pro billing workspace.',
      'Customer phone numbers using local 11-digit formatting (09XXXXXXXXX).'
    ],
    steps: [
      'Pick a contact: The app reads details from your synced HighLevel directory.',
      'Format copy: You type a custom message or select a saved standard template.',
      'Apply identity: You select a sender mask (default NOLASMSPro or your approved Sender ID).',
      'Debit credits: The system verifies text segment lengths and deducts credits.',
      'Deliver & Log: Outbound carriers route the block and report live status codes back to your History logs.'
    ],
    expectAfter: 'You will understand the pathway of a text message from the Compose panel, through our local gateways, to the subscriber\'s hand.',
    hasIntegrationFlow: true,
    hasModuleEcosystem: true,
    relatedPages: [
      { id: 'core-features', title: 'Core Features' }
    ],
    nextPageCTA: {
      title: 'Core Features',
      desc: 'Explore the functional modules of the NOLA SMS Pro workspace.',
      id: 'core-features'
    }
  },
  {
    id: 'core-features',
    title: 'Core Features',
    description: 'The six functional pillars designed to run a secure, branded SMS outreach program.',
    section: 'OVERVIEW',
    readingTime: '2 min read',
    purpose: 'NOLA SMS Pro is built on six functional modules: Contacts, Compose, Templates, Sender IDs, Credits, and Settings.',
    whyItMatters: 'By grouping features into standard, focused modules, operators can verify client records, load approved templates, check sending history, and request top-ups in seconds.',
    prerequisites: [
      'Basic familiarity with NOLA SMS Pro navigation shortcuts.'
    ],
    steps: [
      'Contacts: Look up or add mobile customer records.',
      'Compose: Type texts, review credit segments, and dispatch SMS.',
      'Templates: Organize reusable, pre-written standard message blocks.',
      'Sender IDs: Manage custom brand headers to replace raw sender numbers.',
      'Credits: Monitor available gateway credits and request refills.',
      'Settings: Configure profiles, notification levels, and sub-account integrations.'
    ],
    expectAfter: 'You will recognize the primary modules in your sidebar and know where to configure each feature.',
    relatedPages: [
      { id: 'install-nola-sms-pro', title: 'Install NOLA SMS Pro' }
    ],
    nextPageCTA: {
      title: 'Install NOLA SMS Pro',
      desc: 'Deploy the app to your HighLevel sub-account to activate the system.',
      id: 'install-nola-sms-pro'
    }
  },
  {
    id: 'install-nola-sms-pro',
    title: 'Install NOLA SMS Pro',
    description: 'Deploy NOLA SMS Pro from the Marketplace to your HighLevel sub-account.',
    section: 'SETUP',
    readingTime: '3 min read',
    purpose: 'Authorize GoHighLevel to integrate with the NOLA platform so the app can send text messages and synchronize your contact database.',
    whyItMatters: 'Establishing a direct marketplace integration secures communication pathways and enables instant bi-directional database synchronization without manual exporting.',
    prerequisites: [
      'Administrator-level access to your GoHighLevel Agency Account.',
      'The specific sub-account (location) name where the app should be installed.'
    ],
    steps: [
      'Log in to GoHighLevel.',
      'In the sidebar, select Agency View.',
      'Open the Marketplace and search for NOLA SMS Pro.',
      'Click Install.',
      'Select the designated sub-account/location you want to use.',
      'Review the requested permissions (contacts, messages, location details), then click Allow & Install.'
    ],
    expectAfter: 'After completing the installation steps, GoHighLevel will establish the connection and automatically redirect you to the account setup screen.',
    nextPageCTA: {
      title: 'Create or Sign In',
      desc: 'Register your owner profile to access settings, credits, and logs.',
      id: 'create-or-sign-in'
    },
    relatedPages: [
      { id: 'welcome', title: 'Welcome to NOLA SMS Pro' },
      { id: 'create-or-sign-in', title: 'Create or Sign In' }
    ]
  },
  {
    id: 'create-or-sign-in',
    title: 'Create or Sign In',
    description: 'Register your owner profile to access settings, credits, and logs.',
    section: 'SETUP',
    readingTime: '2 min read',
    purpose: 'Map each installed sub-account/location in GHL to a registered owner profile in NOLA SMS Pro to secure data and track credit balances.',
    whyItMatters: 'Registering or signing in with the canonical owner profile ensures credit balances are correctly tracked and data is secured at the location level.',
    prerequisites: [
      'A valid business email address.',
      'A contact mobile number.'
    ],
    steps: [
      'Once redirected to the registration page, enter your Full Name, Email Address, Phone Number, and Password.',
      'Click Create Account to map your user account as the canonical owner of this location.',
      'Or, if NOLA SMS Pro was previously set up, navigate to the Sign In screen, enter existing owner credentials, and click Sign In.'
    ],
    expectAfter: 'Once you complete registration or sign in, your location mapping is verified and the setup wizard proceeds to the connection confirmation step.',
    nextPageCTA: {
      title: 'Connect HighLevel',
      desc: 'Verify the active integration status between your CRM and NOLA SMS Pro.',
      id: 'connect-highlevel'
    },
    relatedPages: [
      { id: 'install-nola-sms-pro', title: 'Install NOLA SMS Pro' },
      { id: 'connect-highlevel', title: 'Connect HighLevel' }
    ]
  },
  {
    id: 'connect-highlevel',
    title: 'Connected Highlevel',
    description: 'Verify the active integration status between your CRM and NOLA SMS Pro.',
    section: 'SETUP',
    readingTime: '2 min read',
    purpose: 'Verify that NOLA SMS Pro is successfully connected to your GoHighLevel sub-account by confirming location identifiers and contact synchronization.',
    whyItMatters: 'Ensuring locations and contacts sync correctly is key to message formatting and delivery.',
    prerequisites: [
      'Completed Marketplace installation.',
      'Active owner profile login.'
    ],
    steps: [
      'Open NOLA SMS Pro from your GoHighLevel left navigation sidebar.',
      'Click Settings in the NOLA SMS Pro menu.',
      'Scroll to the profile details and confirm the correct Location Name and Location ID are displayed.',
      'Navigate to the Contacts section in NOLA SMS Pro.',
      'Verify that customer contacts from your GoHighLevel sub-account have been successfully synchronized.',
      'Return to Settings and confirm the connection badge displays API Connected. If it shows Disconnected, click Connect API to re-authorize the integration.'
    ],
    expectAfter: 'Your location identity, owner profile, and GoHighLevel contact database are successfully synchronized and ready for standard messaging operations.',
    nextPageCTA: {
      title: 'Dashboard Overview',
      desc: 'Learn the primary tabs and control modules in NOLA SMS Pro.',
      id: 'dashboard-overview'
    },
    relatedPages: [
      { id: 'create-or-sign-in', title: 'Create or Sign In' },
      { id: 'dashboard-overview', title: 'Dashboard Overview' }
    ]
  },
  {
    id: 'dashboard-overview',
    title: 'Dashboard Overview',
    description: 'Learn the primary tabs and control modules in NOLA SMS Pro.',
    section: 'SETUP',
    readingTime: '3 min read',
    purpose: 'Understand the layout of your workspace, monitor essential operational alerts, and navigate each menu panel to run your messaging campaigns.',
    whyItMatters: 'Standardizing operators to dashboard controls reduces UI confusion.',
    prerequisites: [
      'Successfully completed the Marketplace installation and connected your GoHighLevel account.'
    ],
    steps: [
      'Home: View credits, messaging statistics, credit alerts, and compose/topup shortcuts.',
      'Contacts: Browse, search, filter GHL contacts, create numbers using local formatting, and load chat views.',
      'Compose SMS: Draft messages with character/credit estimation, and load templates.',
      'Templates: Create reusable message snippets and folder structures.',
      'Message History: Track delivery statuses (Sending, Sent, Failed) and credits costs.',
      'Settings: Request custom Sender IDs, set alert limits, and buy credits packages.'
    ],
    expectAfter: 'With a clear understanding of the dashboard highlights and menu functionalities, you can confidently manage contacts, templates, SMS credits, and outbound messaging from the NOLA SMS Pro workspace.',
    nextPageCTA: {
      title: 'Send Your First SMS',
      desc: 'A pre-flight workflow mapping the journey of a text message from composition to delivery.',
      id: 'send-your-first-sms'
    },
    relatedPages: [
      { id: 'connect-highlevel', title: 'Connected Highlevel' },
      { id: 'send-your-first-sms', title: 'Send Your First SMS' }
    ]
  },
  {
    id: 'send-your-first-sms',
    title: 'Send Your First SMS',
    description: 'A pre-flight workflow mapping the journey of a text message from composition to delivery.',
    section: 'SETUP',
    readingTime: '2 min read',
    purpose: 'Verify that you can successfully send an SMS and confirm that it is received on the recipient\'s mobile device.',
    whyItMatters: 'Completing a test send verifies credit debiting, carrier delivery channels, and contact syncing prior to live campaigns.',
    prerequisites: [
      'Available SMS credits (new accounts receive 10 free trial credits upon registration).',
      'A test contact with a valid Philippine mobile number formatted as 09XXXXXXXXX.'
    ],
    steps: [
      'Navigate to Contacts and select Add Contact. Save a test contact using your own mobile number.',
      'Open Compose SMS.',
      'Select your test contact as the recipient.',
      'Choose the default sender identity NOLASMSPro.',
      'Compose a natural message (e.g. "Hi, this is a delivery test from NOLA SMS Pro. No reply is required.").',
      'Review the character count before sending (1 standard SMS = 160 characters).',
      'Click Send once.',
      'Verify that the SMS arrives on your physical mobile handset.',
      'Open Message History and confirm the message status displays Sent or Delivered.'
    ],
    expectAfter: 'Once your test SMS is successfully received and the message status shows Delivered, your setup is complete and you are ready to begin normal messaging operations.',
    nextPageCTA: {
      title: 'Contacts',
      desc: 'Search and manage contact records synchronized directly from HighLevel.',
      id: 'contacts'
    },
    relatedPages: [
      { id: 'dashboard-overview', title: 'Dashboard Overview' },
      { id: 'contacts', title: 'Contacts' }
    ]
  },
  {
    id: 'contacts',
    title: 'Contacts',
    description: 'Search and manage contact records synchronized directly from HighLevel.',
    section: 'MESSAGING',
    readingTime: '3 min read',
    purpose: '',
    whyItMatters: ''
  },
  {
    id: 'compose-sms',
    title: 'Compose SMS',
    description: 'Personalize, draft, and dispatch text messages to selected recipients.',
    section: 'MESSAGING',
    readingTime: '3 min read',
    purpose: '',
    whyItMatters: ''
  },
  {
    id: 'message-templates',
    title: 'Message Templates',
    description: 'Save and reuse pre-written standard message blocks.',
    section: 'MESSAGING',
    readingTime: '2 min read',
    purpose: '',
    whyItMatters: ''
  },
  {
    id: 'sender-ids',
    title: 'Sender IDs',
    description: 'Request custom brand names to replace default sending numbers.',
    section: 'MESSAGING',
    readingTime: '3 min read',
    purpose: '',
    whyItMatters: ''
  },
  {
    id: 'message-history',
    title: 'Message History',
    description: 'Audit and track delivery statuses for sent messages.',
    section: 'MESSAGING',
    readingTime: '3 min read',
    purpose: '',
    whyItMatters: ''
  },
  {
    id: 'sms-credits',
    title: 'SMS Credits',
    description: 'Monitor credit balances, transaction logs, and top up requests.',
    section: 'ACCOUNT',
    readingTime: '3 min read',
    purpose: '',
    whyItMatters: ''
  },
  {
    id: 'settings',
    title: 'Settings',
    description: 'Manage user profiles, location connections, sending defaults, and notification preferences.',
    section: 'ACCOUNT',
    readingTime: '3 min read',
    purpose: '',
    whyItMatters: ''
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Diagnose and resolve common setup, billing, and carrier issues.',
    section: 'SUPPORT',
    readingTime: '4 min read',
    purpose: '',
    whyItMatters: ''
  },
  {
    id: 'support-help',
    title: 'Support & Help',
    description: 'Create support tickets and check ticket status logs.',
    section: 'SUPPORT',
    readingTime: '3 min read',
    purpose: '',
    whyItMatters: ''
  },
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    description: 'Quick reference answers for billing, credits, and formatting.',
    section: 'SUPPORT',
    readingTime: '3 min read',
    purpose: '',
    whyItMatters: ''
  }
];

export function getDocPageById(id: string): DocPage | undefined {
  return docsData.find((p) => p.id === id);
}

export function getNextAndPrevPages(id: string) {
  const flatItems: { id: string; title: string }[] = [];
  sidebarStructure.forEach((sec) => {
    sec.items.forEach((item) => {
      flatItems.push({ id: item.id, title: item.title });
    });
  });

  const currentIndex = flatItems.findIndex((item) => item.id === id);
  if (currentIndex === -1) return { prev: null, next: null };

  const prev = currentIndex > 0 ? flatItems[currentIndex - 1] : null;
  const next = currentIndex < flatItems.length - 1 ? flatItems[currentIndex + 1] : null;

  return { prev, next };
}
