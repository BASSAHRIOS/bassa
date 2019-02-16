<?php
class Dynamic_menu {
    
    function __construct()
    {
        
        $this->ci =& get_instance();    // get a reference to CodeIgniter.
        //$this->ci->load->model('Menu_model');
        //$this->ci->load->model('Modulo_model'); 
    }
    function build_menu()
    {
    ?>
    <div class="wrapper">
        <header class="main-header">
        <!-- Logo -->
        <a href="<?= base_url('Inicio/index')?>" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <img class="img-responsive" src="<?= base_url('public/images/LOGO.png')?>">
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg"><b>BassatechSolutions</b></span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <ul class="nav navbar-top-links navbar-right">
                
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <span style="color:white;"><?=$_SESSION["Nombre"];?></span>
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li>
                            <a href="<?= base_url('Acceso/Salir') ?>"><i class="fa fa-sign-out fa-fw"></i>Cerrar Sesión</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
            </ul>
          <!-- Sidebar toggle button-->
          <a href="<?= base_url('Inicio/index')?>" class="sidebar-toggle" data-toggle="push-menu" role="button">
            <span class="sr-only">Toggle navigation</span>
          </a>
          <br>
          <a href="<?= base_url('Inicio/index')?>">
              <i class="fa fa-dashboard"></i><span style="color: white;" class="text-muted center">Sistema de Cotizaciones</span>
          </a>
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
            </ul>
          </div>
        </nav>
  </header>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
           <?php
            if ($_SESSION["PerfilId"]==3)
            {
            ?>
            <li>
            <a href="<?= base_url('Inicio/index')?>">
                <i class="fa fa-home"></i> <span>Mis Servicios</span>
            </a>
            </li>
         <?php
            }
         ?>
          <?php
            if ($_SESSION["PerfilId"]==2)
            {
            ?>
            <li>
            <a href="<?= base_url('Inicio/index')?>">
                <i class="fa fa-home"></i> <span>Mis Equipos</span>
            </a>
            </li>
         <?php
            }
         ?>
          
         <?php
            if ($_SESSION["PerfilId"]==1)
            {
        ?>
        <li>
          <a href="<?= base_url('Inicio/index')?>">
            <i class="fa fa-home"></i> <span>Inicio</span>
          </a>
        </li>
       
        <li>
          <a href="<?= base_url('Usuario/Lista')?>">
            <i class="fa fa-user"></i> <span>Usuario</span>
          </a>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-database"></i> <span>Modulos</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="<?= base_url('Cuentas/Lista')?>"><i class="fa fa-address-card"></i>Cuentas</a></li>

            <li><a href="<?= base_url('Productos/Lista')?>"><i class="fa fa-building"></i>Catalogo de Productos</a></li>

            <li><a href="<?= base_url('Cotizaciones/Lista')?>"><i class="fa fa-laptop"></i>Registro de Cotizaciones</a></li>
            <li><a href="<?= base_url('Seguimiento/Lista')?>"><i class="fa fa-calendar"></i>Seguimiento a Cotizaciones</a></li>            
          </ul>         
        </li>
        
        <?php
            }
        ?>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
  <?php
    }
 }
 ?>