<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <link rel="stylesheet" href="./CSS/banner.css">
    <link rel="stylesheet" href="./CSS/nosotros.css">
    <link rel="stylesheet" href="./CSS/header.css">
    <link rel="stylesheet" href="./CSS/servicios.css">
    
</head>
<body>
<article class="menu-hamburger">
        <img src="./IMGS/menu.png" alt="hamburguer" class="hamburger">
        <img src="./IMGS/menu-colapse.png" alt="hamburger colapse" class="hamburger-colapse">
    </article>
    <?php
    require_once "header.php"
    ?> 

    <?php
    require_once "banner.php"
    ?>
<?php
    require_once "nosotros.php"
    ?>
<?php
    require_once "servicios.php"
    ?>


<script src="./javaScript/header.js"></script>
<script src="./javaScript/banner.js"></script>
<script src="./javaScript/nosotros.js"></script>
<script src="./javaScript/banner.js"></script>
</body>
</html>