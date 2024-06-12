import cors from 'cors';
import express from 'express';
import fetch from 'node-fetch'; // Import the fetch function

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.set('trust proxy', true);

app.get('/', async (req, res) => {
    try {
        const response = await fetch('https://restcountries.com/v2/all?fields=name,region,area');
        const countries = await response.json();
        res.json(countries);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

app.use(express.urlencoded({
    credentials: true,
    extended: true
}));

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
