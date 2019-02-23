<?php
class Estados_model extends CI_Model {
    private $primaryKey='Id';
    private $table='estados';
        
    function getAll(){
        $sql="select 
        Id, NombreEstado from estados";			
        $query = $this->db->query($sql);
        if($query->num_rows() > 0) {
        foreach($query->result() as $row) {
          $data[] = $row;
        }
          $coll = $this->objectToArray($data);
          return $coll;
        }
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