# System Design A-Z Website - User Guide

## Getting Started

This document provides instructions on how to run the System Design A-Z website locally and how to contribute to its development.

## Prerequisites

Before running the website, ensure you have the following installed:
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- [Git](https://git-scm.com/downloads) (optional, for cloning the repository)
- A local web server (optional, for advanced development)

## Running the Website Locally

### Method 1: Direct File Access (Simplest)

1. **Download the Code**
   - Clone the repository:
     ```
     git clone https://github.com/Rahul2251999/system-design-az.git
     ```
   - Or download the ZIP file from GitHub and extract it

2. **Open the Website**
   - Navigate to the extracted folder
   - Double-click on `index.html` or open it with your web browser

3. **Navigate the Website**
   - Use the navigation menu to explore different sections
   - Click on links to access detailed content pages

### Method 2: Using a Local Web Server (Recommended for Development)

1. **Install a Local Web Server**
   - Option 1: Use Python's built-in HTTP server
     - For Python 3.x:
       ```
       python -m http.server
       ```
     - For Python 2.x:
       ```
       python -m SimpleHTTPServer
       ```
   - Option 2: Use Node.js with a package like `http-server`
     - Install http-server globally:
       ```
       npm install -g http-server
       ```
     - Run the server:
       ```
       http-server
       ```

2. **Access the Website**
   - Open your browser and navigate to:
     - `http://localhost:8000` (for Python server)
     - `http://localhost:8080` (for http-server)

## Website Structure

The website is organized into the following main sections:

1. **Home**: Introduction to the website and overview of system design
2. **Fundamentals**: Core concepts of system design from beginner to advanced levels
3. **Real-World Examples**: Case studies of system designs for popular platforms
4. **Implementation**: Practical implementation details and code examples

## Content Navigation

- Use the main navigation menu to switch between major sections
- Each section has a sidebar with links to specific topics
- Use the "Next Article" links at the bottom of each page to follow the recommended learning path

## Contributing to the Website

### Adding New Content

1. Create new HTML files in the appropriate content directory:
   - `/content/fundamentals/` for fundamental concepts
   - `/content/examples/` for real-world examples
   - `/content/implementation/` for implementation details

2. Follow the existing HTML structure, including:
   - Proper head section with meta tags
   - Navigation and sidebar elements
   - Content structure with sections and headings

3. Update the sidebar navigation in related pages to include links to your new content

### Modifying Styles

1. CSS files are organized by purpose:
   - `styles.css`: Main styles for the entire website
   - `fundamentals.css`, `examples.css`, etc.: Section-specific styles
   - `content-page.css`: Styles for content page layout and elements

2. Make changes to the appropriate CSS file based on what you're modifying

### Adding Images

1. Place images in the appropriate directory:
   - `/images/` for general website images
   - `/assets/diagrams/` for system design diagrams
   - `/assets/icons/` for icons and small graphics

2. Reference images in HTML using relative paths:
   ```html
   <img src="../../images/example.jpg" alt="Description of image">
   ```

## Troubleshooting

### Common Issues

1. **Images Not Loading**
   - Check that file paths are correct and use relative paths
   - Ensure image files exist in the specified location

2. **Styles Not Applied**
   - Verify that CSS files are properly linked in the HTML head
   - Check for CSS syntax errors

3. **Links Not Working**
   - Ensure href attributes use correct relative paths
   - Check for typos in filenames or paths

### Getting Help

If you encounter issues not covered in this guide, please:
1. Check the GitHub repository for open issues
2. Create a new issue with a detailed description of the problem
3. Contact the repository maintainer for assistance

## License

This project uses copyright-free images and is available for educational purposes.

---

Thank you for using the System Design A-Z website! We hope it helps you learn and master system design concepts from beginner to advanced levels.
