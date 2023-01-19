import * as PatientService  from '../services/patient'
import { Response, Request } from 'express'
import { CreatePatientRequest } from '../requests/CreatePatientRequest'
import { UpdatePatientRequest } from '../requests/UpdatePatientRequest'

export class PatientController {
    static async createPatient(req: Request, res: Response) {
        try {
            const patientData: CreatePatientRequest = req.body
            const patient = await PatientService.createPatient(patientData)
            res.status(201).json({ patient })
        } catch (err) {
            res.status(400).json(`Erro: ${err}`)
        }
    }

    static async getPatient(req: Request, res: Response) {
        try {
            const { patientId } = req.params
            const patient = await PatientService.getPatient(patientId)
            res.status(200).json({ patient })
        } catch (error) {
            res.status(400).json({ error: error })
        }
    }

    static async getAllPatients(req: Request, res: Response) {
        try {
            const patients = await PatientService.getAllPatients()
            res.status(200).json({ patients })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    static async updatePatient(req: Request, res: Response) {
        try {
            const { patientId } = req.params
            const patientData: UpdatePatientRequest = req.body
            const patient = await PatientService.updatePatient(patientId, patientData)
            res.status(200).json({ patient })
        } catch (error) {
            res.status(400).json({ error: error })
        }
    }

    static async deletePatient(req: Request, res: Response) {
        try {
            const { patientId } = req.params
            await PatientService.deletePatient(patientId)
            res.status(204).send()
        } catch (error) {
            res.status(400).json({ error: error })
        }
    }
}