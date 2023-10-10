import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import fs from 'fs';
import {validateEmail} from './helpers.js'



const app = express();

const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const emailService = 'serviceid';
const emailTemplate = 'template_kga9xdg';
const userId = '8Er8aJtt3Q5DM1IqH';
const interval = 60 * 60 * 1000;

app.post('/signup', async (req, res) => {
  try {
    const { email, name, message } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    if (!name) {
      return res.status(400).json({ message: 'Name cannot be empty' });
    }

    if (!message) {
      return res.status(400).json({ message: 'Message cannot be empty' });
    }

    let userData = [];

    if (fs.existsSync('data.json')) {
      try {
        const data = await fs.promises.readFile('data.json', 'utf8');
        userData = JSON.parse(data);
      } catch (err) {
        console.error('Error reading data.json:', err);
      }
    }

    const existingMessage = userData.find((user) => user.message === message && user.email === email);
    if (existingMessage) {
      return res.status(400).json({ message: 'It seems like you have sent the same message again. We received your initial message.' });
    }

    userData.push({ email, name, message });

    try {
      await fs.promises.writeFile('data.json', JSON.stringify(userData, null, 2));
    } catch (err) {
      console.error('Error writing data.json:', err);
    }

    return res.status(200).json({ message: 'Your message has been sent successfully, and I will get back to you shortly.', userData });
  } catch (err) {
    console.error('Error during sending message:', err);
    return res.status(500).json({ error: 'An error occurred during sending message' });
  }
});


// const sendEmailsAtIntervals = async () => {
//   try {
//     // Read data from data.json
//     const data = await JSON.parse(fs.readFileSync('data.json', 'utf8'));

//     data.forEach((entry) => {
//       const { name, email, message } = entry;

//       const templateParams = {
//         from_name: 'My Portfolio',
//         to_name: name,
//         to_email: email,
//         message: message,
//       };

//       emailjs.send(emailService, emailTemplate, templateParams, userId);
//     });
//   } catch (error) {
//     console.error('Error reading data.json:', error);
//   }
// }

// // Initial call to send emails when the server starts
// sendEmailsAtIntervals();

// // Set up the interval to send emails periodically
// setInterval(sendEmailsAtIntervals, interval)



// app.post('/signup', async (req, res) => {
//   try {
//     const { email, name, message } = req.body;

//     if (!validateEmail(email)) {
//       return res.status(400).json({ message: 'Invalid email address' });
//     }

//     if (!name) {
//       return res.status(400).json({ message: 'Name cannot be empty' });
//     }

//     if (!message) {
//       return res.status(400).json({ message: 'Message cannot be empty' });
//     }

//     let userData = [];

//     if (fs.existsSync('data.json')) {
//       try {
//         const data = await fs.promises.readFile('data.json', 'utf8');
//         userData = JSON.parse(data);
//       } catch (err) {
//         console.error('Error reading data.json:', err);
//       }
//     }

//     const existingMessage = userData.find((user) => user.message === message && user.email === email);
//     if (existingMessage) {
//       return res.status(400).json({ message: 'It seems like you have sent the same message again. We received your initial message.' });
//     }

//     userData.push({ email, name, message });

//     try {
//       await fs.promises.writeFile('data.json', JSON.stringify(userData, null, 2));
//     } catch (err) {
//       console.error('Error writing data.json:', err);
//     }

//    return res.status(200).json({ message: 'Your message has been sent successfully, and I will get back to you shortly.',
//      userData });
//   } catch (err) {
//     console.error('Error during sending message:', err);
//     return res.status(500).json({ error: 'An error occurred during sending message' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


