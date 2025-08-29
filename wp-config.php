<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mauriciojuanes_portafolio' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9C$hJbF_*V&zphcsxbv`BFizgD3wk/1d57AhAX:A>vuwg$2Ij[I4NZ3;$7;a@wV^' );
define( 'SECURE_AUTH_KEY',  '!my6kkgMHn8@`<EqD2Xjk1u4zhJD]T6-l6JPn =bvqzu4?.zYV)a{I4V-9}9L(}[' );
define( 'LOGGED_IN_KEY',    'W 3I|@9T9n*L6IJ|rMB3cR/Q;WfXmCj{*![v^s[nSx`a~xI h%x2Bv(&}vh}/%m^' );
define( 'NONCE_KEY',        '<s_4q?~T57>=4GTON#+<gF%mKP3`mS)#RH)LqR .pZ]L4-WoY+2(k]{n8yVB!JO9' );
define( 'AUTH_SALT',        'q,~`11jV#mEw-/nGu=hUt%xWkC1uAv9$*F2yO.X1ZsZ%[y:+aFuo^]+hx7/3 h^}' );
define( 'SECURE_AUTH_SALT', '_=G/t.:MXBk[yH{{&~ lAuHaF7c~Pi0]de*Et*cp@;`yYIvEGAtaco!!}qh`tM)!' );
define( 'LOGGED_IN_SALT',   '__MtGV$I:T[s>$l=?/,LA%E>XK*)t}Vc=g2=M}w-0w1EVO>,A`f7!HMDLc}(9x3r' );
define( 'NONCE_SALT',       '(PkDUTNO4>0f3CJ%b#jI>k$7o$)z#Kga+ID#)qOKZLpMnsIdv_zclD+6JN32:M%E' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
