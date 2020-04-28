export interface UsuarioData {
    id: number
    username: string
    email: string
    isActive: boolean   
  }
  
  export interface UsuarioRO {
    user: UsuarioData;
  }