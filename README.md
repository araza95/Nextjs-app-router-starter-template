
---

# 🌐 Zenkoders | Project Structure - Next.js

---

## 📁 **public**

- **assets**: This folder contains all the static files such as images, icons, fonts, etc., used across the application.

---

## 📂 **src**

This is the core folder of the application where all the logic, components, and business modules reside.

### 🧩 **components**

- **Purpose**: Components are the reusable building blocks of the UI. Each component should be small, manageable, and focused on one thing.
  
  **Example**:
  - **Button**
    - `index.tsx`: Defines the button component and its related logic.
  
  - **HigherOrderComponent (HOC)**
    - `index.tsx`: Wraps other components to add extra functionality.

---

### 🌍 **State Management** (Context API / Redux / Zustand)

- **Purpose**: Manages the global state of the application. Based on the state management library of choice (e.g., Redux, Zustand, or Context API), store files and logic reside here.

  **Add your state management files here.**

---

### 📝 **mocks**

- **Purpose**: Mock data files used to simulate data during development or testing phases without connecting to real APIs.

  **Add mock data files here.**

---

### ⚙️ **hooks**

- **Purpose**: Custom hooks are used to encapsulate and reuse logic in various components.

  **Add your custom hooks here.**

---

### 📦 **libs**

- **Purpose**: Contains custom libraries or utility classes that can be reused throughout the app. For instance, helpers for calculations, formatting, etc.

  **Add custom libraries here.**

---

### 🛠️ **providers**

- **Purpose**: Defines providers for various functionalities such as global state (Redux, Context API), themes, or notification services. These are injected in `\_app.tsx` to wrap the entire application.

  **Examples**:
  - Toaster Provider
  - Theme Provider
  - Redux Provider

---

### 🛂 **Schema**

- **Purpose**: This folder holds the schema definitions for forms (Formik, Yup, React Hook Form) and Next.js API models, if needed.
  
  **Examples**:
  - Form Validation with Yup.
  - Database schema for backend modules.

---

### 📄 **pages**

This is where the routes and page components of your Next.js app are defined.

- **api**: API routes for server-side functionality.
  - `index.tsx`: Main entry for API routes.

- **users**
  - `[uid].tsx`: Dynamic user pages.
  - `index.tsx`: User listing or homepage.

- **auth**
  - `login.tsx`: Login page for user authentication.
  - `register.tsx`: Registration page for user signup.

---

### 🎨 **styles**

- **Purpose**: Contains global CSS, theme, and styling files. Use this folder for custom styles and to manage your theme settings.

  **Example**: 
  - `global.css`: Global styles applied across the application.

---

### 🛑 **types**

- **Purpose**: Defines type definitions, interfaces, and enums that are used throughout the app, ensuring type safety with TypeScript.

  **Examples**:
  - **interfaces**
    - `user.interface.ts`: Defines the structure of a user object.
  - **enums**
    - `subscriptionStatus.enum.ts`: Enumerates the possible subscription statuses.

---

### 🔧 **utils**

- **Purpose**: Utility functions or helper methods that can be reused throughout the app. These are often small, focused functions like date formatting, string manipulation, etc.

  **Add utility functions here.**

---

### ⚙️ **config**

- **Purpose**: Configuration files such as app settings, environment settings, and theme configuration.

  **Examples**:
  - Fonts configuration.
  - API base URLs for different environments.
  - Theme settings.

---

### 🖥️ **services**

- **Purpose**: Handles all API calls, setting up base URLs, and managing backend requests.

  **Examples**:
  - `API.ts`: Defines API call logic.
  - `AxiosRequests.ts`: Manages HTTP requests using Axios.

---

### 🖼️ **views**

- **Purpose**: Contains the pages of your application. Each folder under `views` represents a page or module.

  **Example**:
  - **Registration**
    - `index.tsx`: Registration page view.

---

## 📂 **Project Files**

- `.env.example`: Example environment file for reference.
- `.env.staging`: Environment variables for staging.
- `.env.production`: Environment variables for production.
- `.gitignore`: Defines what files should be ignored by Git.
- `next.config.js`: Configuration settings for the Next.js app.
- `package.json`: Metadata about the project and dependencies.
- `README.md`: The project's main documentation file.

---



