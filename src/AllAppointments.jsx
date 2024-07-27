import React, { useEffect } from "react";
import useStore from "./Store";
import axios from "axios";
import Navigation from "./Navigation";
import Contact_us from "./Contact_us";
import Login from "./Login";

function AppointmentsComponent() {
  const { user_id, appointments, setAppointments } = useStore();

  const fetchAppointments = async (user_id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/appointmentByDrId/${user_id}`
      );
      console.log("Your data : ", response.data);
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    if (user_id) {
      fetchAppointments(user_id);
    }
  }, [user_id]);

  return (
    <>
      <div>
        <Navigation />
      </div>

      <div>
        <h1 className="text-5xl font-bold text-center p-10">
          All your Appointments Will be shown here
        </h1>

        <div>
          {
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Appiontment ID</th>
                    <th>Patient ID</th>
                    <th>Date-Time</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((item) => (
                    <tr key={item.doctor_id}>
                      <td>{item.appointment_id}</td>
                      <td>{item.patient_id}</td>
                      <td>{item.datetime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
        </div>
   
      </div>

      <div>
        <Contact_us />
      </div>
    </>
  );
}

export default AppointmentsComponent;
