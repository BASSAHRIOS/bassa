<!DOCTYPE html>
<html>
    <head>
    	<meta charset="utf-8">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta name="viewport" content="width=device-width, initial-scale=1">
    	<title>Acceso</title>
    	<link href="<?php echo base_url('public/css/application-a07755f5.css')?>" rel="stylesheet">
    </head>
    <body class='login'>
    <form  name="forma" action="<?php echo $this->config->item('base_url') ?>Acceso/Login" method="post">
    <div class='wrapper'>
      <div class='row'>
        <div class='col-lg-12'>
          <div class='brand text-center'>
            <h1>
              Bassatech Solutions
            </h1>
          </div>
        </div>
      </div>
      <div class='row'>
        <div class='col-lg-12'>
          <form>
            <fieldset class='text-center'>
              <legend>Inicio de Sesion</legend>
              <div class='form-group'>
                <input id="UserName" placeholder='Usuario' class="form-control uppercase" type="text" value="" name="UserName">
              </div>
              <div class='form-group'>
                <input id="Password" placeholder='Contraseña' class="form-control" type="password" name="Password">
              </div>
              <div class='text-center'>
                <h6 class="text-center text-danger">
                    <?=$msgError; ?>
		</h6>
                <button class="btn btn-lg btn-default btn-block" type="submit">Accesar</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    </form>
    </body>
</html>