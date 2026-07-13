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
  section: 'INTRODUCTION' | 'Getting Started' | 'Using NOLA SMS Pro' | 'Troubleshooting' | 'FAQ' | 'Support';
  subsection?: string;
  readingTime: string;
  purpose: string;
  whyItMatters?: string;
  steps?: string[];
  capabilities?: string[];
  useCases?: DocPageUseCase[];
  tips?: string[];
  notes?: string[];
  warnings?: string[];
  commonIssues?: string[];
  faqs?: DocFAQ[];
  relatedPages?: RelatedPage[];
  screenshots?: ScreenshotPlan[];
  hasFirstSMSChecklist?: boolean;
  hasTicketForm?: boolean;
  nextPageCTA?: { title: string; desc: string; id: string };
}

export const defaultSmsReminder =
  'After installation, NOLA SMS Pro sends SMS using the default sender NOLASMSPro unless you select an approved custom Sender ID. Messages require available SMS credits. A normal 160-character SMS usually uses 1 credit, and longer messages may use more. Send one natural test message first, then check Message History for the status.';

export const sidebarStructure = [
  {
    title: 'INTRODUCTION',
    items: [
      { id: 'welcome-overview', title: 'Overview' },
      { id: 'welcome-about', title: 'About NOLA SMS Pro' },
      { id: 'welcome-different', title: 'What Makes NOLA SMS Pro Different' },
      { id: 'welcome-core-modules', title: 'Core Modules' },
      { id: 'welcome-experience', title: 'The NOLA SMS Pro Experience' },
      { id: 'welcome-why', title: 'Why Use NOLA SMS Pro' }
    ]
  },
  {
    title: 'Getting Started',
    items: [
      { id: 'marketplace-install', title: 'Install NOLA SMS Pro' },
      { id: 'account-access', title: 'Create or Sign In' },
      { id: 'dashboard-overview', title: 'Dashboard Overview' },
      { id: 'first-sms-checklist', title: 'Send Your First SMS' }
    ]
  },
  {
    title: 'Using NOLA SMS Pro',
    items: [
      { id: 'contacts', title: 'Contacts' },
      { id: 'templates', title: 'Templates' },
      { id: 'sender-id', title: 'Sender IDs' },
      { id: 'sms-credits', title: 'SMS Credits' },
      { id: 'message-history', title: 'Message History' },
      { id: 'settings', title: 'Settings' }
    ]
  },
  {
    title: 'Troubleshooting',
    items: [
      { id: 'troubleshooting', title: 'Troubleshooting' }
    ]
  },
  {
    title: 'Frequently Asked Questions',
    items: [
      { id: 'faq', title: 'FAQ' }
    ]
  },
];

export const docsData: DocPage[] = [
  {
    id: 'welcome',
    title: 'Welcome to NOLA SMS Pro',
    description: 'A complete SMS messaging platform that lives directly inside your HighLevel sub-account.',
    section: 'INTRODUCTION',
    readingTime: '2 min read',
    purpose: 'NOLA SMS Pro brings SMS sending, HighLevel contacts, reusable templates, Sender IDs, credit management, message status, and account settings into your connected HighLevel sub-account.',
    whyItMatters: 'Agencies and teams spend hours navigating between multiple dashboards to reach clients. By embedding messaging natively within HighLevel, NOLA SMS Pro preserves context, reduces support friction, and streamlines team communication.',
    steps: [
      'Send SMS from the connected HighLevel sub-account.',
      'Manage HighLevel contacts and reusable SMS templates.',
      'Use the default sender or an approved custom Sender ID.',
      'Track SMS credits, message status, notifications, and connected location settings.'
    ],
    notes: [
      'You do not need to download a separate desktop or mobile app.'
    ],
    screenshots: [
      {
        filename: '/images/docs/welcome-nola-inside-highlevel.png',
        alt: 'NOLA SMS Pro opened inside the HighLevel sub-account menu.',
        caption: 'NOLA SMS Pro runs inside your HighLevel sub-account after installation.'
      }
    ],
    relatedPages: [
      { id: 'marketplace-install', title: 'Install NOLA SMS Pro' },
      { id: 'first-sms-checklist', title: 'Send Your First SMS' }
    ],
    nextPageCTA: {
      title: 'Install NOLA SMS Pro',
      desc: 'Get started by installing the application from the HighLevel Marketplace.',
      id: 'marketplace-install'
    }
  },
  {
    id: 'welcome-overview',
    title: 'Overview',
    description: 'Get an overview of NOLA SMS Pro features.',
    section: 'INTRODUCTION',
    readingTime: '1 min read',
    purpose: 'NOLA SMS Pro brings SMS sending, HighLevel contacts, reusable templates, Sender IDs, credit tracking, message history, and account settings into your connected HighLevel sub-account.',
    whyItMatters: 'Documentation is more than a list of tools—it is your guide to building a modern messaging workflow. This portal shows how NOLA SMS Pro connects the key segments of your HighLevel location into a unified workspace.',
    notes: [
      'You do not need to download a separate desktop or mobile app.'
    ],
    nextPageCTA: {
      title: 'About NOLA SMS Pro',
      desc: 'Let\'s take a look at the product philosophy and understand who NOLA SMS Pro is designed for.',
      id: 'welcome-about'
    }
  },
  {
    id: 'welcome-about',
    title: 'About NOLA SMS Pro',
    description: 'Learn about what NOLA SMS Pro is.',
    section: 'INTRODUCTION',
    readingTime: '1 min read',
    purpose: 'NOLA SMS Pro is a dedicated SMS messaging solution that integrates directly with your HighLevel sub-account, simplifying sending and tracking without leaving the platform.',
    whyItMatters: 'Juggling tabs leads to lost context and slower response times. We built NOLA SMS Pro to remove this friction, keeping your customer data and communication history aligned inside your CRM.',
    notes: [
      'You do not need to download a separate desktop or mobile app.'
    ],
    nextPageCTA: {
      title: 'What Makes NOLA SMS Pro Different',
      desc: 'Understand the traditional CRM friction points we eliminate compared to standard messaging setups.',
      id: 'welcome-different'
    }
  },
  {
    id: 'welcome-different',
    title: 'What Makes NOLA SMS Pro Different',
    description: 'Discover what sets NOLA SMS Pro apart from other solutions.',
    section: 'INTRODUCTION',
    readingTime: '1 min read',
    purpose: 'Learn how NOLA SMS Pro simplifies your workflow compared to traditional methods.',
    whyItMatters: 'Standard setups require manual CSV lists, separate billing accounts, and external carrier configurations. NOLA SMS Pro bridges these steps directly into your CRM workspace with one-click installation.',
    notes: [
      'You do not need to download a separate desktop or mobile app.'
    ],
    nextPageCTA: {
      title: 'Core Modules',
      desc: 'Take a high-level tour of the six main functional modules that power the platform.',
      id: 'welcome-core-modules'
    }
  },
  {
    id: 'welcome-core-modules',
    title: 'Core Modules',
    description: 'Explore the core capabilities of NOLA SMS Pro.',
    section: 'INTRODUCTION',
    readingTime: '1 min read',
    purpose: 'Discover the key modules that power NOLA SMS Pro.',
    whyItMatters: 'A complete messaging system requires coordination between contacts, copy, routing, balances, and delivery logs. NOLA integrates these six elements into one workspace.',
    notes: [
      'You do not need to download a separate desktop or mobile app.'
    ],
    nextPageCTA: {
      title: 'The NOLA SMS Pro Experience',
      desc: 'Visualize the end-to-end journey from initial install to tracking your first outgoing text.',
      id: 'welcome-experience'
    }
  },
  {
    id: 'welcome-experience',
    title: 'The NOLA SMS Pro Experience',
    description: 'See how NOLA SMS Pro fits into your workflow.',
    section: 'INTRODUCTION',
    readingTime: '1 min read',
    purpose: 'Walk through the end-to-end experience of using NOLA SMS Pro.',
    whyItMatters: 'Knowing what to expect guarantees a smooth deployment. We map the customer journey from Marketplace discovery to real-time status reporting so you can verify each checkpoint.',
    notes: [
      'You do not need to download a separate desktop or mobile app.'
    ],
    nextPageCTA: {
      title: 'Why Use NOLA SMS Pro',
      desc: 'Examine the concrete business benefits and ROI of our integrated approach.',
      id: 'welcome-why'
    }
  },
  {
    id: 'welcome-why',
    title: 'Why Use NOLA SMS Pro',
    description: 'Discover why NOLA SMS Pro is the right choice.',
    section: 'INTRODUCTION',
    readingTime: '1 min read',
    purpose: 'Explore the key features that make NOLA SMS Pro the perfect SMS solution for your HighLevel workflow.',
    whyItMatters: 'Investing in new tools should yield immediate time savings. NOLA SMS Pro cuts customer reply lag, ensures local compliance formats, and lets your team focus on communication instead of database management.',
    notes: [
      'You do not need to download a separate desktop or mobile app.'
    ],
    nextPageCTA: {
      title: 'Install NOLA SMS Pro',
      desc: 'Ready to deploy? Let\'s install NOLA SMS Pro from the HighLevel Marketplace.',
      id: 'marketplace-install'
    }
  },
  {
    id: 'marketplace-install',
    title: 'Install NOLA SMS Pro',
    description: 'Install NOLA SMS Pro from the HighLevel Marketplace and connect the correct sub-account/location.',
    section: 'Getting Started',
    readingTime: '4 min read',
    purpose: 'Use this guide when you are installing NOLA SMS Pro for a HighLevel location for the first time.',
    whyItMatters: 'NOLA SMS Pro requires native integration with your HighLevel sub-account to synchronize contacts, conversations, and account permissions securely. Setting it up correctly ensures your SMS workspace is fully operational from day one.',
    steps: [
      'Log in to HighLevel.',
      'Open the Marketplace and search for NOLA SMS Pro.',
      'Open the NOLA SMS Pro listing and click Install.',
      'Select the sub-account/location where the app should be installed.',
      'Review the requested permissions for contacts, conversations, location details, and permission to connect the app.',
      'Click Allow & Install.',
      'Follow the redirect to create or sign in to the NOLA account.'
    ],
    capabilities: [
      'Find NOLA SMS Pro in the HighLevel Marketplace listing.',
      'Target specific HighLevel sub-accounts during provisioning.',
      'Inspect permissions required to sync contacts and read locations.',
      'Confirm and grant access with a secure one-click OAuth consent.'
    ],
    useCases: [
      {
        scenario: 'First-Time Location Provisioning',
        benefit: 'Adds the NOLA SMS Pro application interface to your sub-account navigation panel so teams can begin sending immediately.'
      },
      {
        scenario: 'Multi-Location Agency Rollouts',
        benefit: 'Enables administrators to assign dedicated SMS credits and custom Sender IDs to specific client-facing locations.'
      }
    ],
    notes: [
      'Only approve the install when the selected sub-account/location is correct.'
    ],
    warnings: [
      'If you close the browser window during setup, open NOLA SMS Pro from HighLevel again to continue.'
    ],
    screenshots: [
      {
        filename: '/images/docs/install-marketplace-listing.png',
        alt: 'NOLA SMS Pro Marketplace listing in HighLevel.',
        caption: 'Find NOLA SMS Pro in the HighLevel Marketplace.'
      },
      {
        filename: '/images/docs/install-select-subaccount.png',
        alt: 'HighLevel install screen for selecting a sub-account location.',
        caption: 'Select the sub-account/location where the app should be installed.'
      },
      {
        filename: '/images/docs/install-allow-permissions.png',
        alt: 'HighLevel permission review screen before installing NOLA SMS Pro.',
        caption: 'Review the install screen, then click Allow & Install.'
      }
    ],
    relatedPages: [
      { id: 'account-access', title: 'Create or Sign In' },
      { id: 'troubleshooting', title: 'Troubleshooting' }
    ],
    nextPageCTA: {
      title: 'Create or Sign In',
      desc: 'Now that the app is installed inside HighLevel, let\'s establish your owner account credentials to activate your secure billing workspace.',
      id: 'account-access'
    }
  },
  {
    id: 'account-access',
    title: 'Create or Sign In to Your Account',
    description: 'Create the NOLA owner account for a new location, or sign in with the existing owner account.',
    section: 'Getting Started',
    readingTime: '3 min read',
    purpose: 'After installation, NOLA SMS Pro asks the location owner to create an account or sign in so the dashboard can open inside HighLevel.',
    whyItMatters: 'Owner accounts secure your messaging space and link credit transactions, Sender ID requests, and system logs to a verified team email. This separation ensures credit controls and settings remain tamper-proof.',
    steps: [
      'If the location is new, enter your name, email address, mobile number, and password.',
      'Review and accept the NOLA SMS Pro user agreement.',
      'Click Create Account to finish registration.',
      'If NOLA says the location is already registered, choose Sign In instead.',
      'Sign in with the existing owner email and password.',
      'When you open NOLA SMS Pro from HighLevel later, you may already be signed in.'
    ],
    capabilities: [
      'Establish account owner profiles linked to specific locations.',
      'Review and accept terms of service and billing structures.',
      'Retrieve and restore accounts for pre-registered sub-accounts.',
      'Benefit from persistent, secure session management.'
    ],
    useCases: [
      {
        scenario: 'Initial Owner Onboarding',
        benefit: 'Locks credit controls, account profile settings, and payment details to a single administrator email address.'
      },
      {
        scenario: 'Workspace Re-activation',
        benefit: 'Restores dashboard and credit balances for pre-registered client spaces after permission updates.'
      }
    ],
    tips: [
      'Use the owner email your team expects to manage credits, Sender IDs, and support requests.'
    ],
    warnings: [
      'Do not create a second account for a location that is already registered. Ask the existing owner to sign in or contact support.'
    ],
    screenshots: [
      {
        filename: '/images/docs/account-create-form.png',
        alt: 'NOLA SMS Pro account creation form after installation.',
        caption: 'New locations show the account creation form after installation.'
      },
      {
        filename: '/images/docs/account-sign-in-existing-owner.png',
        alt: 'NOLA SMS Pro sign-in screen for an existing location owner.',
        caption: 'Already registered locations ask the existing owner to sign in.'
      }
    ],
    relatedPages: [
      { id: 'dashboard-overview', title: 'Dashboard Overview' }
    ],
    nextPageCTA: {
      title: 'Dashboard Overview',
      desc: 'With your owner account secured, let\'s explore the dashboard layout to understand where each messaging tool resides.',
      id: 'dashboard-overview'
    }
  },
  {
    id: 'dashboard-overview',
    title: 'Dashboard Overview',
    description: 'Understand the main dashboard areas and what each one is used for.',
    section: 'Getting Started',
    readingTime: '3 min read',
    purpose: 'Use the dashboard to confirm your location, check credits, send SMS, manage contacts, save templates, and review message status.',
    whyItMatters: 'The dashboard acts as your central command hub. It aggregates SMS credit balances, real-time activity charts, delivery alert notifications, and quick shortcuts, letting you assess account health at a glance.',
    steps: [
      'Home shows your SMS credits, recent activity, alerts, and shortcuts.',
      'Compose lets you send individual or bulk SMS.',
      'Contacts lets you add contacts and search existing contacts.',
      'Templates stores reusable SMS messages.',
      'Message History shows Sending, Sent, and Failed statuses.',
      'Settings contains your profile, Sender IDs, notifications, credits, and connected location details.'
    ],
    capabilities: [
      'View total available SMS credits instantly from the home banner.',
      'Click quick-action shortcuts for templates, sending, and top-ups.',
      'Inspect connected location name to confirm CRM sync states.',
      'Read dynamic alert logs notifying you of low balances or carrier changes.'
    ],
    useCases: [
      {
        scenario: 'Pre-flight Credit Auditing',
        benefit: 'Gives teams visibility on credit balances before scheduling or initiating high-volume messages.'
      },
      {
        scenario: 'Rapid Operational Navigation',
        benefit: 'Provides support reps direct paths to compose boxes, template lists, and message logs.'
      }
    ],
    tips: [
      'Before your first send, check Home for credits and open Settings to confirm the connected location.'
    ],
    screenshots: [
      {
        filename: '/images/docs/dashboard-overview-home.png',
        alt: 'NOLA SMS Pro dashboard home showing credits, activity, alerts, and navigation.',
        caption: 'The dashboard shows credits, recent activity, alerts, and shortcuts.'
      }
    ],
    relatedPages: [
      { id: 'first-sms-checklist', title: 'Send Your First SMS' },
      { id: 'settings', title: 'Settings' }
    ],
    nextPageCTA: {
      title: 'Send Your First SMS',
      desc: 'Now that you are familiar with the interface, let\'s complete the pre-flight checks and send your first test text message.',
      id: 'first-sms-checklist'
    }
  },
  {
    id: 'first-sms-checklist',
    title: 'Send Your First SMS',
    description: 'Confirm the required setup items, send one natural message, and check Message History.',
    section: 'Getting Started',
    readingTime: '3 min read',
    purpose: 'Use this checklist for your first normal SMS send after installation.',
    whyItMatters: 'Your first text message defines your sending profile. Testing with a verified checklist ensures formatting is correct, credits deduct properly, and status logs update before going live with customers.',
    hasFirstSMSChecklist: true,
    steps: [
      'Confirm the connected location is correct.',
      'Confirm SMS credits are available.',
      'Use NOLASMSPro for the first send.',
      'Add or select a contact with a valid 09XXXXXXXXX mobile number.',
      'Write one natural message instead of a single word like test.',
      'Click Send once.',
      'Open Message History and check the status.'
    ],
    capabilities: [
      'Interact with an on-screen interactive checklist for your first send.',
      'Check locational mapping, credit statuses, and default sender codes.',
      'Compose a natural message body using real sentence structures.',
      'Trace logs instantly in Message History to confirm carrier success.'
    ],
    useCases: [
      {
        scenario: 'Initial Installation Verification',
        benefit: 'Verifies the integrity of the HighLevel CRM data sync and carrier routes in real time.'
      },
      {
        scenario: 'Sender ID Testing',
        benefit: 'Confirms that the default NOLASMSPro sender mask passes carrier filters for local networks.'
      }
    ],
    notes: [
      defaultSmsReminder
    ],
    warnings: [
      'If the message fails or stays on Sending, do not click Send repeatedly. Check Message History first.'
    ],
    screenshots: [
      {
        filename: '/images/docs/compose-first-sms.png',
        alt: 'Compose screen with one natural SMS message ready to send.',
        caption: 'Compose one natural test message before sending live SMS.'
      },
      {
        filename: '/images/docs/compose-default-sender.png',
        alt: 'Compose sender field showing the default NOLASMSPro sender.',
        caption: 'Use the default NOLASMSPro sender for your first message.'
      },
      {
        filename: '/images/docs/message-history-sent-status.png',
        alt: 'Message History showing a Sent status after the first SMS.',
        caption: 'Check Message History after sending to confirm the status.'
      }
    ],
    relatedPages: [
      { id: 'contacts', title: 'Contacts' },
      { id: 'message-history', title: 'Message History' }
    ],
    nextPageCTA: {
      title: 'Managing Contacts',
      desc: 'Once you have verified carrier sync, learn how NOLA SMS Pro pulls and validates contacts natively from your CRM.',
      id: 'contacts'
    }
  },
  {
    id: 'contacts',
    title: 'Contacts',
    description: 'Add, search, and choose contacts for SMS sending.',
    section: 'Using NOLA SMS Pro',
    subsection: 'Contacts',
    readingTime: '3 min read',
    purpose: 'Contacts are the people available in the connected HighLevel location.',
    whyItMatters: 'Native integration with HighLevel means no CSV exports or syncing errors. Contacts are fetched directly from your sub-account, ensuring that name, location, and mobile number variables are always up to date.',
    steps: [
      'Open Contacts from the NOLA SMS Pro menu.',
      'Search for an existing contact by name, email, or phone number.',
      'To add a contact, click Add Contact.',
      'Enter the contact name and a valid mobile number.',
      'For Philippine mobile numbers, use the 11-digit format starting with 09, such as 09171234567.',
      'Save the contact before sending SMS.'
    ],
    capabilities: [
      'Real-time query of HighLevel CRM location contact databases.',
      'Add new contacts with automatic Philippine mobile format validation.',
      'Search contact indexes instantly by name, email, or mobile number.',
      'Initiate compose pathways directly from contact listings.'
    ],
    useCases: [
      {
        scenario: 'On-Demand Customer Messaging',
        benefit: 'Find a customer profile inside NOLA and send them a text without copying and pasting phone numbers.'
      },
      {
        scenario: 'CRM Data Compliance',
        benefit: 'Enforces proper 11-digit mobile spacing to prevent carrier routing issues.'
      }
    ],
    tips: [
      'Do not include spaces, hyphens, or +63 for local sends unless support tells you to use a different format.'
    ],
    warnings: [
      'Avoid duplicate contacts with the same phone number so the same person does not receive the same SMS twice.'
    ],
    screenshots: [
      {
        filename: '/images/docs/contacts-list.png',
        alt: 'Contacts list inside NOLA SMS Pro.',
        caption: 'Contacts show the people available in the connected location.'
      },
      {
        filename: '/images/docs/contacts-add-contact.png',
        alt: 'Add Contact form with mobile number field.',
        caption: 'Add a contact with a valid mobile number before sending a test SMS.'
      }
    ],
    relatedPages: [
      { id: 'first-sms-checklist', title: 'Send Your First SMS' },
      { id: 'message-history', title: 'Message History' }
    ],
    nextPageCTA: {
      title: 'SMS Templates',
      desc: 'With your audience list ready, learn how to build reusable message templates to write consistent, professional copy.',
      id: 'templates'
    }
  },
  {
    id: 'templates',
    title: 'Templates',
    description: 'Save reusable SMS messages that can be inserted in Compose.',
    section: 'Using NOLA SMS Pro',
    subsection: 'Templates',
    readingTime: '3 min read',
    purpose: 'Templates help you reuse clear, natural SMS wording for common customer messages.',
    whyItMatters: 'Customer communication requires speed and brand consistency. Templates save your team from retyping standard responses, reducing spelling errors and keeping your messaging voice professional.',
    steps: [
      'Open Templates from the NOLA SMS Pro menu.',
      'Click Create Template.',
      'Enter a short template name.',
      'Write the message body using clear, natural wording.',
      'Save the template.',
      'Open Compose and insert the template when you are ready to send.'
    ],
    capabilities: [
      'Create and save structured, multi-line text templates.',
      'Organize items in a filterable template database list.',
      'Quickly fetch and insert templates inside the SMS Compose modal.',
      'Update or delete templates as customer workflows evolve.'
    ],
    useCases: [
      {
        scenario: 'Support Auto-Responses',
        benefit: 'Stores business hours, driving directions, or payment details for customer support dispatch.'
      },
      {
        scenario: 'Marketing Copy Standards',
        benefit: 'Ensures marketing outreach texts use approved phrasing and tracking links.'
      }
    ],
    tips: [
      'Keep templates short and direct. Use wording that sounds like a real customer message.'
    ],
    screenshots: [
      {
        filename: '/images/docs/templates-list.png',
        alt: 'Templates list inside NOLA SMS Pro.',
        caption: 'Templates save reusable SMS messages.'
      },
      {
        filename: '/images/docs/templates-create-template.png',
        alt: 'Create Template form for writing a reusable SMS message.',
        caption: 'Create a short, natural message that can be inserted in Compose.'
      }
    ],
    relatedPages: [
      { id: 'first-sms-checklist', title: 'Send Your First SMS' },
      { id: 'contacts', title: 'Contacts' }
    ],
    nextPageCTA: {
      title: 'Sender IDs',
      desc: 'After creating your templates, learn how to register custom brand names to replace default NOLASMSPro sending masks.',
      id: 'sender-id'
    }
  },
  {
    id: 'sender-id',
    title: 'Sender IDs',
    description: 'Use the default sender right away, or request a custom Sender ID for approval.',
    section: 'Using NOLA SMS Pro',
    subsection: 'Sender IDs',
    readingTime: '3 min read',
    purpose: 'You can send with NOLASMSPro right away if credits are available. Custom Sender IDs must be requested and approved before they appear in Compose.',
    whyItMatters: 'Sender IDs build trust. Replacing the default \'NOLASMSPro\' with your business name improves open rates and protects your messages from being flagged as spam by telecom carriers.',
    steps: [
      'For your first send, choose NOLASMSPro in Compose.',
      'To request a custom Sender ID, open Settings and go to Sender IDs.',
      'Click Request Custom Sender ID.',
      'Enter the Sender ID name, business purpose, and one sample message.',
      'Submit the request.',
      'Wait for the status to show Approved before using it in Compose.'
    ],
    capabilities: [
      'Utilize default carrier sending codes instantly on activation.',
      'Register custom business Sender IDs (e.g., BRANDNAME).',
      'Provide business profiles and compliance context directly on request.',
      'Track real-time carrier registration states (Approved/Pending/Rejected).'
    ],
    useCases: [
      {
        scenario: 'Branded Company Messaging',
        benefit: 'Presents your actual trade name in the customer outbox, boosting brand recognition.'
      },
      {
        scenario: 'Carrier Deliverability Optimization',
        benefit: 'Ensures custom text headers are registered with networks, keeping delivery high.'
      }
    ],
    notes: [
      defaultSmsReminder
    ],
    warnings: [
      'Pending or rejected Sender IDs cannot be selected when sending SMS.'
    ],
    screenshots: [
      {
        filename: '/images/docs/sender-id-default.png',
        alt: 'Sender ID screen showing NOLASMSPro as the default sender.',
        caption: 'The default sender is NOLASMSPro.'
      },
      {
        filename: '/images/docs/sender-id-request-form.png',
        alt: 'Custom Sender ID request form in NOLA SMS Pro.',
        caption: 'Custom Sender IDs can be requested from Settings.'
      },
      {
        filename: '/images/docs/sender-id-statuses.png',
        alt: 'Sender ID status list showing pending and approved statuses.',
        caption: 'Only approved Sender IDs can be selected when sending SMS.'
      }
    ],
    relatedPages: [
      { id: 'first-sms-checklist', title: 'Send Your First SMS' },
      { id: 'settings', title: 'Settings' }
    ],
    nextPageCTA: {
      title: 'SMS Credits',
      desc: 'With your brand name set up, explore how to top up SMS credits, monitor balances, and review usage history.',
      id: 'sms-credits'
    }
  },
  {
    id: 'sms-credits',
    title: 'SMS Credits',
    description: 'Check your SMS credit balance, request more credits, and review credit history.',
    section: 'Using NOLA SMS Pro',
    subsection: 'SMS Credits',
    readingTime: '3 min read',
    purpose: 'SMS credits are required before messages can be sent.',
    whyItMatters: 'SMS credits are the currency of NOLA SMS Pro. Monitoring balances and setting alerts prevents messaging blackouts, ensuring that your team remains connected to clients without interruption.',
    steps: [
      'Check your credit balance on Home or in Settings.',
      'Before sending, confirm the balance is greater than zero.',
      'If your balance is low or zero, click Request Credits.',
      'Enter the number of credits you need and submit the request.',
      'If checkout is available, choose a credit package and complete checkout.',
      'Use credit history to review recent credit changes and SMS usage.'
    ],
    capabilities: [
      'View credit balances on the Home banner and Settings profile.',
      'Submit credit replenishment requests for agency approvals.',
      'Access credit package checkouts directly when configured.',
      'Review a full audit trail of credit purchases and outbound deductions.'
    ],
    useCases: [
      {
        scenario: 'Billing Reconciliation',
        benefit: 'Provides granular credit histories to map messaging volumes to company budgets.'
      },
      {
        scenario: 'Outage Prevention',
        benefit: 'Checks credit balances before launching large support or promotional sequences.'
      }
    ],
    notes: [
      defaultSmsReminder
    ],
    tips: [
      'Set a low-balance notification so your team knows when to request more credits.'
    ],
    screenshots: [
      {
        filename: '/images/docs/credits-balance.png',
        alt: 'SMS credit balance inside NOLA SMS Pro.',
        caption: 'Check your available credits before sending SMS.'
      },
      {
        filename: '/images/docs/credits-request-form.png',
        alt: 'Request Credits form in NOLA SMS Pro.',
        caption: 'Request more credits if your balance is low or zero.'
      },
      {
        filename: '/images/docs/credits-history.png',
        alt: 'Credit history table showing recent credit changes.',
        caption: 'Credit history shows recent credit changes and SMS usage.'
      }
    ],
    relatedPages: [
      { id: 'first-sms-checklist', title: 'Send Your First SMS' },
      { id: 'message-history', title: 'Message History' }
    ],
    nextPageCTA: {
      title: 'Message History',
      desc: 'Now that your gateway is fueled, discover how to monitor sending logs and verify delivery statuses in real-time.',
      id: 'message-history'
    }
  },
  {
    id: 'message-history',
    title: 'Message History',
    description: 'Check whether messages are Sending, Sent, or Failed.',
    section: 'Using NOLA SMS Pro',
    subsection: 'Message History',
    readingTime: '3 min read',
    purpose: 'Message History is where you confirm what happened after clicking Send.',
    whyItMatters: 'Every text message has a story. Message History provides full transparency on sending states, carrier delivery reports, and fail reasons, giving you the details needed to keep delivery high.',
    steps: [
      'Open Message History from the NOLA SMS Pro menu.',
      'Find the message by recipient number, sender, or send time.',
      'Check the status: Sending, Sent, or Failed.',
      'If the status is Sending, wait a few minutes and refresh.',
      'If the status is Failed, open the message and check the failed reason if one is available.',
      'If you contact support, include a screenshot, recipient number, send time, message status, and visible error message.'
    ],
    capabilities: [
      'Track real-time carrier statuses: Sending, Sent, or Failed.',
      'Search log history by receiver numbers, senders, and content.',
      'Drill down into failed messages to inspect carrier rejection reasons.',
      'Filter and navigate complete historical logs easily.'
    ],
    useCases: [
      {
        scenario: 'Delivery Troubleshooting',
        benefit: 'Allows agents to inspect if a customer\'s text bounced due to formatting or network errors.'
      },
      {
        scenario: 'Outreach Verification',
        benefit: 'Verifies whether critical client alerts or confirmation codes were delivered.'
      }
    ],
    warnings: [
      'Do not click Send repeatedly while a message is still Sending.'
    ],
    screenshots: [
      {
        filename: '/images/docs/message-history-list.png',
        alt: 'Message History list showing message statuses.',
        caption: 'Message History shows Sending, Sent, and Failed statuses.'
      },
      {
        filename: '/images/docs/message-history-failed-detail.png',
        alt: 'Failed message detail with available error information.',
        caption: 'Open failed messages to see the available error details.'
      }
    ],
    relatedPages: [
      { id: 'first-sms-checklist', title: 'Send Your First SMS' }
    ],
    nextPageCTA: {
      title: 'Configure Settings',
      desc: 'After auditing message routes, learn how to configure notifications, low-credit emails, and location profiles in Settings.',
      id: 'settings'
    }
  },
  {
    id: 'settings',
    title: 'Settings',
    description: 'Review your profile, connected location details, notifications, Sender IDs, and credits.',
    section: 'Using NOLA SMS Pro',
    subsection: 'Settings',
    readingTime: '3 min read',
    purpose: 'Settings is where you confirm the account and location are correct before sending.',
    whyItMatters: 'Settings is the control room of NOLA SMS Pro. Managing profile details, connected location scopes, notifications, and Sender ID registries ensures your SMS portal runs securely and exactly as your team needs.',
    steps: [
      'Open Settings from the NOLA SMS Pro menu.',
      'Review your profile information.',
      'Check Connected Location and confirm it matches the HighLevel sub-account you installed.',
      'Open Sender IDs to review default and custom sender options.',
      'Open Credits to check your balance or request more credits.',
      'Open Notifications to manage low-balance and delivery alerts.'
    ],
    capabilities: [
      'Verify the location name maps to the correct HighLevel CRM sub-account.',
      'Manage profile names, emails, and credentials.',
      'Configure email threshold alerts for low-credit notifications.',
      'Link directly to billing top-ups and Sender ID registries.'
    ],
    useCases: [
      {
        scenario: 'Pre-flight Location Validation',
        benefit: 'Ensures that location-specific API connections match the CRM client profile.'
      },
      {
        scenario: 'Alert Management',
        benefit: 'Maintains messaging continuity by automating low-credit notifications.'
      }
    ],
    warnings: [
      'If the connected location details do not match your HighLevel sub-account, stop and contact support before sending SMS.'
    ],
    screenshots: [
      {
        filename: '/images/docs/settings-profile.png',
        alt: 'Profile settings in NOLA SMS Pro.',
        caption: 'Profile settings show the user information for the account.'
      },
      {
        filename: '/images/docs/settings-connected-location.png',
        alt: 'Connected Location settings in NOLA SMS Pro.',
        caption: 'Connected Location should match the HighLevel sub-account you installed.'
      },
      {
        filename: '/images/docs/settings-notifications.png',
        alt: 'Notification settings in NOLA SMS Pro.',
        caption: 'Notifications control alerts such as low balance and delivery updates.'
      }
    ],
    relatedPages: [
      { id: 'sender-id', title: 'Sender IDs' },
      { id: 'sms-credits', title: 'SMS Credits' }
    ],
    nextPageCTA: {
      title: 'Troubleshooting Guide',
      desc: 'With your workspace configured, explore how to resolve carrier blocks, reconnection prompts, and balance locks independently.',
      id: 'troubleshooting'
    }
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Fix common setup, credit, Sender ID, and sending issues.',
    section: 'Troubleshooting',
    readingTime: '5 min read',
    purpose: 'Use this page when something does not look right or a message does not send as expected.',
    whyItMatters: 'Even the best systems encounter carrier blocks, bad number formats, or integration changes. Having a structured troubleshooting framework helps you resolve issues quickly and keep texts sending.',
    steps: [
      'Find the issue that matches what you see on screen.',
      'Follow the next step listed for that issue.',
      'If the issue continues, contact support with a screenshot and the details requested on the Support page.'
    ],
    capabilities: [
      'Diagnose location, CRM, and authentication sync issues.',
      'Fix credit balances, checkout failures, and billing flags.',
      'Debug carrier block causes for outgoing SMS campaigns.',
      'Address custom Sender ID registration and approval delays.'
    ],
    useCases: [
      {
        scenario: 'Failed Send Diagnosis',
        benefit: 'Guides agents to inspect Message History failure logs to resolve the issue independently.'
      },
      {
        scenario: 'Sync Recovery',
        benefit: 'Restores CRM communication connections when HighLevel tokens expire.'
      }
    ],
    commonIssues: [
      'Wrong Location: You see a location name that is not yours. This means the app may be connected to the wrong HighLevel sub-account. Stop and contact support before sending.',
      'Zero Credits: You see a zero credit balance. This means SMS cannot be sent yet. Request credits or complete checkout if it is available.',
      'SMS Failed: You see Failed in Message History. This may mean the number, credits, Sender ID, or message content needs attention. Open the failed message and review the visible reason.',
      'Still Sending: You see Sending for several minutes. This may be a delayed status update. Wait, refresh Message History, and do not click Send again.',
      'Sender ID Pending: You see Pending next to a custom Sender ID. This means it is not approved yet. Use NOLASMSPro until the custom Sender ID is approved.',
      'Reconnect Required: You see a reconnect prompt. Follow the prompt once, confirm the correct location, and contact support if it returns.'
    ],
    tips: [
      'For SMS issues, capture the recipient number, send time, message status, and visible error message before contacting support.'
    ],
    screenshots: [
      {
        filename: '/images/docs/error-wrong-location.png',
        alt: 'Wrong connected location warning in NOLA SMS Pro.',
        caption: 'If the wrong location appears, stop and contact support before sending.'
      },
      {
        filename: '/images/docs/error-zero-credits.png',
        alt: 'Zero credits warning in NOLA SMS Pro.',
        caption: 'If credits are zero, request credits before sending SMS.'
      },
      {
        filename: '/images/docs/error-sms-failed.png',
        alt: 'Failed SMS status in Message History.',
        caption: 'If SMS fails, check the number, credits, Sender ID, and Message History.'
      },
      {
        filename: '/images/docs/error-reconnect-required.png',
        alt: 'Reconnect required prompt in NOLA SMS Pro.',
        caption: 'If reconnect is required, follow the reconnect prompt from the app.'
      }
    ],
    relatedPages: [
      { id: 'faq', title: 'FAQ' }
    ],
    nextPageCTA: {
      title: 'Frequently Asked Questions',
      desc: 'Still have general questions? Browse quick answers to common questions about NOLA SMS Pro operations.',
      id: 'faq'
    }
  },
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    description: 'Short answers to common NOLA SMS Pro questions.',
    section: 'FAQ',
    readingTime: '4 min read',
    purpose: 'Use these quick answers when you need a short explanation without reading a full guide.',
    whyItMatters: 'Quick answers save time. The FAQ section provides straightforward explanations for common credit, sending, formatting, and support questions, getting you back to work in seconds.',
    capabilities: [
      'Quick reference lookup for common credit rates.',
      'Locate Sender ID compliance rules.',
      'Review location connection protocols.',
      'Identify critical details needed for fast support resolutions.'
    ],
    useCases: [
      {
        scenario: 'Rapid Operational Clarification',
        benefit: 'Reps can verify character count rules or credit rates without raising support tickets.'
      },
      {
        scenario: 'Support Preparation',
        benefit: 'Aligns troubleshooting data before initiating location support claims.'
      }
    ],
    faqs: [
      {
        q: 'Can I send right after installation?',
        a: 'Yes, if the correct location is connected and SMS credits are available. Use NOLASMSPro for your first send.'
      },
      {
        q: 'Why can I not send SMS?',
        a: 'The most common causes are zero credits, an invalid phone number, an unapproved Sender ID, or a failed connection. Check Settings, Credits, and Message History.'
      },
      {
        q: 'How many credits does one SMS use?',
        a: 'A normal 160-character SMS usually uses 1 credit. Longer messages or messages with special characters may use more.'
      },
      {
        q: 'Can I use my own Sender ID?',
        a: 'Yes. Request it from Settings, then wait until it is approved. Pending Sender IDs cannot be used in Compose.'
      },
      {
        q: 'What should I do if a message fails?',
        a: 'Open Message History, check the failed reason if available, and avoid clicking Send again until you understand the issue.'
      },
      {
        q: 'What information should I send to support?',
        a: 'Include a screenshot, HighLevel location name, recipient number, send time, message status, and visible error message.'
      }
    ],
    relatedPages: [
      { id: 'troubleshooting', title: 'Troubleshooting' }
    ]
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
