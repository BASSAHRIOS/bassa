<?php
class Cuentas_model extends CI_Model {
    private $primaryKey='Id';
    private $table='';
    
    function Nuevo(
        $RazonSocial
       ,$NombreComercial
       ,$RFC
       ,$idTipoCliente
       ,$idTipoIndustria
       ,$Calle
       ,$Colonia
       ,$Ciudad
       ,$idEstado
       ,$CP
       ,$IdUser
        ){
        $query=$this->db->query("CALL sp_CuentasInsUpd('$RazonSocial','$NombreComercial','$RFC','$idTipoCliente','$idTipoIndustria','$Calle','$Colonia','$Ciudad','$idEstado','$CP','$IdUser')");
        mysqli_next_result($this->db->conn_id);
        return $query->result();
    }
}
?>