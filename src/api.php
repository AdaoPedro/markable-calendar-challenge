<?php
    require __DIR__ . "/fileManager.php";

    if ($_GET["action"] === "save") {
        $days = empty($_GET["days"])
            ? ""
            : $_GET["days"];

        write($days);

        print_r(
            json_encode(["message" => "salvo"])
        );
    }

    if ($_GET["action"] === "load") {
        $days = read();

        print_r(
            json_encode(explode(",", $days))
        );
    }
    
    

