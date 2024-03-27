# Zenkoders | Project Structure - NEXT JS

## public

- **assets**: Static Images

## src

- **components**

  - Button
    - index.tsx
  - HigherOrderComponent
    - index.tsx

- **contextAPI || Redux || Zustang || Or any state management package**

  - _Add your state management files here._

- **mocks**

  - _Add your mock data files here_

- **hooks**

  - _Add your custom hooks here_

- **libs**

  - Add libs extension here.

- **providers**

  - All providers that are used in your \_app.tsx should be separately defined in providers folder.

- **Schema**

  - Schema related to Formik, Yup or React Hook form should be planed in here with specific file name.
  - If NextJS Apis are used so then the back-end database modules schema should be defined here

- **pages**

  - api
    - _Add your API routes here_
  - users
    - [uid].tsx
    - index.tsx
  - auth
    - login.tsx
    - register.tsx

- **styles**

  - global.css

- **types**

  - interfaces
    - user.interface.ts
  - enums
    - subscriptionStatus.enum.ts

- **utils**

  - _Add utility functions here (e.g., date formatting, string manipulation)_

- **config**

  - _Add configuration files here (e.g., theme, app settings)_
  - Any configuration required in your project should be added in config file. For example: Fonts Configuration

- **services**

  - API.ts
  - AxiosRequests.ts

- **views**
  - Registration
    - index.tsx

## Project Files

- .env.example
- .env.staging
- .env.production
- .gitignore
- next.config.js
- package.json
- README.md
