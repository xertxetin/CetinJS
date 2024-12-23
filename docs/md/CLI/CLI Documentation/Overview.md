## Features
- **Minimalist Design:** CetinJS is designed with performance and reliability in mind. Every new command is thoroughly tested and approved before being added to the framework.
- **High Performance:** By containing only necessary commands, your applications run faster and more efficiently.
- **Reliability:** Rigorous testing ensures the reliability of every command added to the framework.
- **Vanilla JavaScript:** Developed using pure JavaScript, making it easy to learn and use.
- **Easy Integration:** Easily integrate CetinJS into your existing projects.
- **Modular Structure:** Customizable modular structure to meet your specific needs.
- **Comprehensive Documentation:** Extensive documentation to help users learn and use the framework more easily.
- **Android, iOS, and Electron Bridging:** Built-in support for creating bridges and local connections for Android, iOS, and Electron applications. This allows developers to create seamless and efficient integrations with native features and functionalities across different platforms.
- **Compression and Low Footprint:** CetinJS is optimized for low file sizes and efficient performance, ensuring your applications load quickly and run smoothly.
- **Packaging and Testing Environment:** CetinJS provides robust packaging and testing tools to help developers ensure their applications are production-ready and perform well across different environments.

## Platform
CetinJS supports multiple platforms to ensure your applications run smoothly across different environments. Below are the supported platforms and their descriptions:

- [x] **Browser HTML:** CetinJS can be seamlessly integrated into any web application running in modern browsers. This allows for building responsive and dynamic web applications with ease.
- [x] **Webview Android:** CetinJS offers support for Android WebView, enabling developers to create hybrid mobile applications that leverage web technologies.
- [ ] **Webview iOS:** With support for iOS WebView, CetinJS allows developers to build hybrid iOS applications using the same codebase as their web applications.
- [ ] **Webview Electron:** CetinJS can be used to create cross-platform desktop applications with Electron, providing a native-like experience using web technologies.

<!--![CetinJS Screenshot](https://github.com/xertxetin/CetinJS/raw/screenshot.png)-->
https://github.com/xertxetin/CetinJS/assets/122017752/2fc4560c-be92-4963-b712-958f3ae2e76f

## Installation
To start using CetinJS, you can install it via git:

```bash
https://github.com/xertxetin/CetinJS/releases/download/v1.0.0/CetinJS-Blank-Starter-1.0.0.zip
```

## Version Information
CetinJS is currently in development and not yet available for production use. Please check back for updates and new releases.

#### Latest Release
For more information and to see all available versions, visit the <a href="https://github.com/xertxetin/CetinJS/releases"><img src="https://img.shields.io/badge/version-1.0.0-blue.svg"></a>

## Getting Started
Here's a quick example to get you started with CetinJS. After downloading the blank starter project, follow these steps:

1. **Install Dependencies:**
```bash
npm install
```

2. **Start in Developer Mode:**
```bash
npm start
```
This command will start the project in developer mode for testing.

3. **Build the Project:**
```bash
npm run build
```
This command will compile the project.

4. **Test Production Version:**
```bash
npm run web
```
This command will test the production version of the project.

5. **Start Android Studio Project:**
```bash
npm run android
```
This command will start the project in Android Studio.

With these steps, you can download the blank project template, install dependencies, and start developing with CetinJS.

## Architecture

CetinJS is built with TypeScript and Node.js, ensuring type safety and modern JavaScript features. The framework is modular and highly customizable, making it suitable for various types of projects.

#### Core Components
- **Core Module:** Contains the essential functionality and utilities needed for the framework to function.
- **UI Components:** A set of pre-built components to speed up development.
- **API Integration:** Tools for seamless integration with external APIs.
- **State Management:** Efficient state handling for dynamic applications.

#### Development Environment
- **Node.js:** Supports Node 10.3+, but the latest Node LTS is always recommended. Follow development on the open-source [GitHub repository](https://github.com/xertxetin/CetinJS).
- **TypeScript:** Utilized for type safety and modern JavaScript features.

#### Best Practices
- **Modular Design:** Encourage splitting your code into modules for better maintainability.
- **Consistent Naming Conventions:** Follow consistent naming conventions to improve code readability.
- **Code Reviews:** Regular code reviews to maintain code quality and share knowledge.

## Troubleshooting

#### Common Issues
1. **Node Version**
- Make sure the latest Node LTS is installed. See Node & npm environment setup [here](https://nodejs.org/en/download/).
- Verify your Node version with:
```bash
node -v
```

2. **NPM Permissions**
- If you encounter permission issues with npm, consider using a Node version manager like [nvm](https://github.com/nvm-sh/nvm).
- Install nvm and then install Node:
```bash
nvm install --lts
nvm use --lts
```

3. **Module Not Found**
- Ensure all dependencies are installed:
```bash
npm install
```

4. **Environment Variables**
- Check if all required environment variables are set correctly. Refer to the `.env.example` file in the project root.

5. **Build Errors**
- If you encounter build errors, clean the npm cache and rebuild:
```bash
npm cache clean --force
npm run build
```

6. **Outdated Packages**
- Regularly check and update outdated packages:
```bash
npm outdated
npm update
```

For further assistance, please refer to our [GitHub issues page](https://github.com/xertxetin/CetinJS/issues) or contact us at [info@cetinjs.com](mailto:info@meforcetechnology.com).

