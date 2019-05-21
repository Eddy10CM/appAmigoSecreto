import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseProvider {

  db:SQLiteObject;

  constructor() {
  }

  setDatabase(db:SQLiteObject){
    if (this.db == null) {
        this.db = db;
    }
  }

  createTableUsuarios(){
    let sql = "CREATE TABLE IF NOT EXISTS usuario(idUsuario INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR, edad VARCHAR, ciudad VARCHAR, email VARCHAR, password VARCHAR)";
    return this.db.executeSql(sql, []);
  }

  createTableGustos(){
    let sql = "CREATE TABLE IF NOT EXISTS gustos (IdGusto INTEGER PRIMARY KEY AUTOINCREMENT,gusto VARCHAR, FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario))";
    return this.db.executeSql(sql, []);
  }

  createTableDisgustos(){
    let sql = "CREATE TABLE IF NOT EXISTS disgustos (IdDisgusto INTEGER PRIMARY KEY AUTOINCREMENT,disgusto VARCHAR, FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario))";
    return this.db.executeSql(sql, []);
  }

  createUsuario(nombre,edad,ciudad,email,password){
    let sql = 'INSERT INTO usuario(nombre,edad,ciudad,email,password) VALUES (?,?,?,?,?)';
    return this.db.executeSql(sql,[nombre,edad,ciudad,email,password]);
  }

  insertGustos(gusto,idUsuario){
    let sql = "INSERT INTO gustos(gusto,idUsuario) VALUES (?,?)";
    return this.db.executeSql(sql,[gusto,idUsuario]);
  }

  getUsuario(correo,password){
    let sql = 'SELECT * FROM usuario WHERE email=? AND password=?';
    return this.db.executeSql(sql,[correo,password])
    .then((response)=>{
      let usuario = [];
      for(let u = 0; u < response.rows.length; u++){
        usuario.push(response.rows.item(u));
      }
      return Promise.resolve(usuario);
    })
  }

  getUser(correo){
    let sql = 'SELECT * FROM usuario WHERE email=?';
    return this.db.executeSql(sql,[correo])
    .then((response)=>{
      let usuario = [];
      for(let u = 0; u < response.rows.length; u++){
        usuario.push(response.rows.item(u));
      }
      return Promise.resolve(usuario);
    })
  }

  getUsuarios(){
    let sql = 'SELECT * FROM usuario';
    return this.db.executeSql(sql,[])
    .then(response => {
      let usuarios = [];
      for(let u = 0; u < response.rows.length; u++){
        usuarios.push(response.rows.item(u));
      }
      return Promise.resolve(usuarios);
    })
    .catch(error=>{
      Promise.reject(error);
    });
  }
}
