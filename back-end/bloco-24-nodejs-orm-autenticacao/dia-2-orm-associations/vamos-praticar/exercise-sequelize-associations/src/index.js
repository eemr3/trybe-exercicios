const express = require('express');
require('dotenv').config();
const Routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/plans', Routes.PlansRoutes);
app.use('/patients', Routes.PatientsRoutes);
app.use('/surgeries', Routes.SurgeriesRouts);
app.use('/patient-surgeries', Routes.PatientSurgeriesRoutes);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
