export interface Reservation {
    id: number,
    userId: number,
    packetId: number,
    startDate: string,
    endDate: string,
    nrPeople: number
}