<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cuentas extends CI_Controller {
    function __construct()
	{
            parent::__construct();
            $this->load->library('form_validation','session');
            $this->load->helper(array('form','url','date','zonahoraria'));
            $this->load->model(array(
                 'Acceso_model'
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
        $this->layout->view('Cuentas/layout_main_wizard',$data);
        if(isset($_POST['RazonSocial']))
        {
            $primaryKey=0;
            redirect("Cuentas/Equipos/".$primaryKey."","refresh");
        }
    }
    
    public function Equipos($primaryKey)
    {
        $data["msgError"]="";
        $data['title_for_layout'] = 'Cuentas';
        $_SESSION['Paso'] = "2";
        $this->layout->view('Cuentas/layout_main_wizard',$data);
        if(isset($_POST['Modelo']))
        {
            $primaryKey=0;
            redirect("Cuentas/Lista","refresh");
        }
    }
}

