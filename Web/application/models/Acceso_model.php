<?php
class Acceso_model extends CI_Model {
  function ValidarAdmin($UserName,$Password){
    $sql="
    select
     us.Id
    ,us.Nombre    
    ,us.UserName
    ,us.Password
    ,us.Estatus
    ,us.Email
    ,p.Nombre as Perfil
    ,us.PerfilId
    from usuario us
    inner join perfil p on p.PerfilId=us.Id
    WHERE UserName ='".$UserName."' AND Password ='".$Password."' AND us.Estatus='1'";   
    $query = $this->db->query($sql);
    if ($query->num_rows() > 0) {
        //echo "encontre dato";
        $row = $query->row_array();
        //Login was successful
        //if(!isset($_SESSION)){
          //session_start();
          //echo "voy a iniciar sesion =>". $row['Nombre'];
          $_SESSION["userType"] = 9;
          $_SESSION["Id"] = $row['Id'];
          $_SESSION["PerfilId"] = $row['PerfilId'];
          $_SESSION["Nombre"] = $row['Nombre'];
          //$_SESSION["ClienteId"]=$row['ClienteId'];
          //$_SESSION["TecnicoId"]=$row['TecnicoId'];
          return true;
          //}
         }else {
            //echo "no encontre dato";
            //No database result found
            return false;
        }
    //}
  }
  function isLoguedAdmin(){
      if(!isset($_SESSION["userType"])){
      return false;
    }
    
    if($_SESSION["userType"]!=9){
      return false;
    }
    
    if(!isset($_SESSION["Id"])){
      return false;
    }
    
    if(!isset($_SESSION["PerfilId"])){
      return false;
    }
    /*
     if(!isset($_SESSION["ClienteId"])){
      return false;
    }
    
     if(!isset($_SESSION["TecnicoId"])){
      return false;
    }
        */
    return true;
  }
  function logoff(){
       //session_start();
       $_SESSION["userType"] = 0;
       $_SESSION["Id"] = 0;
       $_SESSION["Nombre"] = 0;
       $_SESSION["PerfilId"] = 0;
       $_SESSION["ClienteId"] = 0;
       $_SESSION["TecnicoId"] = 0;
       session_destroy();               
  }
  function objectToArray($data)
  {
    if(is_array($data) || is_object($data))
      {
        $result = array();
          foreach ($data as $key => $value)
          {
            $result[$key] = $this->objectToArray($value);
          }
          return $result;
      }
      else
      {
        return $data;
      }
  }
}
?>