export interface DocFAQ {
  q: string;
  a: string;
}

export interface RelatedPage {
  id: string;
  title: string;
}

export interface DocPage {
  id: string;
  title: string;
  description: string;
  section: 'Welcome' | 'Getting Started' | 'Using NOLA SMS Pro' | 'Troubleshooting' | 'FAQ' | 'Support';
  subsection?: string;
  readingTime: string;
  purpose: string;
  steps?: string[];
  tips?: string[];
  notes?: string[];
  warnings?: string[];
  commonIssues?: string[];
  faqs?: DocFAQ[];
  relatedPages?: RelatedPage[];
  hasWorkflow?: 'senderId' | 'credits';
  hasFirstSMSChecklist?: boolean;
  hasTicketForm?: boolean;
}

export const sidebarStructure = [
  {
    title: 'Welcome',
    items: [
      { id: 'welcome', title: 'Welcome' }
    ]
  },
  {
    title: 'Getting Started',
    items: [
      { id: 'intro', title: 'Introduction' },
      { id: 'quick-start', title: 'Quick Start Guide' },
      { id: 'marketplace-install', title: 'Install from HighLevel' },
      { id: 'create-account', title: 'Create Your Account' },
      { id: 'sign-in', title: 'Signing In' },
      { id: 'dashboard-overview', title: 'Dashboard Overview' },
      { id: 'first-sms-checklist', title: 'First SMS Checklist' }
    ]
  },
  {
    title: 'Using NOLA SMS Pro',
    items: [
      { id: 'contacts', title: 'Contacts & Formatting', category: 'Contacts' },
      { id: 'templates', title: 'SMS Templates', category: 'SMS Templates' },
      { id: 'sending-sms', title: 'Sending SMS', category: 'Sending SMS' },
      { id: 'sender-id', title: 'Sender ID & Approval', category: 'Sender ID' },
      { id: 'sms-credits', title: 'SMS Credits & Requests', category: 'SMS Credits' },
      { id: 'message-history', title: 'Message History', category: 'Message History' },
      { id: 'reports-analytics', title: 'Reports & Analytics', category: 'Reports' },
      { id: 'settings', title: 'Settings & Notifications', category: 'Settings' }
    ]
  },
  {
    title: 'Troubleshooting',
    items: [
      { id: 'troubleshooting', title: 'Common Issues' }
    ]
  },
  {
    title: 'Frequently Asked Questions',
    items: [
      { id: 'faq', title: 'FAQ' }
    ]
  },
  {
    title: 'Support & Help',
    items: [
      { id: 'support', title: 'Get Support' }
    ]
  }
];

export const docsData: DocPage[] = [
  // --- WELCOME SECTION ---
  {
    id: 'welcome',
    title: 'Welcome to NOLA SMS Pro',
    description: 'Learn how NOLA SMS Pro integrates with your HighLevel sub-account to streamline your business texting.',
    section: 'Welcome',
    readingTime: '2 min read',
    purpose: 'This page introduces you to NOLA SMS Pro and provides a guide on how to navigate this documentation database.',
    steps: [
      'Navigate using the left sidebar to browse different topics.',
      'Use the search bar at the top (or press Ctrl + K) to quickly find specific articles.',
      'Check the "On This Page" panel on the right to jump directly to specific sections on a page.',
      'Toggle between Light and Dark mode using the sun/moon button in the top navigation.'
    ],
    tips: [
      'This documentation is built specifically for sub-account end users. Administrative, developer, and agency billing setups have been removed to focus entirely on your direct day-to-day messaging workflows.'
    ],
    notes: [
      'NOLA SMS Pro is built to run embedded directly inside your GoHighLevel dashboard. You do not need to download separate desktop or mobile apps.'
    ],
    relatedPages: [
      { id: 'quick-start', title: 'Quick Start Guide' },
      { id: 'first-sms-checklist', title: 'First SMS Checklist' }
    ]
  },

  // --- GETTING STARTED ---
  {
    id: 'intro',
    title: 'Introduction to Onboarding',
    description: 'Get started with NOLA SMS Pro in your HighLevel sub-account.',
    section: 'Getting Started',
    readingTime: '3 min read',
    purpose: 'This page guides you through the general onboarding flow from the marketplace install to sending your first text.',
    steps: [
      'A HighLevel admin installs NOLA SMS Pro from the HighLevel Marketplace for your sub-account.',
      'The admin connects the correct location (sub-account).',
      'The sub-account owner registers a NOLA SMS Pro account or logs in to an existing one.',
      'Once logged in, the full dashboard unlocks inside the HighLevel menu.'
    ],
    notes: [
      'Each sub-account location is bound to exactly one NOLA owner account. This prevents multiple users from registering overlapping owner credentials for the same location.'
    ],
    relatedPages: [
      { id: 'quick-start', title: 'Quick Start Guide' },
      { id: 'marketplace-install', title: 'Install from HighLevel' }
    ]
  },
  {
    id: 'quick-start',
    title: 'Quick Start Guide',
    description: 'The step-by-step checklist to install, configure, and send messages quickly.',
    section: 'Getting Started',
    readingTime: '3 min read',
    purpose: 'Provides a condensed, checklist-style workflow for new users.',
    steps: [
      'Log in to HighLevel and install NOLA SMS Pro from the Marketplace.',
      'Choose the single sub-account where the app should be active.',
      'Approve permissions and register your NOLA user profile when redirected.',
      'Go to your HighLevel sub-account and open NOLA SMS Pro from the left sidebar.',
      'Confirm settings and check your starting SMS credit balance.',
      'Add a test contact using the required format (e.g. 09XXXXXXXXX).',
      'Compose a natural message, select the default sender, and click Send.'
    ],
    tips: [
      'For your first installation, install NOLA for a single test location to confirm the setup works before applying it to multiple locations.'
    ],
    warnings: [
      'Avoid generic terms like "test" or "sms test" for your first message. Carrier filters might block these as spam. Use a natural sentence instead.'
    ],
    relatedPages: [
      { id: 'first-sms-checklist', title: 'First SMS Checklist' },
      { id: 'marketplace-install', title: 'Install from HighLevel' }
    ]
  },
  {
    id: 'marketplace-install',
    title: 'Install from HighLevel Marketplace',
    description: 'Detailed instructions on how to install NOLA SMS Pro from HighLevel.',
    section: 'Getting Started',
    readingTime: '4 min read',
    purpose: 'Guide the installer on finding NOLA SMS Pro in the HighLevel Marketplace and granting correct sub-account access.',
    steps: [
      'Log in to your HighLevel dashboard.',
      'Go to the Agency View and open the Marketplace tab.',
      'Search for "NOLA SMS Pro" and select it.',
      'Click the Install button.',
      'Select the specific sub-account/location you want to connect (we recommend installing to a test sub-account first).',
      'Review the requested permissions (contacts, conversations, locations, and oauth).',
      'Click "Allow & Install" to authorize the integration.'
    ],
    notes: [
      'NOLA SMS Pro respects least-privilege scoping. It only requests access to contacts, conversations, custom fields, and OAuth keys required to send and track your messages.'
    ],
    warnings: [
      'If you close the browser window during the authorization redirect, the installation will remain incomplete. If this happens, open NOLA SMS Pro inside HighLevel to resume setup.'
    ],
    relatedPages: [
      { id: 'create-account', title: 'Create Your Account' },
      { id: 'troubleshooting', title: 'Common Issues' }
    ]
  },
  {
    id: 'create-account',
    title: 'Create Your NOLA SMS Pro Account',
    description: 'Set up your owner profile to manage SMS sending and configurations.',
    section: 'Getting Started',
    readingTime: '3 min read',
    purpose: 'Complete account registration immediately after HighLevel marketplace redirect.',
    steps: [
      'After clicking "Allow & Install" in HighLevel, you will be redirected to the NOLA registration screen.',
      'Enter your Full Name, Email, and mobile Phone Number.',
      'Choose a secure password of at least 8 characters.',
      'Review and accept the NOLA SMS Pro User Agreement.',
      'Click "Create Account" to activate your workspace.'
    ],
    tips: [
      'Use the same email address that you use for your HighLevel sub-account to keep notifications aligned.'
    ],
    warnings: [
      'If NOLA displays a message saying the location is already registered, do not try to create a new account. Navigate to the Sign In tab and log in using the existing owner credentials.'
    ],
    relatedPages: [
      { id: 'sign-in', title: 'Signing In' },
      { id: 'dashboard-overview', title: 'Dashboard Overview' }
    ]
  },
  {
    id: 'sign-in',
    title: 'Signing In to Your Account',
    description: 'Access the NOLA SMS Pro dashboard after initial setup.',
    section: 'Getting Started',
    readingTime: '2 min read',
    purpose: 'Instructions on logging in to your dashboard embedded in HighLevel or standalone.',
    steps: [
      'Open NOLA SMS Pro from your HighLevel sub-account menu (it will log you in automatically if the token is active).',
      'If prompted, enter the owner email address and password registered during account creation.',
      'If you forget your password, click the "Forgot Password?" link to request a reset link sent to your registered email.'
    ],
    notes: [
      'When embedded in HighLevel, NOLA uses secure tokens to keep you logged in. You will rarely need to type your password unless your session expires or you access the standalone URL.'
    ],
    relatedPages: [
      { id: 'create-account', title: 'Create Your Account' },
      { id: 'dashboard-overview', title: 'Dashboard Overview' }
    ]
  },
  {
    id: 'dashboard-overview',
    title: 'Dashboard Overview',
    description: 'Learn how to navigate the NOLA SMS Pro user interface.',
    section: 'Getting Started',
    readingTime: '3 min read',
    purpose: 'Walk through the sections of the dashboard to help you find features.',
    steps: [
      'Home/Overview: View your current SMS credits, message activity logs, and system notifications.',
      'Compose: Write individual messages or send bulk SMS to lists.',
      'Contacts: Search, add, and review your HighLevel contact directory.',
      'Templates: Manage saved reusable messages categorized by topic.',
      'Settings: Request Sender IDs, check credits ledger, adjust notifications, and view profile details.'
    ],
    tips: [
      'Keep the dashboard Home page open during test sends to see your SMS credit balance decrease in real time.'
    ],
    relatedPages: [
      { id: 'settings', title: 'Settings & Notifications' },
      { id: 'first-sms-checklist', title: 'First SMS Checklist' }
    ]
  },
  {
    id: 'first-sms-checklist',
    title: 'First SMS Checklist',
    description: 'Verify your configuration with this interactive checklist before launching live campaigns.',
    section: 'Getting Started',
    readingTime: '3 min read',
    purpose: 'An interactive onboarding check tool to verify SMS configuration steps.',
    hasFirstSMSChecklist: true,
    steps: [
      'Verify that NOLA SMS Pro displays the correct connected HighLevel location in Settings.',
      'Confirm that you have a non-zero starting SMS credit balance.',
      'Verify the default sender (NOLASMSPro) appears in the compose sender list.',
      'Add a test contact using a valid mobile number (e.g. 09XXXXXXXXX).',
      'Create a test message template (e.g. "Welcome from NOLA SMS Pro!").',
      'Send a single test message using the template to your test contact.',
      'Confirm that the status in Message History transitions to "Sent".'
    ],
    tips: [
      'Check off each item in the checklist on this page to track your progress.'
    ],
    relatedPages: [
      { id: 'quick-start', title: 'Quick Start Guide' },
      { id: 'sending-sms', title: 'Sending SMS' }
    ]
  },

  // --- USING NOLA SMS PRO ---
  {
    id: 'contacts',
    title: 'Contacts & Formatting Rules',
    description: 'How to manage, format, and search contacts inside NOLA SMS Pro.',
    section: 'Using NOLA SMS Pro',
    subsection: 'Contacts',
    readingTime: '3 min read',
    purpose: 'Provide rules for formatting contact phone numbers to ensure high delivery rates.',
    steps: [
      'Open the Contacts section from the menu.',
      'To add a contact, click "Add Contact" and enter their Name, Phone, and optional Email.',
      'Always format mobile numbers using the carrier-supported standard.',
      'For Philippine mobile numbers, enter the number starting with 09 (e.g., 09171234567).',
      'Use the search box to find contacts by name, email, or phone number.'
    ],
    tips: [
      'Do not include spaces, hyphens, or country codes (+63) for local sends unless instructed by support. The 11-digit format starting with 09 is highly recommended.'
    ],
    warnings: [
      'Duplicate contacts with the same phone number are blocked to prevent sending duplicate messages to the same customer.'
    ],
    relatedPages: [
      { id: 'sending-sms', title: 'Sending SMS' },
      { id: 'message-history', title: 'Message History' }
    ]
  },
  {
    id: 'templates',
    title: 'SMS Templates',
    description: 'Create and organize reusable message templates to speed up communications.',
    section: 'Using NOLA SMS Pro',
    subsection: 'SMS Templates',
    readingTime: '3 min read',
    purpose: 'Explain how to create, edit, and apply template messages in the composer.',
    steps: [
      'Go to the Templates section and click "Create Template".',
      'Enter a name for the template (e.g., Appointment Confirmation).',
      'Select a category: Appointments, Marketing, Transactional, or General.',
      'Type your message text into the template body.',
      'Click "Save Template".',
      'To use a template, open Compose, click "Insert Template", and select it from the list.'
    ],
    tips: [
      'Keep templates concise. Carrier filters screen for spam-like terms. Using natural-sounding templates reduces carrier rejection rates.'
    ],
    notes: [
      'You can edit templates at any time by clicking the Edit button next to them in the template table.'
    ],
    relatedPages: [
      { id: 'sending-sms', title: 'Sending SMS' },
      { id: 'settings', title: 'Settings & Notifications' }
    ]
  },
  {
    id: 'sending-sms',
    title: 'Sending SMS (Individual & Bulk)',
    description: 'Learn how to compose and send messages to one or more recipients.',
    section: 'Using NOLA SMS Pro',
    subsection: 'Sending SMS',
    readingTime: '4 min read',
    purpose: 'Guide the user on using the compose panel, analyzing counts, and executing sends.',
    steps: [
      'Open the Compose page.',
      'To send to a single contact, start typing their name or select "Individual" and enter a mobile number.',
      'To send in bulk, select "Bulk" and pick multiple contacts from your list.',
      'Choose an approved Sender ID from the dropdown menu.',
      'Write your message, or click "Insert Template" to load pre-written content.',
      'Verify the character count: 160 characters equals 1 SMS segment (1 credit). Over 160 characters will use multiple credits.',
      'Click the "Send" button once.'
    ],
    tips: [
      'A character count indicator helps you stay within credit boundaries. Note that special characters (like emojis) reduce the standard segment size from 160 to 70 characters.'
    ],
    warnings: [
      'If a message fails to send, do not repeatedly click the Send button. This could trigger carrier blocklists and double-charge credits if messages queue up. Check Message History first.'
    ],
    relatedPages: [
      { id: 'message-history', title: 'Message History' },
      { id: 'sms-credits', title: 'SMS Credits & Requests' }
    ]
  },
  {
    id: 'sender-id',
    title: 'Sender ID & Carrier Approval Workflow',
    description: 'Learn about custom alphanumeric Sender IDs, how carriers review them, and how to request one.',
    section: 'Using NOLA SMS Pro',
    subsection: 'Sender ID',
    readingTime: '4 min read',
    purpose: 'Explain the Sender ID system and provide the approval request form guidelines.',
    hasWorkflow: 'senderId',
    steps: [
      'By default, all messages use the default carrier name NOLASMSPro.',
      'To request a custom Sender ID, go to Settings > Sender IDs and click "Request Custom Sender ID".',
      'Enter your desired Sender ID (3 to 11 alphanumeric characters, no spaces).',
      'Explain the purpose of the ID (e.g., sending clinic reminders for Dr. Santos).',
      'Provide a sample message exactly as you plan to send it.',
      'Submit the request for Admin Review.',
      'Monitor the status on the Sender IDs tab: Pending, Approved, or Rejected.'
    ],
    tips: [
      'Sender IDs are reviewed by carrier representatives. Provide a realistic purpose and sample message to ensure a quick approval. Reviews typically take 2-3 business days.'
    ],
    warnings: [
      'You cannot select pending or rejected Sender IDs in the Compose screen. They will only appear in the dropdown once their status is updated to Approved.'
    ],
    relatedPages: [
      { id: 'settings', title: 'Settings & Notifications' },
      { id: 'sending-sms', title: 'Sending SMS' }
    ]
  },
  {
    id: 'sms-credits',
    title: 'SMS Credits & Refill Workflow',
    description: 'How to monitor your credit balance, submit refill requests, and purchase credits.',
    section: 'Using NOLA SMS Pro',
    subsection: 'SMS Credits',
    readingTime: '4 min read',
    purpose: 'Understand how credits are consumed, how to request refills from your administrator, and how sandbox billing works.',
    hasWorkflow: 'credits',
    steps: [
      'Check your current balance at the top of the Settings > Credits tab or on the dashboard.',
      'To request credits from your administrator, click "Request Credits".',
      'Enter the number of credits requested, write a short reason note, and click Submit.',
      'Your administrator will review and add the credits to your sub-account balance.',
      'If direct purchases are enabled, select a credit package and complete checkout.',
      'Track your credit transactions in the monthly credit ledger below.'
    ],
    tips: [
      'Set up a Low Balance Alert in Settings > Notifications so you receive an email when your credits drop below a specified number.'
    ],
    notes: [
      'Longer messages require multiple segments. A single message with 170 characters uses 2 segments, which deducts 2 credits from your balance.'
    ],
    relatedPages: [
      { id: 'settings', title: 'Settings & Notifications' },
      { id: 'reports-analytics', title: 'Reports & Analytics' }
    ]
  },
  {
    id: 'message-history',
    title: 'Message History & Delivery Logs',
    description: 'Track the delivery progress and credit consumption of all sent texts.',
    section: 'Using NOLA SMS Pro',
    subsection: 'Message History',
    readingTime: '3 min read',
    purpose: 'Check sending statuses and review detailed delivery reports.',
    steps: [
      'Open the Message History section from the left sidebar.',
      'Review the recipient, sender ID, send time, and credit cost for each text.',
      'Check the current status: Sending, Sent, or Failed.',
      'For failed messages, hover over or click the "Failed" label to view carrier-reported error details.',
      'Filter logs by date range or search for specific recipient phone numbers.'
    ],
    tips: [
      'If a message is stuck in "Sending" status for more than 5 minutes, refresh the page. Network congestion at the carrier level can occasionally delay status updates.'
    ],
    relatedPages: [
      { id: 'sending-sms', title: 'Sending SMS' },
      { id: 'troubleshooting', title: 'Common Issues' }
    ]
  },
  {
    id: 'reports-analytics',
    title: 'Reports & Analytics Dashboard',
    description: 'Analyze SMS volume trends and credit consumption rates.',
    section: 'Using NOLA SMS Pro',
    subsection: 'Reports & Analytics',
    readingTime: '3 min read',
    purpose: 'Review aggregate metrics to track messaging expenses and success rates.',
    steps: [
      'Navigate to Reports & Analytics from the left menu.',
      'Select a date range filter (e.g., Last 7 Days, This Month).',
      'Review the charts showing: Total Sent, Delivery Success Rate, and Credit Consumption.',
      'Check the "Failed Messages Breakdown" to spot common numbers that bounce.',
      'Download a CSV export of your usage logs for monthly auditing.'
    ],
    tips: [
      'A low success rate usually points to invalid contact numbers or carrier blocks. Clean up contact formats regularly.'
    ],
    relatedPages: [
      { id: 'sms-credits', title: 'SMS Credits & Requests' },
      { id: 'message-history', title: 'Message History' }
    ]
  },
  {
    id: 'settings',
    title: 'Settings & Notifications',
    description: 'Adjust your user profile details, email notifications, and view workspace connection parameters.',
    section: 'Using NOLA SMS Pro',
    subsection: 'Settings',
    readingTime: '3 min read',
    purpose: 'Set up your system alerts and keep your profile parameters current.',
    steps: [
      'Open the Settings section and click the Profile tab.',
      'Verify that your Name, Email, and Phone Number match your active profile.',
      'Go to the Notifications tab to toggle email reports and low-balance alerts.',
      'Under the Connected Location tab, confirm that the connected sub-account name matches your HighLevel workspace.',
      'Click "Save Changes" to apply your preferences.'
    ],
    warnings: [
      'If the Connected Location tab displays a location ID or company name that does not belong to you, stop testing immediately and contact support. Do not send messages from an incorrect workspace.'
    ],
    relatedPages: [
      { id: 'sms-credits', title: 'SMS Credits & Requests' },
      { id: 'sender-id', title: 'Sender ID & Approval' }
    ]
  },

  // --- TROUBLESHOOTING ---
  {
    id: 'troubleshooting',
    title: 'Common Issues & Troubleshooting Guide',
    description: 'Fix common issues with installation, login, sending failures, and credit balances.',
    section: 'Troubleshooting',
    readingTime: '5 min read',
    purpose: 'Quick fixes for common issues faced by sub-account users.',
    steps: [
      'Identify the issue from the list below.',
      'Follow the step-by-step resolution guide.',
      'If the issue persists, submit a support ticket.'
    ],
    tips: [
      'Always capture a screenshot of any error panels and note the exact time of the error before contacting support.'
    ],
    warnings: [
      'Do not attempt to reinstall or reconnect multiple times in quick succession. This can cause authorization loops.'
    ],
    commonIssues: [
      'Interrupted Installation: If you close the window before registration, reopen NOLA SMS Pro inside HighLevel to resume.',
      'Wrong Location: If NOLA displays a sibling location, log out, double-check your active HighLevel location, and click Reconnect.',
      'Credits Showing Zero: Try refreshing the page. If the credits still show zero, submit a Credit Request to your administrator.',
      'SMS Failed: Check the phone number format. Ensure it uses the 11-digit 09XXXXXXXXX format. Ensure your credit balance is not zero.',
      'Sender ID Pending: Carriers require 2-3 business days to approve custom IDs. Use the default NOLASMSPro sender in the meantime.',
      'Pop-ups Blocked: If the Buy Credits checkout does not open, click the pop-up blocker icon in your browser address bar and choose "Always allow pop-ups from this site".'
    ],
    relatedPages: [
      { id: 'faq', title: 'Frequently Asked Questions' },
      { id: 'support', title: 'Get Support' }
    ]
  },

  // --- FAQ ---
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    description: 'Quick answers to common questions about using NOLA SMS Pro.',
    section: 'FAQ',
    readingTime: '4 min read',
    purpose: 'Provide direct answers to frequently asked questions.',
    faqs: [
      {
        q: 'How do I request a custom Sender ID?',
        a: 'Navigate to Settings > Sender IDs, click "Request Custom Sender ID", enter an alphanumeric name of 3 to 11 characters, describe its purpose and submit. An administrator will review and approve it.'
      },
      {
        q: 'Why can\'t I send SMS messages?',
        a: 'This is usually caused by having a zero credit balance, using an unapproved Sender ID, or entering an incorrectly formatted phone number. Check that you have credits and are using a carrier-approved sender like NOLASMSPro.'
      },
      {
        q: 'Why is my Sender ID status still pending?',
        a: 'Sender IDs must be submitted to local carriers for registration. This process is managed by administrators and carriers and typically takes 2 to 3 business days. Use the default NOLASMSPro sender until it is approved.'
      },
      {
        q: 'How long does Sender ID or credit approval take?',
        a: 'Credit refills are usually approved by your system administrator within a few hours. Sender ID approvals depend on carriers and take 2-3 business days.'
      },
      {
        q: 'Why are my SMS credits zero?',
        a: 'New sub-accounts start with zero credits. You must click "Request Credits" on the Credits tab to ask your administrator for a credit allocation, or purchase a credit pack if direct billing is enabled.'
      },
      {
        q: 'How do I reconnect my account if I see an integration error?',
        a: 'If you see an integration alert, click the "Reconnect Integration" button, log in with your HighLevel administrator account, approve permissions, and select the correct sub-account location.'
      }
    ],
    relatedPages: [
      { id: 'troubleshooting', title: 'Common Issues' },
      { id: 'support', title: 'Get Support' }
    ]
  },

  // --- SUPPORT ---
  {
    id: 'support',
    title: 'Get Support & Contact Help',
    description: 'Submit support requests and report issues directly to the NOLA team.',
    section: 'Support',
    readingTime: '3 min read',
    purpose: 'Guide users on how to request official support and submit help tickets.',
    hasTicketForm: true,
    steps: [
      'Fill out the "Create Support Ticket" form on this page.',
      'Enter a clear subject summarizing the issue (e.g., "Credits not showing after refill").',
      'Describe the issue in detail, listing what you did, what happened, and any error message.',
      'Select a Priority level: Low, Medium, or High.',
      'Click Submit Ticket.',
      'Review open tickets in the list below the form to track updates.'
    ],
    tips: [
      'Check the Common Issues page first to see if a quick fix is available for your problem before submitting a ticket.'
    ],
    relatedPages: [
      { id: 'troubleshooting', title: 'Common Issues' },
      { id: 'faq', title: 'Frequently Asked Questions' }
    ]
  }
];

export function getDocPageById(id: string): DocPage | undefined {
  return docsData.find((p) => p.id === id);
}

export function getNextAndPrevPages(id: string) {
  // Flatten structural items to calculate order
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
