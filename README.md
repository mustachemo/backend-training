# backend training

backend training for hackmerced team workshop! 09/24/23

# How-to

1. Installing Node.js

   - **MacOS:**

     - You can install Node.js through Homebrew, which is a macOS package manager.
       - Install Homebrew: [https://docs.brew.sh/Installation](https://docs.brew.sh/Installation)
     - Or straight through the website
       - Install Node.js: [https://nodejs.org/en](https://nodejs.org/en)

   - **Windows:**

     - Install Node.js through the official website: [https://nodejs.org/en](https://nodejs.org/en)

   - **Verify installation with these commands:**
     ```bash
     node -v
     npm -v
     ```

2. Create a package.json file

   The `package.json` file is essential for managing your Node.js project's dependencies and metadata. You can create one using the following command:

   ```bash
   npm init

   ```

3. Install required packages

   To create a web application with Node.js, you can use the Express.js framework. Install it using npm with the following command along with some "required" packages:

   ```bash
   npm install express mongoose nunjucks dotenv morgan
   ```

4. Create a public folder for assets
5. Create a src folder and add the main entry js file there, along with MVC folders
6. Rest will be followed as during the session...
