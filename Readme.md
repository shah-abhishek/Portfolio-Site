# Contact Form Component

This project contains a **Contact Form Component** built with React, TailwindCSS, and Framer Motion. It is designed to allow users to send messages via a form integrated with Formspree.

## Features

- **Responsive Design**: Fully responsive and optimized for all devices.
- **Form Validation**: Ensures all required fields are filled before submission.
- **Formspree Integration**: Easily configurable endpoint for handling form submissions.
- **Toast Notifications**: Provides feedback for successful or failed submissions.
- **Dark Mode Support**: Adapts to light and dark themes.
- **Social Links**: Includes links to GitHub and LinkedIn.

## Tech Stack

- **React**: Frontend framework.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Framer Motion**: For smooth animations.
- **Lucide Icons**: Icon library for UI elements.

## Project Structure

src/ components/ Contact.jsx # Main contact form component ui/ button.jsx # Reusable button component input.jsx # Reusable input component textarea.jsx # Reusable textarea component use-toast.js # Toast notification hook


## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shah-abhishek/Portfolio-Site.git
   cd your-repo-name

2. Install dependencies:

    ```npm install```

3. Start the development server:
    
    ```npm run dev```

4. Open the app in your browser at http://localhost:5173.

    Build for Production
    To build the project for production:

    ``` npm run build ```

The production-ready files will be in the dist folder.

Preview Production Build
To preview the production build locally:

```npm run preview```

Environment Variables
Create a .env file in the root directory to configure environment variables. For example:

```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```
Replace YOUR_FORM_ID with your actual Formspree endpoint.

**Usage**
1. Update the `formSpreeEndpoint` in `Contact.jsx` with your Formspree endpoint.
2. Customize the component styles and content as needed.

**License**
This project is licensed under the MIT License.

**Contact**  
If you have any questions or suggestions, feel free to reach out:

- **Email**: [abhikumar0123252@gmail.com](mailto:abhikumar0123252@gmail.com)
- **GitHub**: [shah-abhishek](https://github.com/shah-abhishek)
- **LinkedIn**: [Abhishek Kumar](https://linkedin.com/in/abhishek-kumar-916308174)



