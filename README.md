# Nestify - Student Accommodation Platform

A modern student accommodation platform that helps students discover trusted hostels, PGs, and tiffin services. This project has been converted from PHP to a Node.js + Express backend with pure HTML/CSS/JS frontend.

## 📁 Project Structure

```
nestify/
├── frontend/          ← Pure HTML + CSS + JS
│   ├── index.html
│   ├── hostels.html
│   ├── hostel-details.html
│   ├── tiffin.html
│   ├── services.html
│   ├── contact.html
│   ├── feedback.html
│   ├── login.html
│   ├── register.html
│   ├── verify-otp.html
│   ├── dashboard.html
│   ├── style.css
│   ├── login.css
│   ├── config.js
│   └── Email logo.png
├── backend/           ← Node.js + Express
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   ├── .env
│   └── routes/
│       ├── auth.js
│       ├── otp.js
│       ├── data.js
│       └── feedback.js
│   └── data/
│       └── staticData.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MySQL/MariaDB
- npm or yarn

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file with your database credentials
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=otp_login
SESSION_SECRET=nestify_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
PORT=5000
FRONTEND_URL=http://localhost:3000
```

### 2. Database Setup

Create a MySQL database named `otp_login` and run the following SQL:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    feedback TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Start Backend Server

```bash
cd backend
npm start
# or for development
npm run dev
```

The backend will run on `http://localhost:5000`

### 4. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# You can use any static file server
# Using Python:
python -m http.server 3000

# Using Node.js:
npx serve .

# Using Live Server (VS Code extension)
# Right-click on index.html and "Open with Live Server"
```

The frontend will run on `http://localhost:3000`

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### OTP Verification
- `POST /api/otp/send-otp` - Send OTP to email
- `POST /api/otp/verify-otp` - Verify OTP

### Data
- `GET /api/data/hostels` - Get all hostels
- `GET /api/data/hostels/:id` - Get specific hostel
- `GET /api/data/tiffin` - Get tiffin plans
- `GET /api/data/services` - Get services
- `GET /api/data/pgs` - Get PGs
- `GET /api/data/villas` - Get villas

### Feedback
- `POST /api/feedback` - Submit feedback

## 🔄 User Flow

1. **Registration**: Users create account with email, name, and password
2. **Login**: Users login with credentials
3. **OTP Verification**: 6-digit OTP sent to email for verification
4. **Dashboard**: Access to personalized dashboard after successful verification
5. **Browse**: Explore hostels, PGs, and tiffin services
6. **Feedback**: Submit reviews and feedback

## 📧 Email Configuration

The application uses Nodemailer for OTP emails. Update the `.env` file:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

**Note**: For Gmail, use an App Password instead of your regular password.

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MySQL2** - Database driver
- **Nodemailer** - Email service
- **bcryptjs** - Password hashing
- **express-session** - Session management
- **dotenv** - Environment variables

### Frontend
- **Pure HTML5** - Markup
- **CSS3** - Styling (identical to original)
- **Vanilla JavaScript** - Dynamic functionality
- **Fetch API** - API communication

## 🔧 Configuration

### Production Deployment

For production deployment:

1. **Backend**:
   - Set `NODE_ENV=production`
   - Update `FRONTEND_URL` to your domain
   - Use HTTPS for secure cookies
   - Set `cookie: { secure: true }` in session config

2. **Frontend**:
   - Update `config.js`:
   ```js
   window.ENV_API_BASE = 'https://your-domain.com/api';
   ```

### Database Migration

If migrating from the original PHP version:

1. Export existing data from PHP database
2. Import into new MySQL database
3. Update database credentials in `.env`

## 🎨 UI/UX Preservation

- **Zero UI changes** - All pages look identical to original
- **Same CSS** - `style.css` and `login.css` copied exactly
- **Same animations** - All hover effects and transitions preserved
- **Same layout** - Header, footer, and page structure unchanged
- **Same colors** - All color schemes and gradients maintained

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check MySQL service is running
   - Verify database credentials in `.env`
   - Ensure database `otp_login` exists

2. **Email Not Sending**
   - Verify Gmail App Password
   - Check email credentials in `.env`
   - Ensure less secure apps access is enabled

3. **CORS Errors**
   - Check `FRONTEND_URL` in `.env`
   - Verify frontend is running on correct port

4. **Session Issues**
   - Clear browser cookies
   - Check session secret in `.env`
   - Verify session configuration

### Debug Mode

Enable debug logging by setting:
```env
NODE_ENV=development
```

## 📝 Features

- ✅ User registration and login
- ✅ OTP-based email verification
- ✅ Secure session management
- ✅ Password hashing with bcrypt
- ✅ Dynamic hostel and tiffin data loading
- ✅ Feedback submission system
- ✅ Responsive design
- ✅ Modern UI/UX (preserved from original)
- ✅ RESTful API architecture
- ✅ Environment-based configuration

## 🚀 Deployment Options

### Railway
1. Push code to GitHub
2. Connect repository to Railway
3. Set environment variables in Railway dashboard
4. Deploy both frontend and backend

### Vercel (Frontend)
1. Push frontend to GitHub
2. Connect to Vercel
3. Update `config.js` with backend URL

### Heroku
1. Create backend app
2. Set environment variables
3. Deploy using Heroku CLI

## 📞 Support

For support or questions:
- Email: nestifyn@gmail.com
- Phone: +91 81768 45352

## 📄 License

MIT License - Feel free to use this project for learning and development purposes.

---

**Note**: This project maintains 100% UI/UX fidelity with the original PHP version while modernizing the backend architecture to Node.js + Express.
