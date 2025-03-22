const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/db.js');

// ENV config
dotenv.config();

// DB connection
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON body

// Routes
const studentRoutes = require('./src/routes/studentRoutes.js');
app.use('/api/students', studentRoutes);

// admin route
const adminRoutes = require('./src/routes/adminRoutes.js');
app.use('/api/admin', adminRoutes);

// representative toute

const representativeRoute = require('./src/routes/representative.routes.js');
app.use('/api/representativeRoute', representativeRoute);
// email sending

// ✅ Import the sendEmail function from the correct file path
const sendEmail = require('./src/utils/sendEmail.js'); // adjust the path if needed!


app.get('/send-test-email', async (req, res) => {
    try {
        await sendEmail(
            'amitmankar1052@gmail.com',           // Replace with your email
            'Evento App - Test Email 🚀',
            'Hello bro! This is a test email from Evento!'
        );
        res.send('✅ Email sent successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send(' Failed to send email');
    }
});


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
