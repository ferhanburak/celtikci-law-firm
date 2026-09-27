<?php
/**
 * Celtikci Law Firm — İletişim formu e-posta uç noktası
 *
 * Üçüncü parti bir form servisine (Formspree, EmailJS vb.) bağımlı değildir,
 * bu yüzden günlük/aylık gönderim kotasına takılmaz — sunucunuzun kendi
 * PHP mail() fonksiyonunu kullanır. Barındırmanızın (cPanel vb.) PHP
 * desteklemesi yeterlidir; ek bir kurulum/kütüphane gerekmez.
 *
 * Bu dosya derleme sırasında olduğu gibi kopyalanır (public/ klasöründe),
 * dist/ ile birlikte sunucuya yüklenmelidir.
 */

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Yalnızca POST istekleri kabul edilir.']);
    exit;
}

// Basit bot tuzağı (honeypot): gizli alan doluysa sessizce başarı dön, mail gönderme.
if (!empty(trim($_POST['website'] ?? ''))) {
    echo json_encode(['success' => true]);
    exit;
}

function clean_field($value) {
    $value = trim($value ?? '');
    // E-posta başlık enjeksiyonunu önlemek için satır sonlarını temizle.
    return str_replace(["\r", "\n"], '', $value);
}

$name    = clean_field($_POST['name'] ?? '');
$email   = clean_field($_POST['email'] ?? '');
$phone   = clean_field($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');

$errors = [];
if ($name === '') {
    $errors[] = 'Ad Soyad zorunludur.';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Geçerli bir e-posta adresi girin.';
}
if ($message === '') {
    $errors[] = 'Mesaj zorunludur.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => implode(' ', $errors)]);
    exit;
}

$to      = 'anil@celtikci.av.tr';
$subject = '=?UTF-8?B?' . base64_encode('Web sitesi iletişim formu — ' . $name) . '?=';

$body  = "Web sitesi iletişim formundan yeni bir mesaj alındı:\n\n";
$body .= "Ad Soyad : {$name}\n";
$body .= "E-posta  : {$email}\n";
$body .= "Telefon  : " . ($phone !== '' ? $phone : '-') . "\n\n";
$body .= "Mesaj:\n{$message}\n";

$domain = $_SERVER['SERVER_NAME'] ?? 'celtikci.av.tr';

$headers   = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: Celtikci Law Firm Web Sitesi <no-reply@' . $domain . '>';
// Cevapla'ya basıldığında doğrudan mesajı gönderen kişiye gitsin.
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin veya doğrudan anil@celtikci.av.tr adresine yazın.',
    ]);
}
