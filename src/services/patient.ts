import { connectToDynamoDb } from '../utils/dynamoDb'
import { getParams } from '../utils/params'
import { Patient } from '../models/patient'
import { tableName } from '../../config'

import { UpdatePatientRequest } from '../requests/UpdatePatientRequest'

const dynamoDb = connectToDynamoDb()

export async function createPatient(patient: Patient): Promise<Patient> {
    const params = {...getParams(tableName, { patientId: patient.patientId }), Item: patient }
    await dynamoDb.put(params).promise()
    return patient
}

export async function getPatient(patientId: string): Promise<Patient> {
    const params = getParams(tableName, { patientId: patientId })
    const { Item } = await dynamoDb.get(params).promise()
    return Item as Patient
}

export async function getAllPatients(): Promise<Patient[]> {
    const params = getParams(tableName, undefined)
    const { Items } = await dynamoDb.scan(params).promise()
    return Items as Patient[]
}

export async function updatePatient(patientId:string,patient: UpdatePatientRequest): Promise<Patient> {
    const params = getParams(tableName, { patientId: patientId }, 'SET name = :name, birthdate = :birthdate, email = :email, address = :address',
        {
            ':name': patient.name,
            ':birthdate': patient.birthdate,
            ':email': patient.email,
            ':address': patient.address
        }, 'ALL_NEW')
    const { Attributes } = await dynamoDb.update(params).promise()
    return Attributes as Patient
}

export async function deletePatient(patientId: string): Promise<void> {
    const params = getParams(tableName, { patientId: patientId })
    await dynamoDb.delete(params).promise()
}
