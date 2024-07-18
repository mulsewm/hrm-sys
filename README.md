
# HR Management System

This is an HR Management System built using the MEAN stack (Mysql, Express.js, Angular, and Node.js) with PostgreSQL as the database instead of MongoDB. This application allows you to manage candidates, companies, departments, and employees.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

```bash
git clone [mulsewm](https://github.com/mulsewm/hrm-sys)
cd hr-management
```

2. Install backend dependencies:

```bash
cd hr-management-backend
npm install
```

3. Install frontend dependencies:

```bash
cd hr-management-frontend
npm install
```

4. Set up the PostgreSQL database:

- Create a PostgreSQL database named `hr_management`.
- Update the database configuration in `hr-management-backend/config/database.js` with your PostgreSQL credentials.

```javascript
const { Pool } = require('pg');

const pool = new Pool({
  user: '',
  host: 'localhost',
  database: '',
  password: '',
  port: ,
});

module.exports = pool;
```

## Running the Application

1. Start the backend server:

```bash
cd backend
npm start
```

The backend server will run on `http://localhost:3000`.

2. Start the frontend server:

```bash
cd hr-management-frontend
ng serve
```

The frontend server will run on `http://localhost:4200`.

## Features

- Add, edit, and delete candidates.
- View a list of candidates.
- Confirmation dialog for deleting candidates.
- Toast notifications for successful actions.

## Folder Structure

### Backend

```
hr-management-backend/
│
├── controllers/
│   ├── candidateController.js
│   └── ...
├── models/
│   ├── candidateModel.js
│   └── ...
├── routes/
│   ├── candidateRoutes.js
│   └── ...
├── config/
│   └── database.js
├── server.js
└── package.json
```

### Frontend

```
hr-management-frontend/
│
├── src/
│   ├── app/
│   │   ├── candidates/
│   │   │   ├── candidate-list/
│   │   │   │   ├── candidate-list.component.html
│   │   │   │   ├── candidate-list.component.scss
│   │   │   │   └── candidate-list.component.ts
│   │   │   ├── candidate-detail/
│   │   │   │   ├── candidate-detail.component.html
│   │   │   │   ├── candidate-detail.component.scss
│   │   │   │   └── candidate-detail.component.ts
│   │   │   ├── edit-candidate-dialog/
│   │   │   │   ├── edit-candidate-dialog.component.html
│   │   │   │   ├── edit-candidate-dialog.component.scss
│   │   │   │   └── edit-candidate-dialog.component.ts
│   │   │   ├── delete-confirmation-dialog/
│   │   │   │   ├── delete-confirmation-dialog.component.html
│   │   │   │   ├── delete-confirmation-dialog.component.scss
│   │   │   │   └── delete-confirmation-dialog.component.ts
│   │   │   ├── candidate.service.ts
│   │   │   ├── candidate.model.ts
│   │   │   └── candidate.module.ts
│   │   ├
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── material.module.ts
```

## Technologies Used

- Angular
- Node.js
- Express.js
- PostgreSQL
- Angular Material

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b my-new-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-new-feature`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```


