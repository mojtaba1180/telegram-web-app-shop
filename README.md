# Telegram Web App Shop

Welcome to the `Telegram Web App Shop` repository! This project is an innovative e-commerce solution built as a Telegram web app using modern web technologies. It integrates with a backend API to deliver a seamless shopping experience.

---

## 🖥️ Backend Project

This project relies on a backend API developed by my friend. You can find it here:  
[Backend Repository: Ecommerce Project](https://github.com/Ecarin/Ecommerce.Project)

The backend provides the necessary APIs to handle product management, user authentication, orders, and more.

---

## 🛠️ Project Overview

This project is a web-based e-commerce platform featuring:
- **Core Features**:  
  - Product and category browsing
  - User account management
  - Cart and order checkout
  - Discounts and promotions
- **Architecture**:  
  - Modular React-based front-end design
  - Integration with Telegram WebApp API for seamless user experience
- **Design**:  
  - Built with **TailwindCSS** for responsive and visually appealing interfaces
- **API Interaction**:  
  - Connects to backend API endpoints for data operations

---

## 📂 Project Structure

### **Public**
- Contains static assets like fonts, images, and the Telegram WebApp integration script (`telegram.js`).

### **Src**
- **Components**: Reusable React components for UI elements, such as product cards and lists.
- **Containers**: Higher-level components organizing page structures, like sliders and admin panels.
- **Framework**: API interaction logic, including endpoints for products, orders, and user data.
- **Pages**: Specific page layouts for different user roles (admin, user) and features (cart, profile).
- **Helpers**: Utility functions to enhance reusability and maintainability.
- **Styles**: SCSS and CSS files for styling components and layouts.

---

## ⚠️ Known Issues and Limitations

- **Environment Configuration**:  
  The `.env` file must be configured to set up Telegram WebApp integration and connect with the backend API.
  
- **Development Phase**:  
  This project is still in development and may have incomplete features or bugs.

- **Backend Dependency**:  
  Full functionality requires a running instance of the backend API.

---

## 🚀 Future Plans

Planned improvements include:
- **Feature Expansion**: Adding support for analytics and advanced admin controls.
- **Error Handling**: Enhancing error messages and fail-safes for edge cases.
- **Performance Optimization**: Refining front-end and API calls for better responsiveness.

---

## 📝 How to Use

Follow these steps to set up and run the project:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mojtaba1180/telegram-web-app-shop.git
   cd telegram-web-app-shop
   ```

2. **Install dependencies**:
   ```bash
   pnpm i
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory with the following variables:
   ```
   VITE_APP_BACKEND_URL=<Backend API URL>
   VITE_APP_TELEGRAM_BOT_TOKEN=<Telegram Bot Token>
   ```

4. **Run the project**:
   Start the development server:
   ```bash
   pnpm dev
   ```

5. **Access the application**:
   Open the browser at:
   ```
   http://localhost:3000
   ```

6. **Integrate with the backend**:
   Ensure the backend API is running and accessible at the configured `REACT_APP_BACKEND_URL`.

---

## 🧰 Tools and Technologies

- **Frontend Framework**: React
- **Styling**: TailwindCSS, SCSS
- **Build Tool**: Vite
- **API Integration**: Axios

---

## 📞 Contact

If you have any questions, suggestions, or feedback about this project, feel free to reach out:

- **GitHub Profile**: [My GitHub](https://github.com/mojtaba1180)  
- **Telegram**: [@mojtaba1180](https://t.me/mojtaba1180)

---

Let me know if you'd like me to save this as a downloadable file.
