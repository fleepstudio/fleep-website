FLEEP WEBSITE STARTER — VERSION 0.1

WHAT THIS IS
A static, mobile-first starter website for FLEEP:
- Discover page with sample publications, search and category filters
- Sample reader with page navigation and progress indicator
- Local PDF preview: choose a PDF on your device and view it in your browser
- Creator publishing information page
- About page

IMPORTANT LIMITATIONS
This is a front-end starter, not a production publishing platform.
- Sample publications and sample story pages are fictional.
- PDF preview is local to the visitor's browser. Files are NOT uploaded or stored online.
- Bookmarks last only while the page remains open.
- No user accounts, database, admin approval, paid memberships, creator payouts or payments.
- No real publication catalogue yet.

HOW TO TEST
1. Extract the ZIP.
2. Open index.html in a modern browser.
3. Try Discover, search, categories, Read, Save, and the PDF picker.
For best testing, use a modern browser. Some mobile browsers may open local PDFs in a separate viewer.

LOW-COST DEPLOYMENT PLAN
1. Create a GitHub account if you do not already have one.
2. Create a new public or private repository named fleep-website.
3. Upload index.html, styles.css, app.js and README.txt to the repository root.
4. In Cloudflare, create a Pages project and connect the GitHub repository.
5. For a plain static site, use no build command and set the output directory to / (repository root), following the current Cloudflare Pages instructions.
6. Test the temporary pages.dev address first.
7. Add fleep.co.ke as a custom domain in the Pages project and follow the DNS instructions Cloudflare displays. Do not guess or manually invent DNS records.
8. Confirm HTTPS works before announcing the site.

DOMAIN / SECURITY
The domain purchase does not itself provide hosting or email. Keep registrar login, email access, passwords, M-Pesa PIN and OTP private. Turn on two-factor authentication where available. Keep the domain renewal date (14 November 2027) in your calendar.

NEXT DEVELOPMENT PHASE
Connect a backend for creator accounts, secure PDF storage, publication metadata, moderation/admin approval, and persistent bookmarks. Evaluate file-size limits, bandwidth, backups, copyright reporting and age-safety before public creator uploads.
