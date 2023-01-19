import express, { json } from 'express'
import { PatientController } from '../controllers/patients'

const patientsRoutes  = express.Router()

patientsRoutes.use(json())

patientsRoutes.get('/patients/:patientId', PatientController.getPatient)
patientsRoutes.post('/patients', PatientController.createPatient)
patientsRoutes.delete('/patients/:patientId', PatientController.deletePatient)
patientsRoutes.put('/patients/:patientId', PatientController.updatePatient)

export default patientsRoutes 