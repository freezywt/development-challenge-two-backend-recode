import { Patient } from '../models/patient'

export class CreatePatientRequest implements Patient {
    patientId: string
    name: string
    birthdate: string
    email: string
    address: string
    constructor(patientId: string, name: string, birthdate: string, email: string, address: string) {
        this.patientId = patientId
        this.name = name
        this.birthdate = birthdate
        this.email = email
        this.address = address
    }
}