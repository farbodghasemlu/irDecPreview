# Documentation
## Overview
This document provides a detailed explanation of the frontend structure for the online furniture shop project. It is intended to help the backend developer understand how the frontend is organized and how to integrate backend functionality without dictating how the backend should be implemented.

## Project Structure
The project is organized as follows:
```
Root/
├── assets/               // Static assets like icons and images
├── lib/                  // Third-party libraries
├── scripts/              // Custom JavaScript files
├── theme/                // CSS and reusable components
├── views/                //  views for different pages
├── docs/        // Project documentation (this document)
└── README.md             // Quick start guide
```
## Directory Details
### 1. assets/
This folder contains all static assets used in the project.

Subdirectories:
icons/: SVG or font icons used across the site.

images/: Optimized images for products, banners, and other visuals.
> Notes:
All image paths in views are relative to the assets/ folder. For example:
```
<img src="/irDecPreview/assets/images/product.jpg" alt="Product Image">
```
If new images are added, they should be placed in the appropriate subfolder.
### 2. lib/
This folder contains third-party libraries required for the project.

Examples:
Bootstrap: For responsive design and prebuilt components.

jQuery: For DOM manipulation and AJAX calls.


> Notes:
Libraries are already included

If additional libraries are needed, they should be added here and linked in the relevant views.

### 3. scripts/
This folder contains custom JavaScript files for the project.

Key Files:
drawer.js: controlling any types of overlay.

locate.js: user coordinates.

>Notes:
All scripts are modular and reusable.

If new functionality is needed, create a new JavaScript file and link it in the relevant view.

### 4. theme/
This folder contains all CSS and reusable components.

Subdirectories:
base/: Global styles (e.g., typography, colors, resets).

components/: Reusable UI components (e.g., buttons, cards, modals).

collections/: Page-specific styles (e.g., categories.css, stores.css).

>Notes:
The base/ folder contains base CSS normalizations and classes.

Reuse components from components/ to maintain consistency.

Page-specific styles in collections/ are already linked to their respective views.

### 5. views/
This folder contains views for different pages.

Subdirectories:
products/: Views for product-related pages (e.g., product list, product details).

account/: Views for account management (e.g., login, registration, profile).

stores/: Views for store-related pages (e.g., store locator, store details).

help/: Views for help and support (e.g., FAQ, contact us).

manufacturers/: Views for manufacturer-related pages (e.g., manufacturer list, manufacturer details).

