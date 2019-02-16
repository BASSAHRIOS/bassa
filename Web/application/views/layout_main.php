<?php
$this->load->view('Shared/Header');
echo $this->dynamic_menu->build_menu();
$this->load->view('Shared/Content');
$this->load->view('Shared/Footer');