/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import rateLimit from 'express-rate-limit';
import express from 'express';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
// import { add } from './add.js';
import helmet from 'helmet';

dotenv.config();

const app = express();

// Rate Limiting
const limiter = rateLimit({
    windowMs: 5000, // 15 minutes
    max: 20, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(limiter);
app.use(helmet());
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

app.get('/profile', (req, res) => {
    // req.setTimeout(3000);

    res.json({
        messsage: 'Welcome to Profile Page',
    });
});

app.listen(3008, () => {
    console.log('Example app listening on port http://localhost:3008');
});

// Mongoose with Indexing
// const userSchema = new mongoose.Schema({
//     productName: {},
//     email: {},
//     password: {},
// });

// 1 = Ascending Order
// -1 = Descending Order
// userSchema.index({ productName: 1 });

// module.exports = mongoose.model('Users', userSchema);
