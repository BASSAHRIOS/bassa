<?php
defined('BASEPATH') OR exit('No direct script access allowed');
//session_start();
class Acceso extends CI_Controller {
	
	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	function __construct()
	{
            parent::__construct();
            $this->load->helper(array('form', 'url'));
            $this->load->model('Acceso_model');
	}
	public function Login()
	{
            $data["msgError"]="";
            if($_POST){
                    $UserName = $this->input->post('UserName');
                    $Password = $this->input->post('Password');
                    if ($UserName!="" && $Password!=""){
                        $resultado  = $this->Acceso_model->ValidarAdmin($UserName,$Password);
                        if($resultado){
                            redirect('Inicio/Index', 'refresh');	  
                    }else{
                        $data['msgError'] ='Usuario/Contrasena invalida';
                    }
                }
            }
            $this->layout->layout= "layout_publico";
            $this->load->view('Acceso/viewacceso',$data);
	}
	
	public function Salir()
	{
            $this->Acceso_model->logoff();
            redirect('Acceso/Login', 'refresh');
	}
}