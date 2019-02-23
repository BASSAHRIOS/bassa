<?php
class TiposIndustria_model extends CI_Model {
    private $primaryKey='Id';
    private $table='tiposIndustria';
    
    function getAll(){
        $sql="select 
        Id,Descripcion from tiposIndustria";			
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