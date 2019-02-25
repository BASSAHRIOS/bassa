<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cuentas extends CI_Controller {
    function __construct()
	{
            parent::__construct();
            $this->load->library('form_validation','session');
            $this->load->helper(array('form','url','date','zonahoraria'));
            $this->load->model(array(
                 'Acceso_model','Cuentas_model','Estados_model','TiposCliente_model','TiposIndustria_model'
                ,'TiposEquipo_model','Marcas_model','TiposAplicacion_model'
                ,'TiposEnfriamiento_model','TiposCompresor_model','AreasOportunidad_model'
             ));
            if(!$this->Acceso_model->isLoguedAdmin()){
                    redirect("Acceso/Login");
            }
	}
        
    public function Lista()
    {
        $data["msgError"]="";
        $data['title_for_layout'] = 'Cuentas';
        $_SESSION['Paso'] = "";
        $this->layout->view('Cuentas/viewlista',$data);
    }
    
    public function DatosGenerales()
    {
        $data["msgError"]="";
        $data['title_for_layout'] = 'Cuentas';
        $_SESSION['Paso'] = "1";
        $lst =$this->Estados_model->getAll();          
        $data["lstEstados"] = $lst;
        $lst2 =$this->TiposCliente_model->getAll();          
        $data["lstTiposCliente"] = $lst2;
        $lst3 =$this->TiposIndustria_model->getAll();          
        $data["lstTipoIndustria"] = $lst3;
        $lst4 =$this->TiposAplicacion_model->getAll();          
        $data["lstTiposAplicacion"] = $lst4;
        $lst5 =$this->AreasOportunidad_model->getAll();          
        $data["lstAreasOportunidad"] = $lst5;
        
        $this->layout->view('Cuentas/layout_main_wizard',$data);
        if(isset($_POST['RazonSocial']))
        {
            $idAreasOportunidad=$_POST["idAreasOportunidad"];
            //print_r($idAreasOportunidad);
            $x=$this->toXml($idAreasOportunidad);
            echo 'x->'.$x;
            
            $response=$this->Cuentas_model->Nuevo(
                $_POST['RazonSocial'],
                $_POST['NombreComercial'],
                $_POST['RFC'],
                $_POST['idTipoCliente'],
                $_POST['idTipoIndustria'],
                $_POST['Calle'],
                $_POST['Colonia'],
                $_POST['Ciudad'],
                $_POST['idEstado'],
                $_POST['CP'],
                $_SESSION["IdUsuario"]
            );
            print_r($response);
            $primaryKey=$response->Id;
            //redirect("Cuentas/Equipos/".$primaryKey."","refresh");
        }
    }
    
    public function Equipos($primaryKey)
    {
        $data["msgError"]="";
        $data['title_for_layout'] = 'Cuentas';
        $_SESSION['Paso'] = "2";
        
        $lst =$this->TiposEquipo_model->getAll();          
        $data["lstTiposEquipo"] = $lst;
        $lst2 =$this->Marcas_model->getAll();          
        $data["lstMarcas"] = $lst2;
        $lst3 =$this->Marcas_model->getAll();          
        $data["lstMarcas"] = $lst3;
        $lst4 =$this->TiposAplicacion_model->getAll();          
        $data["lstTiposAplicacion"] = $lst4;
        $lst5 =$this->TiposEnfriamiento_model->getAll();          
        $data["lstTiposEnfriamiento"] = $lst5;
        $lst6 =$this->TiposCompresor_model->getAll();          
        $data["lstTiposCompresor"] = $lst6;
        
        $this->layout->view('Cuentas/layout_main_wizard',$data);
       
        redirect("Cuentas/Lista","refresh");
    }
    
    public static function toXml($array)
    {
        if (count($array) == 0) {
            throw new Exception("Array cannot be empty");
        }
        $xml = new SimpleXMLElement('<xml/>');
        $track = $xml->addChild('users');
        for($i=0;$i<count($array);$i++)
        {
            $track->addChild('user');
            $track->addChild('Id',$i);
            $track->addChild('AreaOpCtaId',$array[$i]);
            $i = $i + 1;
        }
        return $xml->asXML();
    }
    
    public function Crear()
    {
        
    }
}

