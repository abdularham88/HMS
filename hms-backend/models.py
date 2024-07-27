
## Creating Doctor's class that contains all the attributes / data members
## or variables similar to the DB's doctors table
    
class Doctors():
    # def __init__(self, doctor_id = None, first_name = 'sample', last_name = 'sample',gender = 'sample', email = 'sample', phone_number = 123, password = 'sample'):
    def __init__(self, doctor_id, first_name, last_name, gender, email, phone_number, password):
        self.doctor_id = doctor_id
        self.first_name = first_name
        self.last_name = last_name
        self.gender = gender
        self.email = email
        self.phone_number = phone_number
        self.password = password


## Creating Patient's class that contains all the attributes / data members
## or variables similar to the DB's patients table

class Patients():
    # def __init__(self, patient_id = None, first_name = 'sample', last_name = 'sample', age = 123, gender = 'sample', weight = 'sample', email = 'sample', phone_number = 123, password = 'sample123'):
    def __init__(self, patient_id, first_name, last_name, age, gender, weight, email, phone_number, password):    
        self.patient_id = patient_id
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.gender = gender
        self.weight = weight
        self.email = email
        self.phone_number = phone_number
        self.password = password


## Creating Appointment's class that contains all the attributes / data members
## or variables similar to the DB's appointment table
        
class Appointment():
    def __init__(self, appointment_id, patient_id, doctor_id, datetime):      
                    # removing appointment_id below
    #def __init__(self, patient_id = 123, doctor_id = 123, datetime = 'sample123'):
        self.appointment_id = appointment_id
        self.patient_id = patient_id
        self.doctor_id = doctor_id
        self.datetime = datetime


## Creating Prescription's class that contains all the attributes / data members
## or variables similar to the DB's prescription table
        
class Prescriptions():
    def __init__(self, prescription_id, patient_id, doctor_id, medicine, date_created):
        self.prescription_id = prescription_id
        self.patient_id = patient_id
        self.doctor_id = doctor_id
        self.medicine = medicine
        self.date_created = date_created