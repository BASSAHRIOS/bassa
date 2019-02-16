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
        $this->layout->view('Cuentas/viewlista',$data);
    }
        
}

