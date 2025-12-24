# Jeya Portfolio

A modern, interactive personal portfolio website built with React, Vite, and Three.js. Features a 3D hero section with an animated cute robot that responds to user interactions.

## Features

- **3D Hero Section**: Interactive 3D scene with a cute robot that waves, follows mouse movement, and performs hug animations
- **Bubbles and Sparkles**: Ambient floating bubbles and twinkling sparkles for visual appeal
- **Responsive Design**: Optimized for various screen sizes
- **Fast Development**: Built with Vite for lightning-fast hot module replacement
- **TypeScript Support**: Full TypeScript integration for better development experience

## Technologies Used

- **React 19**: Latest React with modern hooks and features
- **Vite**: Fast build tool and development server
- **Three.js**: 3D graphics library
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/postprocessing**: Post-processing effects for Three.js
- **TypeScript**: Type-safe JavaScript
- **ESLint**: Code linting and formatting

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jeyamuruganR/myportfolio-.git
   cd jeyaportfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
jeyaportfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/
│   │   ├── com/
│   │   │   └── Hero3D.tsx  # 3D hero component
│   │   ├── fonts/          # Font files
│   │   ├── images/         # Image assets
│   │   ├── pages/
│   │   │   └── herosection.jsx  # Hero section component
│   │   └── styles/
│   │       └── herosectionstyle.css  # Hero section styles
│   ├── App.css             # Main app styles
│   ├── App.jsx             # Main app component
│   └── main.jsx            # App entry point
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
└── eslint.config.js        # ESLint configuration
```

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).
