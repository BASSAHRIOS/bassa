<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Inicio extends CI_Controller {
	function __construct()
	{
            parent::__construct();
            $this->load->helper(array('form', 'url'));
            $this->load->model(array(
                 'Acceso_model'
            ));
            if(!$this->Acceso_model->isLoguedAdmin()){
                    redirect("Acceso/Login");
            }
	}
	function Index(){
            $data["title_for_layout"] = "Indice";
            if ($_SESSION["PerfilId"]==3)
             {
                 
                $lista =$this->Tecnico_model->misServicios($_SESSION["TecnicoId"]);          
                $data["lista"] = $lista; 
             }
             if ($_SESSION["PerfilId"]==2)
             {
                $lista2 =$this->Cliente_model->misEquipos($_SESSION["ClienteId"]);
                $data["lista2"] = $lista2; 
             }
            $this->layout->view('Inicio/viewinicio', $data);
	}
        
        
}