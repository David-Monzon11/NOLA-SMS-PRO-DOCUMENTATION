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
      { id: 'connect-highlevel', title: 'Connect HighLevel' },
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
    purpose: 'This guide details how to find, install, and authorize NOLA SMS Pro inside your HighLevel location dashboard.',
    whyItMatters: 'A correct initial Marketplace authorization establishes secure links, allowing NOLA SMS Pro to sync contacts and log message statuses.',
    prerequisites: [
      'HighLevel sub-account location access.',
      'Administrator rights to approve application OAuth permission scopes.'
    ],
    steps: [
      'Log in to your HighLevel dashboard and navigate to the Marketplace.',
      'Search for "NOLA SMS Pro" and open the application listing.',
      'Click the Install button to begin the integration process.',
      'Select the target HighLevel sub-account from the location dropdown.',
      'Review permissions (contacts access, message history logging, location details).',
      'Click Allow & Install to authorize the connection.'
    ],
    expectAfter: 'NOLA SMS Pro will load within your HighLevel sub-account menu, ready for administrator profile setup.',
    relatedPages: [
      { id: 'create-or-sign-in', title: 'Create or Sign In' }
    ],
    nextPageCTA: {
      title: 'Create or Sign In',
      desc: 'Configure your administrator credentials to secure your workspace.',
      id: 'create-or-sign-in'
    },
    screenshots: [
      {
        filename: '/images/docs/install-marketplace-listing.png',
        alt: 'NOLA SMS Pro in HighLevel Marketplace.',
        caption: 'Access the NOLA SMS Pro application listing within the HighLevel Marketplace.'
      },
      {
        filename: '/images/docs/install-select-subaccount.png',
        alt: 'Select sub-account during installation.',
        caption: 'Choose the specific sub-account location to assign NOLA SMS Pro.'
      },
      {
        filename: '/images/docs/install-allow-permissions.png',
        alt: 'Authorize OAuth permissions.',
        caption: 'Confirm access permissions to establish a secure database connection.'
      }
    ]
  },
  {
    id: 'create-or-sign-in',
    title: 'Create or Sign In',
    description: 'Register your owner profile to access settings, credits, and logs.',
    section: 'SETUP',
    readingTime: '2 min read',
    purpose: 'Setup your administrator login credentials or authenticate an existing account to manage billing and settings.',
    whyItMatters: 'An owner profile secures your sending configurations, custom brand requests, and credit transactions, preventing unauthorized access.',
    prerequisites: [
      'Completed HighLevel Marketplace installation.',
      'Valid corporate email address for administrative notifications.'
    ],
    steps: [
      'For new locations: Enter your name, corporate email address, and a secure password.',
      'Review and accept the NOLA SMS Pro service agreement and usage terms.',
      'Click Create Account to activate your billing workspace.',
      'For registered locations: Select Sign In instead, and enter your existing credentials.',
      'Upon verification, the system registers the sub-account mapping.'
    ],
    expectAfter: 'You will enter the dashboard. Subsequent app launches will bypass this screen and load your Home page directly.',
    relatedPages: [
      { id: 'connect-highlevel', title: 'Connect HighLevel' }
    ],
    nextPageCTA: {
      title: 'Connect HighLevel',
      desc: 'Verify and check the active CRM integration status.',
      id: 'connect-highlevel'
    },
    screenshots: [
      {
        filename: '/images/docs/account-create-form.png',
        alt: 'Create Admin Account Form.',
        caption: 'Fill in your name, email, and password to establish your administrator profile.'
      },
      {
        filename: '/images/docs/account-sign-in-existing-owner.png',
        alt: 'Sign In Existing Administrator Profile.',
        caption: 'Authenticate with existing credentials for registered locations.'
      }
    ]
  },
  {
    id: 'connect-highlevel',
    title: 'Connect HighLevel',
    description: 'Verify the active integration status between your CRM and NOLA SMS Pro.',
    section: 'SETUP',
    readingTime: '2 min read',
    purpose: 'Check the connection status and confirm that NOLA SMS Pro is connected to the correct HighLevel sub-account.',
    whyItMatters: 'If NOLA SMS Pro is connected to the wrong sub-account, message logs, contacts, and credits will not sync correctly, which can disrupt your outreach.',
    prerequisites: [
      'Completed administrator account signup.',
      'HighLevel sub-account API permissions active.'
    ],
    steps: [
      'Log in to NOLA SMS Pro and open the Home page or Settings.',
      'Locate the Connection Status panel on the dashboard.',
      'Confirm that the Connected Location matches your current sub-account name exactly.',
      'If the indicator displays a disconnect warning, follow the reconnect prompt to re-authorize.'
    ],
    expectAfter: 'Your database sync will show as Active, enabling real-time contact and template sync.',
    relatedPages: [
      { id: 'dashboard-overview', title: 'Dashboard Overview' }
    ],
    nextPageCTA: {
      title: 'Dashboard Overview',
      desc: 'Familiarize yourself with the panels and modules in NOLA SMS Pro.',
      id: 'dashboard-overview'
    },
    screenshots: [
      {
        filename: '/images/docs/settings-connected-location.png',
        alt: 'Connected Location Verification Screen.',
        caption: 'Confirm that NOLA SMS Pro maps to your correct HighLevel sub-account.'
      }
    ]
  },
  {
    id: 'dashboard-overview',
    title: 'Dashboard Overview',
    description: 'Learn the primary tabs and control modules in NOLA SMS Pro.',
    section: 'SETUP',
    readingTime: '3 min read',
    purpose: 'Explore the central dashboard command center, navigation shortcuts, and credit counters.',
    whyItMatters: 'A clear understanding of the dashboard structure helps your sales and support teams send messages, check credits, and audit logs quickly.',
    prerequisites: [
      'Active owner profile session.',
      'Connected HighLevel sub-account.'
    ],
    steps: [
      'Home: Monitor credit counters, recent activity charts, and system announcements.',
      'Compose: Access the manual chat screen to select contacts, load templates, and send SMS.',
      'Contacts: Look up synchronized CRM directories and validate phone formatting.',
      'Templates: Create and save reusable, pre-written standard message blocks.',
      'Message History: Check detailed status updates (Sending, Sent, Failed) for all messages.',
      'Settings: Request custom Sender IDs, edit profiles, and set low-credit alerts.'
    ],
    expectAfter: 'Your operators will navigate the interface confidently to handle daily client outreach.',
    relatedPages: [
      { id: 'send-your-first-sms', title: 'Send Your First SMS' }
    ],
    nextPageCTA: {
      title: 'Send Your First SMS',
      desc: 'Follow the messaging pipeline to deliver a successful test SMS.',
      id: 'send-your-first-sms'
    },
    screenshots: [
      {
        filename: '/images/docs/dashboard-overview-home.png',
        alt: 'Home Page Command Center Overview.',
        caption: 'The Home page aggregates your SMS credits, delivery stats, and quick actions.'
      }
    ]
  },
  {
    id: 'send-your-first-sms',
    title: 'Send Your First SMS',
    description: 'A pre-flight workflow mapping the journey of a text message from composition to delivery.',
    section: 'SETUP',
    readingTime: '2 min read',
    purpose: 'This walkthrough demonstrates the exact operational flow for a typical customer SMS campaign, ensuring team alignment.',
    whyItMatters: 'Documenting the manual messaging path ensures that operators check balances, use approved templates, and confirm delivery status systematically.',
    prerequisites: [
      'An active NOLA SMS Pro installation.',
      'Initial default credits allocated to your sub-account.'
    ],
    steps: [
      'Recipient selection: Choose a valid customer number from Contacts.',
      'Drafting copy: Type your text or insert a pre-saved Template.',
      'Sender check: Choose the default NOLASMSPro mask or your approved brand ID.',
      'Outbox dispatch: Settle credits (1 credit per 160 characters) and click Send.',
      'Delivery check: Keep Message History open to monitor carrier statuses.'
    ],
    expectAfter: 'Your messaging operators will have a simple, repeatable process to draft, brand, and audit client texts.',
    hasFirstSMSChecklist: true,
    relatedPages: [
      { id: 'contacts', title: 'Contacts' }
    ],
    nextPageCTA: {
      title: 'Contacts',
      desc: 'Sync and manage client mobile numbers in NOLA SMS Pro.',
      id: 'contacts'
    }
  },
  {
    id: 'contacts',
    title: 'Contacts',
    description: 'Search and manage contact records synchronized directly from HighLevel.',
    section: 'MESSAGING',
    readingTime: '3 min read',
    purpose: 'Access and search your HighLevel sub-account contacts list in real-time, or add new records directly.',
    whyItMatters: 'Manual spreadsheet uploads and contact exports lead to data mismatch and duplicate records. NOLA SMS Pro syncs contacts automatically to keep details accurate and secure.',
    prerequisites: [
      'Active HighLevel CRM sub-account sync.',
      'Recipient mobile numbers.'
    ],
    steps: [
      'Open the Contacts module from the side menu.',
      'Search for an existing contact by name, email, or mobile number.',
      'To add a new record, click the Add Contact button.',
      'Input the contact name and their local mobile number.',
      'Format local numbers as 11 digits starting with 09 (e.g. 09171234567).',
      'Click the Send icon on any contact row to open the Compose panel with their details pre-loaded.'
    ],
    expectAfter: 'Newly added contacts sync back to your HighLevel database instantly, keeping records consistent.',
    tips: [
      'Avoid prefixing local numbers with +63, spaces, or dashes. Keep the format as a simple 11-digit number starting with 09.'
    ],
    warnings: [
      'Ensure contact numbers are unique to prevent duplicate sends and billing errors.'
    ],
    relatedPages: [
      { id: 'compose-sms', title: 'Compose SMS' }
    ],
    nextPageCTA: {
      title: 'Compose SMS',
      desc: 'Learn how to write, template, and dispatch messages to customers.',
      id: 'compose-sms'
    },
    screenshots: [
      {
        filename: '/images/docs/contacts-list.png',
        alt: 'Contacts Workspace Sync Panel.',
        caption: 'Search, review, and select synced customer records directly from the Contacts registry.'
      },
      {
        filename: '/images/docs/contacts-add-contact.png',
        alt: 'Add Customer Contact Dialog.',
        caption: 'Add new contacts with automatic local formatting checks.'
      }
    ]
  },
  {
    id: 'compose-sms',
    title: 'Compose SMS',
    description: 'Personalize, draft, and dispatch text messages to selected recipients.',
    section: 'MESSAGING',
    readingTime: '3 min read',
    purpose: 'The Compose window is your primary workspace to select sender identities, write custom texts, load templates, and send messages.',
    whyItMatters: 'Personalized compose options help support reps reply to inquiries quickly. Real-time character counts also show estimated credit usage before you click send.',
    prerequisites: [
      'A recipient phone number selected.',
      'Available SMS credits in your account.'
    ],
    steps: [
      'Open the Compose module or select a recipient from Contacts.',
      'Choose your sender mask from the dropdown list (e.g. NOLASMSPro or approved custom ID).',
      'Type your message in the text editor, or click Templates to load a saved response.',
      'Verify character count: Standard messages use 1 credit for up to 160 characters.',
      'Click Send SMS once. The message will enter the carrier queue.'
    ],
    expectAfter: 'Your message will show as Sending, then transition to Sent or Failed in the Message History panel.',
    notes: [
      defaultSmsReminder
    ],
    warnings: [
      'If the message remains in a Sending status, do not click Send repeatedly. Wait for the status to resolve in Message History, and inspect troubleshooting logs if needed.'
    ],
    relatedPages: [
      { id: 'message-templates', title: 'Message Templates' }
    ],
    nextPageCTA: {
      title: 'Message Templates',
      desc: 'Save and manage reusable message drafts to standardise replies.',
      id: 'message-templates'
    },
    screenshots: [
      {
        filename: '/images/docs/compose-first-sms.png',
        alt: 'SMS Compose Panel.',
        caption: 'Draft your message, choose templates, and review credit costs before sending.'
      },
      {
        filename: '/images/docs/compose-default-sender.png',
        alt: 'Select Sender Mask.',
        caption: 'Pick the default NOLASMSPro sender mask or approved brand IDs.'
      }
    ]
  },
  {
    id: 'message-templates',
    title: 'Message Templates',
    description: 'Save and reuse pre-written standard message blocks.',
    section: 'MESSAGING',
    readingTime: '2 min read',
    purpose: 'Standard templates let you save and organize frequently sent message structures, like store locations, payment instructions, or promotional alerts.',
    whyItMatters: 'Writing standard responses manually leads to typos, mismatched details, and slower support times. Saved templates keep your team\'s messages consistent and professional.',
    prerequisites: [
      'A planned message content or outline.',
      'Descriptive title for the template category.'
    ],
    steps: [
      'Navigate to the Templates module in the sidebar.',
      'Click the Create Template button.',
      'Enter a clear title (e.g. "Payment Instructions").',
      'Write the message body, keeping formatting clean.',
      'Click Save Template to store the block.',
      'To use it, open Compose and select the template from the templates dropdown list.'
    ],
    expectAfter: 'The template will be saved and available for all users in the HighLevel sub-account.',
    tips: [
      'Structure templates clearly and use simple language. Test template layout length in characters before saving.'
    ],
    relatedPages: [
      { id: 'sender-ids', title: 'Sender IDs' }
    ],
    nextPageCTA: {
      title: 'Sender IDs',
      desc: 'Request custom business headers to brand your text messages.',
      id: 'sender-ids'
    },
    screenshots: [
      {
        filename: '/images/docs/templates-list.png',
        alt: 'Templates Directory List.',
        caption: 'Organize and search pre-saved message templates.'
      },
      {
        filename: '/images/docs/templates-create-template.png',
        alt: 'Create Template Dialog.',
        caption: 'Enter a template title and body to save the message block.'
      }
    ]
  },
  {
    id: 'sender-ids',
    title: 'Sender IDs',
    description: 'Request custom brand names to replace default sending numbers.',
    section: 'MESSAGING',
    readingTime: '3 min read',
    purpose: 'Apply for and use custom brand headers (like BRANDNAME) to personalize your outgoing text messages.',
    whyItMatters: 'Messages sent from random mobile numbers are often ignored or blocked as spam. A custom Sender ID shows your brand name, which builds customer trust and increases open rates.',
    prerequisites: [
      'A legally registered business or brand name.',
      'Corporate registration documents to verify brand ownership during approval.'
    ],
    steps: [
      'Out of the box, use the default carrier mask NOLASMSPro.',
      'To request a custom Sender ID, open Settings and go to the Sender IDs tab.',
      'Click Request Custom Sender ID and enter your requested name (up to 11 characters).',
      'Provide your business purpose and a sample message.',
      'Submit the application and monitor the status (Approved, Pending, Rejected).'
    ],
    expectAfter: 'Approved Sender ID names will automatically appear in your Compose dropdown list.',
    notes: [
      defaultSmsReminder
    ],
    warnings: [
      'Only approved Sender IDs will appear in the Compose dropdown menu. Pending or rejected entries cannot be used.'
    ],
    relatedPages: [
      { id: 'message-history', title: 'Message History' }
    ],
    nextPageCTA: {
      title: 'Message History',
      desc: 'Learn how to monitor carrier statuses and audit outbox records.',
      id: 'message-history'
    },
    screenshots: [
      {
        filename: '/images/docs/sender-id-default.png',
        alt: 'Default Sender ID View.',
        caption: 'NOLASMSPro is provided as the default sender mask for instant setup.'
      },
      {
        filename: '/images/docs/sender-id-request-form.png',
        alt: 'Request Branded Sender ID Form.',
        caption: 'Submit your custom brand name and business purpose for carrier verification.'
      },
      {
        filename: '/images/docs/sender-id-statuses.png',
        alt: 'Sender ID Registry Queue.',
        caption: 'Track status reports for your custom Sender ID submissions.'
      }
    ]
  },
  {
    id: 'message-history',
    title: 'Message History',
    description: 'Audit and track delivery statuses for sent messages.',
    section: 'MESSAGING',
    readingTime: '3 min read',
    purpose: 'View complete delivery histories, search outbound logs, and inspect detailed carrier-level delivery codes.',
    whyItMatters: 'Delivery reports confirm that your customer texts reach their destination. Detailed logs show if messages are pending or failed, and provide error details if a carrier block occurs.',
    prerequisites: [
      'Sent messages queued through NOLA SMS Pro.'
    ],
    steps: [
      'Navigate to the Message History module in the sidebar menu.',
      'Search the log by recipient phone number, message text, or send date.',
      'Check the Status column: Sending, Sent (delivered to carrier), or Failed.',
      'For messages marked Sending, wait a few moments and refresh the log.',
      'Click on any Failed row to view the detailed carrier reject reasons.'
    ],
    expectAfter: 'You will have a complete, searchable log of your sub-account\'s text message campaigns.',
    warnings: [
      'If a message status is stuck on Sending, do not click Send repeatedly. This might indicate a delayed carrier report, and resending will charge duplicate credits.'
    ],
    relatedPages: [
      { id: 'sms-credits', title: 'SMS Credits' }
    ],
    nextPageCTA: {
      title: 'SMS Credits',
      desc: 'Check credit balances and request refills.',
      id: 'sms-credits'
    },
    screenshots: [
      {
        filename: '/images/docs/message-history-list.png',
        alt: 'Outbox Message History Log.',
        caption: 'Monitor sending states, recipient phone numbers, and delivery logs.'
      },
      {
        filename: '/images/docs/message-history-failed-detail.png',
        alt: 'Failed Message Diagnostic Dialog.',
        caption: 'Inspect failure reasons to diagnose invalid number formatting or carrier blocks.'
      }
    ]
  },
  {
    id: 'sms-credits',
    title: 'SMS Credits',
    description: 'Monitor credit balances, transaction logs, and top up requests.',
    section: 'ACCOUNT',
    readingTime: '3 min read',
    purpose: 'Track credit usage, view deduction history, and request refills to keep messaging services active.',
    whyItMatters: 'Outbound messaging requires active credits. If your credit balance drops to zero, manual compose sends and automated campaigns will be blocked.',
    prerequisites: [
      'Owner account credentials.',
      'Selected billing package requirements.'
    ],
    steps: [
      'Check your active credit balance on the Home page banner or in Settings.',
      'Verify credit levels before starting bulk outreach campaigns.',
      'If credits are low, open the Credits panel and click Request Credits.',
      'Choose your package or enter your credit request count and submit.',
      'Review deduction logs in the Credit History ledger.'
    ],
    expectAfter: 'Your credit balance will update as soon as the administrator approves the top-up request.',
    notes: [
      defaultSmsReminder
    ],
    tips: [
      'Configure a low-credit notification threshold in Settings to get email alerts before your balance runs out.'
    ],
    relatedPages: [
      { id: 'settings', title: 'Settings' }
    ],
    nextPageCTA: {
      title: 'Settings',
      desc: 'Configure notification thresholds, profile settings, and location connections.',
      id: 'settings'
    },
    screenshots: [
      {
        filename: '/images/docs/credits-balance.png',
        alt: 'Credit Balance Counter Widget.',
        caption: 'Monitor your available credits on the dashboard.'
      },
      {
        filename: '/images/docs/credits-request-form.png',
        alt: 'Request Credit Refills Panel.',
        caption: 'Request credits from your agency or top up your account balance.'
      },
      {
        filename: '/images/docs/credits-history.png',
        alt: 'Credit Transaction History Log.',
        caption: 'Audit credit additions, allocations, and campaign deductions.'
      }
    ]
  },
  {
    id: 'settings',
    title: 'Settings',
    description: 'Manage user profiles, location connections, sending defaults, and notification preferences.',
    section: 'ACCOUNT',
    readingTime: '3 min read',
    purpose: 'Settings acts as your administrative dashboard, allowing you to update credentials, check connected sub-accounts, request custom Sender IDs, and configure low-credit email notifications.',
    whyItMatters: 'Managing settings correctly ensures your profile is secure, connected location tokens are valid, and low-credit notifications are active to prevent campaign interruptions.',
    prerequisites: [
      'Owner or administrator permissions.'
    ],
    steps: [
      'Open the Settings module from the sidebar menu.',
      'Review and update profile details (name, login email, password) under Profile.',
      'Verify connected location links to make sure they match your CRM sub-account.',
      'Select the Sender IDs tab to track custom branded sender requests.',
      'Go to the Notifications tab to configure email threshold warnings.',
      'Enable the Low Credit Alerts toggle and specify your alert threshold.',
      'Enter recipient email addresses for the warnings and save settings.'
    ],
    expectAfter: 'All profile edits, email alerts, and brand requests will update instantly. NOLA SMS Pro will monitor your balance and send warning emails when credits fall below your threshold.',
    warnings: [
      'If the Connected Location details do not match your actual HighLevel sub-account, stop immediately and contact support before sending messages.'
    ],
    relatedPages: [
      { id: 'troubleshooting', title: 'Troubleshooting' }
    ],
    nextPageCTA: {
      title: 'Troubleshooting',
      desc: 'Resolve common connection, credit, and delivery issues.',
      id: 'troubleshooting'
    },
    screenshots: [
      {
        filename: '/images/docs/settings-profile.png',
        alt: 'Profile Settings Panel.',
        caption: 'Update name, login email, and password settings in the Profile panel.'
      },
      {
        filename: '/images/docs/settings-connected-location.png',
        alt: 'Connected Location Mapping Panel.',
        caption: 'Confirm that NOLA SMS Pro is connected to the correct HighLevel sub-account.'
      },
      {
        filename: '/images/docs/settings-notifications.png',
        alt: 'Notifications Settings Dialog.',
        caption: 'Set credit threshold alerts to receive low-balance email updates.'
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Diagnose and resolve common setup, billing, and carrier issues.',
    section: 'SUPPORT',
    readingTime: '4 min read',
    purpose: 'Use this guide to diagnose and resolve common portal errors, credit locks, and delivery failures independently.',
    whyItMatters: 'Expired CRM integrations, empty credit balances, and incorrect phone number formats can disrupt outreach. A structured diagnostic path helps you resolve these issues quickly.',
    prerequisites: [
      'Access to the NOLA SMS Pro dashboard.'
    ],
    steps: [
      'Locate the symptom or error message displayed on your screen.',
      'Follow the step-by-step diagnostic checklist for that issue.',
      'If the issue persists, collect details (location name, recipient phone number, error code) and contact support.'
    ],
    expectAfter: 'You will resolve common configuration errors or gather the necessary information to open a support ticket.',
    commonIssues: [
      'Incorrect Location: The Connected Location displays an unfamiliar sub-account name. This occurs when the installation profile is mapped incorrectly. Stop sending and contact support to re-map the location.',
      'Zero Credits: Outbound sending is blocked due to a zero balance. Request credits or complete a package top-up.',
      'SMS Failed: Messages display a Failed status in history. This is typically due to invalid number formats, insufficient credits, or spam filters. Check formatting and credit levels.',
      'Stuck on Sending: Messages remain in a Sending status for more than 5 minutes. This usually indicates a carrier reporting delay. Wait and refresh the page instead of sending again.',
      'Sender ID Pending: A custom Sender ID is in a pending state. This means telco networks are verifying the registry. Use NOLASMSPro until approval is confirmed.',
      'Reconnect Prompt: A message asking you to reconnect appears. This is due to an expired HighLevel token. Follow the prompt to authorize permissions again.'
    ],
    tips: [
      'Before reaching out to support, note down the HighLevel location name, recipient number, send timestamp, and the exact error code from Message History.'
    ],
    relatedPages: [
      { id: 'support-help', title: 'Support & Help' }
    ],
    nextPageCTA: {
      title: 'Support & Help',
      desc: 'Open a support ticket or find additional help resources.',
      id: 'support-help'
    },
    screenshots: [
      {
        filename: '/images/docs/error-wrong-location.png',
        alt: 'Location Connection Warning.',
        caption: 'Verify that the connected location matches your HighLevel sub-account.'
      },
      {
        filename: '/images/docs/error-zero-credits.png',
        alt: 'Zero Credit Error.',
        caption: 'Ensure credits are loaded before starting outbound campaigns.'
      },
      {
        filename: '/images/docs/error-sms-failed.png',
        alt: 'Failed Message Status in History.',
        caption: 'Click failed messages in history to view error codes.'
      },
      {
        filename: '/images/docs/error-reconnect-required.png',
        alt: 'Reconnect Required Dialog.',
        caption: 'Authorize NOLA SMS Pro permissions again if a reconnect prompt appears.'
      }
    ]
  },
  {
    id: 'support-help',
    title: 'Support & Help',
    description: 'Create support tickets and check ticket status logs.',
    section: 'SUPPORT',
    readingTime: '3 min read',
    purpose: 'Open a support ticket and check ticket history when you need assistance from the NOLA SMS Pro technical team.',
    whyItMatters: 'If troubleshooting steps do not resolve an issue, our support desk provides direct help to resolve credit issues, location re-mapping, or carrier delivery failures.',
    prerequisites: [
      'Connected location name.',
      'Detailed description of the issue, recipient phone numbers, and screenshots.'
    ],
    steps: [
      'Fill in the ticket form below with a clear subject (e.g. "Credits did not update").',
      'Select the priority level (Low, Medium, High).',
      'Describe the issue, including phone numbers and error codes.',
      'Click Create Ticket to submit your request.',
      'Track your ticket status in the history log below.'
    ],
    expectAfter: 'A support ticket will be created. Our team will review the issue and contact you via email.',
    hasTicketForm: true,
    relatedPages: [
      { id: 'faq', title: 'Frequently Asked Questions' }
    ],
    nextPageCTA: {
      title: 'Frequently Asked Questions',
      desc: 'Browse quick answers to common platform questions.',
      id: 'faq'
    }
  },
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    description: 'Quick reference answers for billing, credits, and formatting.',
    section: 'SUPPORT',
    readingTime: '3 min read',
    purpose: 'Browse quick answers to frequently asked questions about billing rules, character limits, custom Sender ID approvals, and help resources.',
    whyItMatters: 'Quick reference FAQs save time, allowing team members to verify rules and formatting constraints without reading full setup guides.',
    prerequisites: [
      'General questions about NOLA SMS Pro.'
    ],
    steps: [
      'Review character limits (160 characters per credit segment).',
      'Note that messages with special characters or emojis use more credits.',
      'Check Sender ID timelines (approvals take a few business days).',
      'Verify number formats (always use 11-digit local formatting starting with 09).'
    ],
    expectAfter: 'Your operators will understand compliance rules, formatting constraints, and support requirements.',
    faqs: [
      {
        q: 'Can I send messages immediately after installation?',
        a: 'Yes, if your sub-account is mapped correctly and you have active credits. You can start sending immediately using the default NOLASMSPro sender mask.'
      },
      {
        q: 'Why are my outbound messages failing to deliver?',
        a: 'The most common issues are insufficient credits, invalid local number formats, or network-level spam blocks. Check your credit balance in Settings, verify that recipient numbers are 11 digits starting with 09, and inspect the delivery logs.'
      },
      {
        q: 'How are SMS credits charged for multi-part messages?',
        a: 'A standard message uses 1 credit for up to 160 characters. Messages exceeding 160 characters or containing special characters (like emojis) are split into multi-part segments, with each segment drawing 1 credit.'
      },
      {
        q: 'Can I send messages using my own company brand name?',
        a: 'Yes. You can request a custom Sender ID under Settings. Once approved by local carriers, you can select it from the Compose dropdown.'
      },
      {
        q: 'How long does custom Sender ID registration take?',
        a: 'Custom Sender ID approvals depend on local carrier timelines, and registration generally takes a few business days. You can track the status in Settings.'
      },
      {
        q: 'What details should I provide when contacting support?',
        a: 'Include the connected HighLevel location name, recipient number, send time, and a screenshot of the error description from Message History.'
      }
    ],
    relatedPages: [
      { id: 'welcome', title: 'Welcome to NOLA SMS Pro' }
    ],
    nextPageCTA: {
      title: 'Welcome',
      desc: 'Return to the start of the documentation guide.',
      id: 'welcome'
    }
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
