<?php
$this->load->view('Cuentas/wizard');
if ($_SESSION["Paso"]==1)
{
    $this->load->view('Cuentas/steps/Paso1');
}
else
{
    $this->load->view('Cuentas/steps/Paso'.$_SESSION['Paso']);
}