# Portfolio Website

A modern, responsive portfolio website showcasing photography and computer science work.

## Features

- **Homepage**: Welcome section with introduction to photography and CS work
- **Photography Page**: Gallery of photographic work organized by category
- **Computer Science Page**: Showcase of software projects and technical work
- **About Me Page**: Personal information, skills, and contact details

## Technologies Used

- React 18
- React Router DOM 6
- CSS3 with modern animations
- Responsive design

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

Create an optimized production build:
```bash
npm run build
```

## Customization

### Adding Your Own Photos

Edit `/src/pages/Photography.js` and replace the placeholder images in the `photos` array with your actual photo URLs.

### Adding Your Projects

Edit `/src/pages/ComputerScience.js` and update the `projects` array with your actual projects.

### Updating Contact Information

Edit `/src/pages/AboutMe.js` to add your email, GitHub, and LinkedIn links.

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Homepage.js
│   │   ├── Homepage.css
│   │   ├── Photography.js
│   │   ├── Photography.css
│   │   ├── ComputerScience.js
│   │   ├── ComputerScience.css
│   │   ├── AboutMe.js
│   │   └── AboutMe.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## License

MIT
