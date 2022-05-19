import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Packet } from 'src/app/shared/model/packet-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class PacketService {

  constructor(
    private http: HttpClient
  ) { }


  public getPacketById(packet_id: number): Observable<Packet> {
    const url = environment.baseUrl + '/packets/' + packet_id
    return this.http.get<Packet>(url);
  }

  public deletePacketById(packet_id: number): Observable<any> {
    const url = environment.baseUrl + '/packets/' + packet_id;
    return this.http.delete<any>(url);
  }

  public getAllPackets(): Observable<Packet[]> {
    const url = environment.baseUrl + '/packets'
    return this.http.get<Packet[]>(url);
  }

  public createPacket(packet: Packet): Observable<number> {
    const url = environment.baseUrl + '/packets';
    return this.http.post<number>(url, packet);
  }

}
