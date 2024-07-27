# importing required modules and libraries
import pyodbc as p
from models import Doctors, Patients, Appointment, Prescriptions
import datetime


# defining getConnection() method to establish connection with HMS DB
def getConnection():
    conn = p.connect(r"Driver=SQL Server;Server=ARHAM\SQLEXPRESS;Database=HMS_DB")
    return conn

    # defining addDoctor() method to add new Doctor record


def addDoctor(objDr):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(
        f"insert into doctors (first_name, last_name, gender, email,phone_number,password) values('{objDr.first_name}','{objDr.last_name}','{objDr.gender}','{objDr.email}', {objDr.phone_number},'{objDr.password}');"
    )
    cursor.commit()
    print("New Doctor record added Successfully...")
    getDoctors()

    # defining addPatient() method to add new Patient record


def addPatient(objPt):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(
        f"insert into patients (first_name, last_name, age, gender, weight, email, phone_number, password) values('{objPt.first_name}','{objPt.last_name}',{objPt.age},'{objPt.gender}', '{objPt.weight}', '{objPt.email}', {objPt.phone_number},'{objPt.password}');"
    )
    cursor.commit()
    print("New Patient record added Successfully...")
    getPatients()

    # defining addAppointment() method to add new Appointment record


def addAppointment(objAppt):
    conn = getConnection()
    cursor = conn.cursor()

    # Convert the string representation of datetime to a datetime object
    # my_datetime_obj = datetime.datetime.strptime(objAppt.datetime, '%Y, %m, %d, %H, %M, %S')
    date = datetime.datetime.strptime(objAppt.datetime, "%Y-%m-%dT%H:%M")
    # print("\n\n", date, "\n\n")
    cursor.execute(
        f"insert into appointment (patient_id, doctor_id, datetime) VALUES ({objAppt.patient_id}, {objAppt.doctor_id},'{date}')"
    )
    conn.commit()

    # defining addPrescription() method to add new Prescription record


def addPrescription(objPres):
    conn = getConnection()
    cursor = conn.cursor()

    # formatted_datetime = objPres.datetime.strftime('%Y-%m-%d %H:%M:%S')
    current_datetime = datetime.date.today()
    cursor.execute(
        f"insert into prescriptions VALUES ({objPres.patient_id}, {objPres.doctor_id}, '{objPres.medicine}','{current_datetime}')"
    )
    conn.commit()
    # defining getDoctors() method to fetch/get all existing doctors


def getDoctors():
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute("select * from doctors")
    rows = cursor.fetchall()
    return rows

    # defining getPatients() method to fetch/get all existing patients


def getPatients():
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute("select * from patients")
    rows = cursor.fetchall()
    return rows

    # defining getAppointments() method to fetch/get all existing Appointment


def getAppointments():
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute("select * from appointment  ")
    rows = cursor.fetchall()
    return rows

    # defining getPrescriptions() method to fetch/get record of existing Prescriptions


def getPrescriptions():
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute("select * from prescriptions")
    rows = cursor.fetchall()
    return rows

    # defining getDoctorByID() method to fetch/get record of a particular doctor based on its ID


def getDoctorByID(dr_id):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(f"select * from doctors where doctor_id = {dr_id}")
    row = cursor.fetchone()
    if row:
        objDrId = Doctors(
            doctor_id=row[0],
            first_name=row[1],
            last_name=row[2],
            gender=row[3],
            email=row[4],
            phone_number=row[5],
            password=row[6],
        )
        print(objDrId.__dict__)
        return objDrId  # row
    else:
        return "Doctor record for given doctor id is not found..."

        # defining getPatientByID() method to fetch/get record of a particular patient based on its ID


def getPatientByID(pt_id):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(f"select * from patients where patient_id = {pt_id}")
    row = cursor.fetchone()
    if row:
        objPtId = Patients(
            patient_id=row[0],
            first_name=row[1],
            last_name=row[2],
            age=row[3],
            gender=row[4],
            weight=row[5],
            email=row[6],
            phone_number=row[7],
            password=row[8],
        )
        print(objPtId.__dict__)
        return objPtId
    else:
        return "Patient record for given patient id is not found..."

        # defining getAppointmentByID() method to fetch/get record of a particular appointment based on its ID


def getAppointmentByID(appt_id):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(f"select * from appointment where appointment_id = {appt_id}")
    row = cursor.fetchone()
    if row:
        objApptId = Appointment(
            appointment_id=row[0], patient_id=row[1], doctor_id=row[2], datetime=row[3]
        )
        print(objApptId.__dict__)
        return objApptId
    else:
        return "Appointment record for given appointment id is not found..."

        # defining getPrescriptionByID() method to fetch/get record of a particular prescrition based on its ID


def getPrescriptionByID(prs_id):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(f"select * from prescriptions where prescription_id = {prs_id}")
    row = cursor.fetchone()
    if row:
        objPrsId = Prescriptions(
            prescription_id=row[0],
            patient_id=row[1],
            doctor_id=row[2],
            medicine=row[3],
            date_created=row[4],
        )
        print(objPrsId.__dict__)
        return objPrsId
    else:
        return "Prescription record for given prescription id is not found..."

        # defining getPrescriptionByDrID() method to fetch/get record of prescritions based on doctor's ID


def getPrescriptionsByDrID(dr_id):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(f"select * from prescriptions where doctor_id = {dr_id}")
    pres = cursor.fetchall()
    presByDrIdList = []
    if pres:
        for pre in pres:
            objPrsByDrId = Prescriptions(
                prescription_id=pre[0],
                patient_id=pre[1],
                doctor_id=pre[2],
                medicine=pre[3],
                date_created=pre[4],
            )
            presByDrIdList.append(objPrsByDrId)
        return presByDrIdList
    else:
        return "Prescription record for entered doctor id is not found..."

        # defining getPrescriptionByPtID() method to fetch/get record of prescritions based on patient's ID


def getPrescriptionsByPtID(pt_id):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(f"select * from prescriptions where patient_id = {pt_id}")
    # pres = cursor.fetchone()
    pres = cursor.fetchall()
    presByPtIdList = []
    if pres:
        for pre in pres:
            objPresByPtId = Prescriptions(
                prescription_id=pre[0],
                patient_id=pre[1],
                doctor_id=pre[2],
                medicine=pre[3],
                date_created=pre[4],
            )
            # print(objPresByPtId.__dict__)
            presByPtIdList.append(objPresByPtId)
        # return pres
        return presByPtIdList
    else:
        return "Prescription record for entered patient id is not found..."

        # defining getAppointmentsByDrID() method to fetch/get record of appoinntments based on doctor's ID


def getAppointmentsByDrID(dr_id):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(f"select * from appointment where doctor_id = {dr_id}")
    # row = cursor.fetchone()
    appts = cursor.fetchall()
    apptsByDrIdList = []
    if appts:
        for appt in appts:
            objApptByDrId = Appointment(
                appointment_id=appt[0],
                patient_id=appt[1],
                doctor_id=appt[2],
                datetime=appt[3],
            )
            # print(objApptByDrId.__dict__)
            apptsByDrIdList.append(objApptByDrId)
        # return row
        return apptsByDrIdList
    else:
        return "No appointment record found for entered doctor ID..."

        # defining getAppointmentsByPtID() method to fetch/get record of appoinntments based on patient's ID


def getAppointmentsByPtID(pt_id):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(f"select * from appointment where patient_id = {pt_id}")
    # row = cursor.fetchone()
    appts = cursor.fetchall()
    apptsByPtIdList = []
    if appts:
        for appt in appts:
            objApptByPtId = Appointment(
                appointment_id=appt[0],
                patient_id=appt[1],
                doctor_id=appt[2],
                datetime=appt[3],
            )
            # print(objApptByPtId.__dict__)
            apptsByPtIdList.append(objApptByPtId)
        # return objApptByPtId
        return objApptByPtId
    else:
        return "No appointment record found for entered doctor ID..."

        # defining updateDoctor() method to update particular doctor's record


def updateDoctor(objUpDr):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(
        f"Update  doctors set first_name = '{objUpDr.first_name}',last_name = '{objUpDr.last_name}', gender = '{objUpDr.gender}', email = '{objUpDr.email}', phone_number = {objUpDr.phone_number}, password ='{objUpDr.password}' where doctor_id = {objUpDr.doctor_id}"
    )
    cursor.commit()
    print("Doctor's record updated Successfully...")

    # defining updatePatient() method to update particular patient's record


def updatePatient(objUpPt):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(
        f"Update patients set first_name = '{objUpPt.first_name}',last_name = '{objUpPt.last_name}', age = {objUpPt.age}, gender = '{objUpPt.gender}', weight = '{objUpPt.weight}', email = '{objUpPt.email}', phone_number = {objUpPt.phone_number}, password ='{objUpPt.password}' where patient_id = {objUpPt.patient_id}"
    )
    cursor.commit()
    print("Patient's record updated Successfully...")

    # defining loginUser() method for user authentication


def loginUser(email, password, role):
    conn = getConnection()
    cursor = conn.cursor()
    if role == "doctor":
        cursor.execute(
            f"select * from doctors where email = ? and password = ?", (email, password)
        )
        user = cursor.fetchone()
        
        print('\n\n',user,'\n\n')
        
        if user:
            return {"message":"Login successful as a Doctor...",'user':user}
        else:
            return "Invalid credentials for Doctor..."

    elif role == "patient":
        cursor.execute(
            f"select * from patients where email = ? AND password = ?",
            (email, password),
        )
        user = cursor.fetchone()
        if user:
            return {"message":"Login successful as a Patient...",'user':user}
        else:
            return "Invalid credentials for Patient..."

    else:
        return "Invalid role..."
