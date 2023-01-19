import request from 'supertest'
import app from '../../src/server'
import * as PatientService from '../../src/services/patient'

describe('Patient routes', () => {
    it('should create a patient', async () => {
        const patientData = {
            patientId: '123',
            name: 'Junior Apolinario',
            birthdate: '01/01/2000',
            email: 'fakejonh@example.com',
            address: '123 Main St'
        }

        const res = await request(app)
            .post('/patients')
            .send(patientData)

        expect(res.status).toBe(201)
        expect(res.body).toEqual({ patient: patientData })
    })

    it('should get a patient by id', async () => {
        const patient = {
            patientId: '123',
            name: 'Junior Apolinario',
            birthdate: '01/01/2000',
            email: 'fakejonh@example.com',
            address: '123 Main St'
        }

        const res = await request(app)
            .get('/patients/123')

        expect(res.status).toBe(200)
        expect(res.body).toEqual({ patient })
    })

    it('should get all patients', async () => {
        const patients = [
            { 
                patientId: '123', 
                name: 'Junior Apolinario', 
                birthdate: '01/01/2000', 
                email: 'fakejonh@example.com', 
                address: '123 Main St' 
            }, 
            { 
                patientId: '456', 
                name: 'Jane Apolinario', 
                birthdate: '01/01/2000', 
                email: 'fakejonh@example.com', 
                address: '456 Main St' 
            }
        ];

        const res = await request(app)
            .get('/patients')

        expect(res.status).toBe(200)
        expect(res.body).toEqual({ patients })
    })

    it('should update a patient', async () => {
        const patientData = {
            name: 'Junior Smith',
            birthdate: '01/01/1999',
            email: 'fakejonh@example.com',
            address: '789 Main St'
        }

        const res = await request(app)
            .put('/patients/123')
            .send(patientData)

        expect(res.status).toBe(200)
        expect(res.body).toEqual({ patient: { patientId: '123', ...patientData } })
    })

    it('should delete a patient', async () => {
        const patientId =  '123'
        const res = await request(app).delete(`/patients/${patientId}`)
        expect(res.status).toBe(204)
        const patient = await PatientService.getPatient(patientId)
        expect(patient).toBe(null)
    })
})