<?php declare( strict_types=1 );

if (array_key_exists('remoteUrl', $attributes) && $attributes['remoteUrl']) {
    $remoteUrl = $attributes['remoteUrl'];

    $remoteJsonBody = wp_remote_get($remoteUrl)['body'];

    $remoteProperties = json_decode($remoteJsonBody);

    foreach ($remoteProperties as $key => $value) {
        $ccKey = underscoreToCamelCase($key);

        if (!array_key_exists($ccKey, $attributes) || !$attributes[$ccKey]) {
            $attributes[$ccKey] = $remoteProperties->$key;
        }
    }
}

function underscoreToCamelCase($string, $capitalizeFirstCharacter = false): string
{
    $str = str_replace(' ', '', ucwords(str_replace('_', ' ', $string)));

    if (!$capitalizeFirstCharacter) {
        $str[0] = strtolower($str[0]);
    }

    return $str;
}
?>

<p>
    <?php echo $attributes['firstName']; ?> <?php echo $attributes['lastName']; ?>
    <br />
    <?php echo $attributes['street']; ?> <?php echo $attributes['houseNumber']; ?>
    <br />
    <?php echo $attributes['zipCode']; ?> <?php echo $attributes['city']; ?>
</p>

<p>
    E-Mail: <a href="mailto:<?php echo $attributes['emailAddress']; ?>"><?php echo $attributes['emailAddress']; ?></a>
    <br />
    Telefon: <a href="tel:<?php echo $attributes['phoneNumber']; ?>"><?php echo $attributes['phoneNumber']; ?></a>
</p>
