<?php

$file = $_POST['file'];
md5($file);

echo '<script language="javascript">
if (window.confirm("Nuevo hash generado"))
{
   window.location = "/home.html";

}
else
{
    // They clicked no
}

</script>';
