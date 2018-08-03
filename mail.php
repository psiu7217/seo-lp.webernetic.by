<?php
if ($_POST['phone'] == '') {

    $to = 'sale@webernetic.by';
    //$to = 'dev@webernetic.by';

    $subject = 'Заявка с SEO лендинга';

    $headers = "From: webernetic.by\r\n";
    $headers .= "CC: info@webernetic.by\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $message = '<html><body>';
    $message .= '<h1 style="color:#000;">Заявка с лендинга seo.webernetic.by</h1>';
    $message .= '<p><strong>Имя:</strong> '. $_POST['user_name'] .'</p>';
    $message .= '<p><strong>Email:</strong> '. $_POST['user_mail'] .'</p>';
    $message .= '<p><strong>Телефон:</strong> '. $_POST['user_phone'] .'</p>';
    $message .= '<p><strong>Адрес сайта:</strong> '. $_POST['user_site_url'] .'</p>';
    $message .= '</body></html>';


    //mail($to, $subject, $message, $headers);
    //Это для Ани маркетолога
    mail('dev@webernetic.by', $subject, $message, $headers);


}else {
    echo 'bot';
}