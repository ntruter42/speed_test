import express from "express";
import { engine } from "express-handlebars";
import promise from "pg-promise";
import "dotenv/config";

const app = express();

app.use(express.static('public'));
app.engine('handlebars', engine({
	defaultLayout: 'main',
	viewPath: './views',
	layoutsDir: './views/layouts'
}));
app.set('view engine', 'handlebars');

const pgp = promise();
const db = pgp({
	connectionString: process.env.DB_URL,
	ssl: {
		rejectUnauthorized: false
	}
});

app.get('/', async function (req, res) {
	const rows = [];
	const times = [];
	const delays = [];

	for (let i = 0; i < 10; i++) {
		times.push(Date.now());
		rows.push(await db.manyOrNone(`SELECT * FROM speed.users`));
		delays.push((Date.now()) - times[i]);
	}

	res.render('index', {
		times,
		delays
	});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
	console.log(`App started on PORT: ${PORT}`);
});