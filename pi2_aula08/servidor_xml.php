<?php
    header('Content-Type: application/xml; charset=utf-8');
    $conn = mysqli_connect("localhost", "root", "", "api_rest");
    if( $conn ){
        $result = mysqli_query( $conn, "SELECT * FROM tbl_produtos");
        $xml = '<?xml version="1.0" encoding="UTF-8" ?>';
        $xml .='<lista_produtos>';
        while( $produto = mysqli_fetch_array($result)){
            $xml .= '<produto> ';
            $xml .= '    <id>'.$produto["id"].'</id>';
            $xml .= '    <nome>'.$produto["nome"].'</nome>';
            $xml .= '    <preco>'.$produto["preco"].'</preco>';
            $xml .= '</produto> ';
        }
        $xml .='</lista_produtos>';
        echo $xml;
    }
?>