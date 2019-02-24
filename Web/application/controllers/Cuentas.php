<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cuentas extends CI_Controller {
    function __construct()
	{
            parent::__construct();
            $this->load->library('form_validation','session');
            $this->load->helper(array('form','url','date','zonahoraria'));
            $this->load->model(array(
                 'Acceso_model','Estados_model','TiposCliente_model','TiposIndustria_model'
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
            header('Content-Type: text/xml');
            echo '<items>';
            echo "<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?>";
            for ($i=0;$i<count($idAreasOportunidad);$i++)    
            {
                echo "<areas>\n";
                echo " <AreaOpCtaId>{$idAreasOportunidad[$i]}</AreaOpCtaId>\n";
                echo "</areas>\n\n";
            }
            echo '</items>';
            
            $primaryKey=0;
            redirect("Cuentas/Equipos/".$primaryKey."","refresh");
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
        if(isset($_POST['Modelo']))
        {
            $primaryKey=0;
            redirect("Cuentas/Lista","refresh");
        }
    }
    
    public function Crear()
    {
        
    }
}

