# Hackathon_Documents

# Comfortly E-Commerce Platform

Welcome to the **Comfortly E-Commerce Platform** repository! Comfortly is a modern e-commerce marketplace focused on providing high-quality, customizable furniture through an intuitive and user-friendly platform.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Introduction
Comfortly bridges the gap between customer needs and market offerings by offering a diverse range of furniture products. From homeowners seeking stylish, ergonomic chairs to office managers furnishing workspaces, Comfortly caters to all.

### Key Goals:
- Deliver a seamless shopping experience.
- Provide customizable furniture options.
- Ensure fast and reliable order processing and delivery.

## Features
1. **Extensive Product Catalog**
   - Includes armchairs, sofas, desk chairs, park benches, and more.
   - Customizable materials and designs.

2. **User Roles**
   - **Visitors**: Browse and compare products.
   - **Users**: View, compare, and purchase items.
   - **Operators**: Manage backend operations and provide support.
   - **Admins**: Oversee orders, manage users, and add/remove products.

3. **Advanced Search and Filters**
   - Easy-to-use filters for categories, price range, and more.

4. **Secure Transactions**
   - Integrated payment gateways (e.g., Stripe, PayPal).
   - Customer data encryption for safety.

5. **Real-Time Order Tracking**
   - Updates on shipment and delivery.

6. **Responsive Design**
   - Fully responsive interface for seamless use across devices.

## Tech Stack
### Frontend
- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS

### Backend
- **CMS**: Sanity CMS for content management
- **API Integration**: Third-party APIs for payments and shipment tracking

### Database
- Sanity schemas for structured data storage

### Deployment
- Hosted on **Vercel** with CI/CD pipelines for updates

## System Architecture
Comfortly uses a modern, scalable system architecture:

1. **Frontend**: Built with Next.js for server-side rendering and optimized performance.
2. **Backend**: Sanity CMS and API-driven architecture.
3. **Third-Party Integrations**: Payment gateways and real-time shipment tracking.

_You can view the architecture diagram in the `/docs` folder._

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v18+)
- npm or yarn
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone (https://github.com/MustafaRaheel26/comfortly_h8.git)
   ```
2. Navigate to the project directory:
   ```bash
   cd comfortly
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the development server:
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production
To build the app for production:
```bash
npm run build
```
Then, start the production server:
```bash
npm start
```

## Folder Structure
```
comfortly/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Next.js pages
│   ├── styles/          # Tailwind CSS styles
│   ├── lib/             # Helper functions
│   └── sanity/          # Sanity schemas
├── docs/                # Documentation and diagrams
├── .env.local           # Environment variables
└── package.json         # Project configuration
```

## Scripts
| Script          | Description                        |
|-----------------|------------------------------------|
| `npm run dev`   | Starts the development server      |
| `npm run build` | Builds the app for production      |
| `npm run start` | Runs the production server         |
| `npm run lint`  | Lints the codebase for errors      |

## Contributing
We welcome contributions! To contribute:
1. Fork this repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature-name'`.
4. Push to your branch: `git push origin feature-name`.
5. Open a pull request.

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

## License
This project is licensed under the [MIT License](LICENSE).

---

Thank you for checking out Comfortly! For any questions or issues, feel free to open an issue or contact us at [mustafaraheel26@gmail.com].

