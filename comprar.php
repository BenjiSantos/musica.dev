<?php

$file = $_POST['file'];
md5($file);

echo '<script language="javascript">
if (window.confirm("Música comprada, disfruta!"))
{
   window.location = "/home.html";

}
else
{
    // They clicked no
}

</script>';
