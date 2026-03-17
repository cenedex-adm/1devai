# 1Dev.AI Website Bug Fixes

## Completed

- [x] 1. Fix images not loading on various sections (especially services page) - Updated to use working Unsplash URLs
- [x] 2. Services page: Fix "Read More" links to be clickable - Added proper href links to contact section
- [x] 3. Services page: Add space between "to" and "help" in first paragraph - Added space
- [x] 4. Fix 1DEV.AI logo click to properly redirect to homepage from any page - Fixed with router navigation
- [x] 5. Test and fix "Send us a project" contact form submission - All forms now use Formspree
- [x] 6. Hide "Portfolio" tab from navigation (redirects to homepage incorrectly) - Removed from nav
- [x] 7. Fix "Get started today" button on SaaS Tools page - Now links to /#contact
- [x] 8. Fix Process, Blog, Contact tabs to navigate properly from any page - Fixed navigation logic
- [x] 9. Move FAQ section from homepage to its own /faq page and add to navbar - Created /faq route
- [x] 10. Fix navigation buttons to work from any page (not just homepage) - Fixed with router logic

## Additional Improvements Made

- All form components (FloatingLeadForm, InlineLeadForm, ExitIntentPopup) now submit to Formspree
- Added visual feedback for form submission (success/error states)
- Updated footer quick links (removed Portfolio, added FAQ, SaaS Tools)
- Made CTA buttons on homepage link to contact section
