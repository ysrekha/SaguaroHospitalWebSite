export type Doctor = {
    id: string;
    name: string;
    specialty: string;
    phone: string;
    email: string;
};

export type Patient = {
    id: string;
    name: string;
    dob: string;
    phone: string;
    email: string;
    address: string;
    doctor_id: string;
    reason_for_visit: string;
    status: "Completed" | "Scheduled" | "Cancelled" | "Waiting";
    password: string;
};