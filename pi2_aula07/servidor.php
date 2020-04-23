<?php

    header("Content-type: application/json");

    $conn = mysqli_connect("localhost", "root", "", "api_rest");
    if( $conn ){

        $result = mysqli_query( $conn, "SELECT * FROM tbl_produtos");

        $linhas = array();

        while( $row = mysqli_fetch_assoc($result)){
            $linhas[] = $row;
        }
        echo '{"produtos": '.json_encode( $linhas ) . '}';
    }


?>