GET /patients/:patientId - This route is used to retrieve a specific patient by their ID. It is not necessary to send any additional data in the request, as the patient ID is passed as part of the route. The response will be a JSON object with the patient's data.

POST /patients - This route is used to create a new patient. It is necessary to send patient data in the body of the request as a JSON object. The response will be a JSON object with the patient data created.

DELETE /patients/:patientId - This route is used to delete a specific patient by its ID. It is not necessary to send any additional data in the request, as the patient ID is passed as part of the route. The response will be a 204 status, indicating that the operation was successful.

PUT /patients/:patientId - This route is used to update the data of a specific patient through its ID. It is necessary to send the updated patient data in the body of the request as a JSON object. The patient ID is passed as part of the route. The response will be a JSON object with the updated patient data.

GET /patients - This route is used to retrieve all patients. It is not necessary to send any additional data in the request. The response will be a JSON object with all patient data.