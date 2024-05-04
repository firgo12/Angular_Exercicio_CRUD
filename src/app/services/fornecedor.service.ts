import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fornecedor } from '../interfaces/Fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private fornecedorUrl = "http://localhost:3000/fornecedores";
  constructor(private http: HttpClient) {

  }

  //Esta lista virá da API
  fornecedores:Fornecedor[] = [];

  listar(): Observable<Fornecedor[]>{
    return this.http.get<Fornecedor[]>(this.fornecedorUrl) as Observable<Fornecedor[]>

    //return this.clientes;
  }

  getByID(id:string) : Observable<Fornecedor>{
    return this.http.get(`${this.fornecedorUrl}/${id}`) as Observable<Fornecedor>
  }

  remover(id:string){
    //const cliente = this.clientes.find(c => c.id == id);

    // if(cliente){
    //    const index = this.clientes.indexOf(cliente);
    //    this.clientes.splice(index,1);
    // }

    return this.http.delete(`${this.fornecedorUrl}/${id}`)
  }

  httpHeader = {
    headers:{
      "Content-Type":"application/json"
    }
  };


  atualizar(fornecedor:Fornecedor){
    return this.http.put(`${this.fornecedorUrl}/${fornecedor.id}`, fornecedor, this.httpHeader)
  }

  adicionar(fornecedor:Fornecedor){

    return this.http.post(this.fornecedorUrl, fornecedor, this.httpHeader)

    //this.clientes.push(cliente);
  }
}
