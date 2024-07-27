# importing all the required libraries to work with FastAPI

from fastapi import FastAPI, Request, HTTPException
import DBAL
from fastapi.responses import JSONResponse
from models import Doctors, Patients, Appointment, Prescriptions
from pydantic import BaseModel
from typing import ClassVar
from datetime import datetime  # Import datetime module
from fastapi.middleware.cors import CORSMiddleware

# from fastapi import Path


# creating an object for FastAPI() class in order to use its methods
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# creating DrDataType() class that inherits BaseModel() class to perform validation for user inputted data
class DrDataType(BaseModel):
    # doctor_id : int
    first_name: str
    last_name: str
    gender: str
    email: str
    phone_number: int
    password: str

    # creating PtDataType() class that inherits BaseModel() class to perform validation for user inputted data


class PtDataType(BaseModel):
    # patient_id : int
    first_name: str
    last_name: str
    age: int
    gender: str
    weight: str
    email: str
    phone_number: int
    password: str

    # creating LoginDataType() class that inherits BaseModel() class to perform validation for user inputted data


class LoginDataType(BaseModel):
    email: str
    password: str
    role: str

    # creating ApptDataType() class that inherits BaseModel() class to perform validation for user inputted data


class ApptDataType(BaseModel):
    # appointment_id : int
    patient_id: int
    doctor_id: int
    datetime: str

    # creating PresDataType() class that inherits BaseModel() class to perform validation for user inputted data


class PresDataType(BaseModel):
    # prescription_id : int
    patient_id: int
    doctor_id: int
    medicine: str
    # date_created : datetime


class DrDataTypeUpdate(BaseModel):
    doctor_id: int
    first_name: str
    last_name: str
    gender: str
    email: str
    phone_number: int
    password: str


class PtDataTypeUpdate(BaseModel):
    patient_id: int
    first_name: str
    last_name: str
    age: int
    gender: str
    weight: str
    email: str
    phone_number: int
    password: str


@app.post("/login")
def loginUser(obj: LoginDataType):
    email = obj.email
    password = obj.password
    role = obj.role

    try:
        result = DBAL.loginUser(email, password, role)
        print(result)
        if "Invalid" in result['message']:
            print("\n\n", "IS INVALID", result, "\n\n")
            return JSONResponse(
                content={"message": result['message']},
                status_code=500,
            )
            
            
        doc = Doctors(result['user'][0], result['user'][1], result['user'][2], result['user'][3], result['user'][4], result['user'][5], result['user'][6])
        
        print(doc.__dict__)
        return JSONResponse(content={"message": result['message'],'user':doc.__dict__}, status_code=200)
    except Exception as e:
        print(e)
        return JSONResponse(
            content={"message": "An exception occurred"}, status_code=500
        )


@app.post("/add-doctor")
def addNewDoctor(obj: DrDataType):
    try:
        DBAL.addDoctor(obj)
        return JSONResponse(
            content={"message": "New Doctor's information added Successfully..."},
            status_code=200,
        )
    except:
        return JSONResponse(
            content={"message": "An exception occurred"}, status_code=500
        )


@app.get("/doctor")
def getAllDoctors():
    drList = []
    drs = DBAL.getDoctors()
    for dr in drs:  # here we are iterating doctor's table row 1 by 1
        print(drs)
        objDr = Doctors(dr[0], dr[1], dr[2], dr[3], dr[4], dr[5], dr[6])
        drList.append(objDr)
    return {"doctors": drList}


@app.get("/doctor/{doctor_id}")
def getDoctorById(doctor_id: int):
    objDr = DBAL.getDoctorByID(doctor_id)
    return objDr


@app.put("/update-doctor")
def updateDoctorRecord(obj: DrDataTypeUpdate):
    try:
        DBAL.updateDoctor(obj)
        return JSONResponse(
            content={"message": "Updated the selected Doctor's record Successfully..."},
            status_code=200,
        )
    except:
        return JSONResponse(
            content={"message": "An exception occurred"}, status_code=500
        )


@app.post("/add-patient")
def addNewPatient(obj: PtDataType):
    try:
        DBAL.addPatient(obj)
        return JSONResponse(
            content={"message": "New Patient's information added Successfully..."},
            status_code=200,
        )
    except:
        return JSONResponse(
            content={"message": "An exception occurred"}, status_code=500
        )


@app.get("/patient")
def getAllPatients():
    ptList = []
    pts = DBAL.getPatients()
    for pt in pts:  # here we are iterating patient's table row 1 by 1
        print(pts)
        objPt = Patients(pt[0], pt[1], pt[2], pt[3], pt[4], pt[5], pt[6], pt[7], pt[8])
        ptList.append(objPt)
    return {"patients": ptList}


@app.get("/patient/{patient_id}")
def getPatientById(patient_id: int):
    objPt = DBAL.getPatientByID(patient_id)
    return objPt


@app.put("/update-patient")
def updatePatientRecord(obj: PtDataTypeUpdate):
    try:
        DBAL.updatePatient(obj)
        return JSONResponse(
            content={
                "message": "Updated the selected Patient's record Successfully..."
            },
            status_code=200,
        )
    except:
        return JSONResponse(
            content={"message": "An exception occurred"}, status_code=500
        )


@app.post("/add-appointment")
def addNewAppointment(obj: ApptDataType):
    try:
        DBAL.addAppointment(obj)
        return JSONResponse(
            {"message": "New Appointment added Successfully..."}, status_code=200
        )
    except:
        print("An exception occurred")
        return JSONResponse({"message": "An exception occurred"}, status_code=500)


@app.get("/appointment")
def getAllAppointments():
    apptList = []
    appts = DBAL.getAppointments()
    for appt in appts:
        print(appts)
        objAppt = Appointment(appt[0], appt[1], appt[2], appt[3])
        apptList.append(objAppt)
    return {"appointments": apptList}


@app.get("/appointment/{appointment_id}")
def getAppointmentById(appointment_id: int):
    objAppt = DBAL.getAppointmentByID(appointment_id)
    return objAppt


@app.get("/appointmentByDrId/{doctor_id}")
def getAppointmentsByDrId(doctor_id: int):
    appts = DBAL.getAppointmentsByDrID(doctor_id)
    return appts


@app.get("/appointmentByPtId/{patient_id}")
def getAppointmentsByPtId(patient_id: int):
    appts = DBAL.getAppointmentsByPtID(patient_id)
    return appts


@app.post("/add-prescription")
def addNewPrescription(obj: PresDataType):

    try:
        DBAL.addPrescription(obj)
        return JSONResponse(
            content={"message": "New prescription added Successfully..."},
            status_code=200,
        )
    except:
        JSONResponse({"message": "An exception occurred"}, status_code=500)


@app.get("/prescription")
def getAllPrescriptions():
    presList = []
    pres = DBAL.getPrescriptions()
    for pre in pres:
        # print(pres)
        objPres = Prescriptions(
            prescription_id=pre[0],
            patient_id=pre[1],
            doctor_id=pre[2],
            medicine=pre[3],
            date_created=pre[4],
        )
        presList.append(objPres)
    return {"prescriptions": presList}


@app.get("/prescription/{prescription_id}")
def getPrescriptionById(prescription_id: int):
    objPres = DBAL.getPrescriptionByID(prescription_id)
    return objPres


@app.get("/prescriptionByDrId/{doctor_id}")
def getPrescriptionsByDrId(doctor_id: int):
    pres = DBAL.getPrescriptionsByDrID(doctor_id)
    return pres


@app.get("/prescriptionByPtId/{patient_id}")
def getPrescriptionsByPtId(patient_id: int):
    pres = DBAL.getPrescriptionsByPtID(patient_id)
    return pres
