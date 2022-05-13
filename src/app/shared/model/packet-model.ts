import { VehicleEnum } from "../enum/vehicle-enum"

export interface Packet {
    id: number,
    nomePacchetto: string,
    mezzoTrasporto: VehicleEnum,
    city: string,
    costo: number
}