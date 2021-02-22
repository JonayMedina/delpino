-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-01-2021 a las 13:09:38
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crypto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countries`
--

CREATE TABLE `countries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iso` varchar(2) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `nicename` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iso3` varchar(3) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `num_country` int(11) DEFAULT NULL,
  `phone_code` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `countries`
--

INSERT INTO `countries` (`id`, `name`, `iso`, `active`, `created_at`, `updated_at`, `nicename`, `iso3`, `num_country`, `phone_code`) VALUES
(1, 'AFGHANISTAN', 'AF', 1, NULL, NULL, 'Afghanistan', 'AFG', 4, 93),
(2, 'ALBANIA', 'AL', 1, NULL, NULL, 'Albania', 'ALB', 8, 355),
(3, 'ALGERIA', 'DZ', 1, NULL, NULL, 'Algeria', 'DZA', 12, 213),
(4, 'AMERICAN SAMOA', 'AS', 1, NULL, NULL, 'American Samoa', 'ASM', 16, 1684),
(5, 'ANDORRA', 'AD', 1, NULL, NULL, 'Andorra', 'AND', 20, 376),
(6, 'ANGOLA', 'AO', 1, NULL, NULL, 'Angola', 'AGO', 24, 244),
(7, 'ANGUILLA', 'AI', 1, NULL, NULL, 'Anguilla', 'AIA', 660, 1264),
(8, 'ANTARCTICA', 'AQ', 1, NULL, NULL, 'Antarctica', NULL, NULL, 0),
(9, 'ANTIGUA AND BARBUDA', 'AG', 1, NULL, NULL, 'Antigua and Barbuda', 'ATG', 28, 1268),
(10, 'ARGENTINA', 'AR', 1, NULL, NULL, 'Argentina', 'ARG', 32, 54),
(11, 'ARMENIA', 'AM', 1, NULL, NULL, 'Armenia', 'ARM', 51, 374),
(12, 'ARUBA', 'AW', 1, NULL, NULL, 'Aruba', 'ABW', 533, 297),
(13, 'AUSTRALIA', 'AU', 1, NULL, NULL, 'Australia', 'AUS', 36, 61),
(14, 'AUSTRIA', 'AT', 1, NULL, NULL, 'Austria', 'AUT', 40, 43),
(15, 'AZERBAIJAN', 'AZ', 1, NULL, NULL, 'Azerbaijan', 'AZE', 31, 994),
(16, 'BAHAMAS', 'BS', 1, NULL, NULL, 'Bahamas', 'BHS', 44, 1242),
(17, 'BAHRAIN', 'BH', 1, NULL, NULL, 'Bahrain', 'BHR', 48, 973),
(18, 'BANGLADESH', 'BD', 1, NULL, NULL, 'Bangladesh', 'BGD', 50, 880),
(19, 'BARBADOS', 'BB', 1, NULL, NULL, 'Barbados', 'BRB', 52, 1246),
(20, 'BELARUS', 'BY', 1, NULL, NULL, 'Belarus', 'BLR', 112, 375),
(21, 'BELGIUM', 'BE', 1, NULL, NULL, 'Belgium', 'BEL', 56, 32),
(22, 'BELIZE', 'BZ', 1, NULL, NULL, 'Belize', 'BLZ', 84, 501),
(23, 'BENIN', 'BJ', 1, NULL, NULL, 'Benin', 'BEN', 204, 229),
(24, 'BERMUDA', 'BM', 1, NULL, NULL, 'Bermuda', 'BMU', 60, 1441),
(25, 'BHUTAN', 'BT', 1, NULL, NULL, 'Bhutan', 'BTN', 64, 975),
(26, 'BOLIVIA', 'BO', 1, NULL, NULL, 'Bolivia', 'BOL', 68, 591),
(27, 'BOSNIA AND HERZEGOVINA', 'BA', 1, NULL, NULL, 'Bosnia and Herzegovina', 'BIH', 70, 387),
(28, 'BOTSWANA', 'BW', 1, NULL, NULL, 'Botswana', 'BWA', 72, 267),
(29, 'BOUVET ISLAND', 'BV', 1, NULL, NULL, 'Bouvet Island', NULL, NULL, 0),
(30, 'BRAZIL', 'BR', 1, NULL, NULL, 'Brazil', 'BRA', 76, 55),
(31, 'BRITISH INDIAN OCEAN TERRITORY', 'IO', 1, NULL, NULL, 'British Indian Ocean Territory', NULL, NULL, 246),
(32, 'BRUNEI DARUSSALAM', 'BN', 1, NULL, NULL, 'Brunei Darussalam', 'BRN', 96, 673),
(33, 'BULGARIA', 'BG', 1, NULL, NULL, 'Bulgaria', 'BGR', 100, 359),
(34, 'BURKINA FASO', 'BF', 1, NULL, NULL, 'Burkina Faso', 'BFA', 854, 226),
(35, 'BURUNDI', 'BI', 1, NULL, NULL, 'Burundi', 'BDI', 108, 257),
(36, 'CAMBODIA', 'KH', 1, NULL, NULL, 'Cambodia', 'KHM', 116, 855),
(37, 'CAMEROON', 'CM', 1, NULL, NULL, 'Cameroon', 'CMR', 120, 237),
(38, 'CANADA', 'CA', 1, NULL, NULL, 'Canada', 'CAN', 124, 1),
(39, 'CAPE VERDE', 'CV', 1, NULL, NULL, 'Cape Verde', 'CPV', 132, 238),
(40, 'CAYMAN ISLANDS', 'KY', 1, NULL, NULL, 'Cayman Islands', 'CYM', 136, 1345),
(41, 'CENTRAL AFRICAN REPUBLIC', 'CF', 1, NULL, NULL, 'Central African Republic', 'CAF', 140, 236),
(42, 'CHAD', 'TD', 1, NULL, NULL, 'Chad', 'TCD', 148, 235),
(43, 'CHILE', 'CL', 1, NULL, NULL, 'Chile', 'CHL', 152, 56),
(44, 'CHINA', 'CN', 1, NULL, NULL, 'China', 'CHN', 156, 86),
(45, 'CHRISTMAS ISLAND', 'CX', 1, NULL, NULL, 'Christmas Island', NULL, NULL, 61),
(46, 'COCOS (KEELING) ISLANDS', 'CC', 1, NULL, NULL, 'Cocos (Keeling) Islands', NULL, NULL, 672),
(47, 'COLOMBIA', 'CO', 1, NULL, NULL, 'Colombia', 'COL', 170, 57),
(48, 'COMOROS', 'KM', 1, NULL, NULL, 'Comoros', 'COM', 174, 269),
(49, 'CONGO', 'CG', 1, NULL, NULL, 'Congo', 'COG', 178, 242),
(50, 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', 'CD', 1, NULL, NULL, 'Congo, the Democratic Republic of the', 'COD', 180, 242),
(51, 'COOK ISLANDS', 'CK', 1, NULL, NULL, 'Cook Islands', 'COK', 184, 682),
(52, 'COSTA RICA', 'CR', 1, NULL, NULL, 'Costa Rica', 'CRI', 188, 506),
(53, 'COTE D\'IVOIRE', 'CI', 1, NULL, NULL, 'Cote D\'Ivoire', 'CIV', 384, 225),
(54, 'CROATIA', 'HR', 1, NULL, NULL, 'Croatia', 'HRV', 191, 385),
(55, 'CUBA', 'CU', 1, NULL, NULL, 'Cuba', 'CUB', 192, 53),
(56, 'CYPRUS', 'CY', 1, NULL, NULL, 'Cyprus', 'CYP', 196, 357),
(57, 'CZECH REPUBLIC', 'CZ', 1, NULL, NULL, 'Czech Republic', 'CZE', 203, 420),
(58, 'DENMARK', 'DK', 1, NULL, NULL, 'Denmark', 'DNK', 208, 45),
(59, 'DJIBOUTI', 'DJ', 1, NULL, NULL, 'Djibouti', 'DJI', 262, 253),
(60, 'DOMINICA', 'DM', 1, NULL, NULL, 'Dominica', 'DMA', 212, 1767),
(61, 'DOMINICAN REPUBLIC', 'DO', 1, NULL, NULL, 'Dominican Republic', 'DOM', 214, 1809),
(62, 'ECUADOR', 'EC', 1, NULL, NULL, 'Ecuador', 'ECU', 218, 593),
(63, 'EGYPT', 'EG', 1, NULL, NULL, 'Egypt', 'EGY', 818, 20),
(64, 'EL SALVADOR', 'SV', 1, NULL, NULL, 'El Salvador', 'SLV', 222, 503),
(65, 'EQUATORIAL GUINEA', 'GQ', 1, NULL, NULL, 'Equatorial Guinea', 'GNQ', 226, 240),
(66, 'ERITREA', 'ER', 1, NULL, NULL, 'Eritrea', 'ERI', 232, 291),
(67, 'ESTONIA', 'EE', 1, NULL, NULL, 'Estonia', 'EST', 233, 372),
(68, 'ETHIOPIA', 'ET', 1, NULL, NULL, 'Ethiopia', 'ETH', 231, 251),
(69, 'FALKLAND ISLANDS (MALVINAS)', 'FK', 1, NULL, NULL, 'Falkland Islands (Malvinas)', 'FLK', 238, 500),
(70, 'FAROE ISLANDS', 'FO', 1, NULL, NULL, 'Faroe Islands', 'FRO', 234, 298),
(71, 'FIJI', 'FJ', 1, NULL, NULL, 'Fiji', 'FJI', 242, 679),
(72, 'FINLAND', 'FI', 1, NULL, NULL, 'Finland', 'FIN', 246, 358),
(73, 'FRANCE', 'FR', 1, NULL, NULL, 'France', 'FRA', 250, 33),
(74, 'FRENCH GUIANA', 'GF', 1, NULL, NULL, 'French Guiana', 'GUF', 254, 594),
(75, 'FRENCH POLYNESIA', 'PF', 1, NULL, NULL, 'French Polynesia', 'PYF', 258, 689),
(76, 'FRENCH SOUTHERN TERRITORIES', 'TF', 1, NULL, NULL, 'French Southern Territories', NULL, NULL, 0),
(77, 'GABON', 'GA', 1, NULL, NULL, 'Gabon', 'GAB', 266, 241),
(78, 'GAMBIA', 'GM', 1, NULL, NULL, 'Gambia', 'GMB', 270, 220),
(79, 'GEORGIA', 'GE', 1, NULL, NULL, 'Georgia', 'GEO', 268, 995),
(80, 'GERMANY', 'DE', 1, NULL, NULL, 'Germany', 'DEU', 276, 49),
(81, 'GHANA', 'GH', 1, NULL, NULL, 'Ghana', 'GHA', 288, 233),
(82, 'GIBRALTAR', 'GI', 1, NULL, NULL, 'Gibraltar', 'GIB', 292, 350),
(83, 'GREECE', 'GR', 1, NULL, NULL, 'Greece', 'GRC', 300, 30),
(84, 'GREENLAND', 'GL', 1, NULL, NULL, 'Greenland', 'GRL', 304, 299),
(85, 'GRENADA', 'GD', 1, NULL, NULL, 'Grenada', 'GRD', 308, 1473),
(86, 'GUADELOUPE', 'GP', 1, NULL, NULL, 'Guadeloupe', 'GLP', 312, 590),
(87, 'GUAM', 'GU', 1, NULL, NULL, 'Guam', 'GUM', 316, 1671),
(88, 'GUATEMALA', 'GT', 1, NULL, NULL, 'Guatemala', 'GTM', 320, 502),
(89, 'GUINEA', 'GN', 1, NULL, NULL, 'Guinea', 'GIN', 324, 224),
(90, 'GUINEA-BISSAU', 'GW', 1, NULL, NULL, 'Guinea-Bissau', 'GNB', 624, 245),
(91, 'GUYANA', 'GY', 1, NULL, NULL, 'Guyana', 'GUY', 328, 592),
(92, 'HAITI', 'HT', 1, NULL, NULL, 'Haiti', 'HTI', 332, 509),
(93, 'HEARD ISLAND AND MCDONALD ISLANDS', 'HM', 1, NULL, NULL, 'Heard Island and Mcdonald Islands', NULL, NULL, 0),
(94, 'HOLY SEE (VATICAN CITY STATE)', 'VA', 1, NULL, NULL, 'Holy See (Vatican City State)', 'VAT', 336, 39),
(95, 'HONDURAS', 'HN', 1, NULL, NULL, 'Honduras', 'HND', 340, 504),
(96, 'HONG KONG', 'HK', 1, NULL, NULL, 'Hong Kong', 'HKG', 344, 852),
(97, 'HUNGARY', 'HU', 1, NULL, NULL, 'Hungary', 'HUN', 348, 36),
(98, 'ICELAND', 'IS', 1, NULL, NULL, 'Iceland', 'ISL', 352, 354),
(99, 'INDIA', 'IN', 1, NULL, NULL, 'India', 'IND', 356, 91),
(100, 'INDONESIA', 'ID', 1, NULL, NULL, 'Indonesia', 'IDN', 360, 62),
(101, 'IRAN, ISLAMIC REPUBLIC OF', 'IR', 1, NULL, NULL, 'Iran, Islamic Republic of', 'IRN', 364, 98),
(102, 'IRAQ', 'IQ', 1, NULL, NULL, 'Iraq', 'IRQ', 368, 964),
(103, 'IRELAND', 'IE', 1, NULL, NULL, 'Ireland', 'IRL', 372, 353),
(104, 'ISRAEL', 'IL', 1, NULL, NULL, 'Israel', 'ISR', 376, 972),
(105, 'ITALY', 'IT', 1, NULL, NULL, 'Italy', 'ITA', 380, 39),
(106, 'JAMAICA', 'JM', 1, NULL, NULL, 'Jamaica', 'JAM', 388, 1876),
(107, 'JAPAN', 'JP', 1, NULL, NULL, 'Japan', 'JPN', 392, 81),
(108, 'JORDAN', 'JO', 1, NULL, NULL, 'Jordan', 'JOR', 400, 962),
(109, 'KAZAKHSTAN', 'KZ', 1, NULL, NULL, 'Kazakhstan', 'KAZ', 398, 7),
(110, 'KENYA', 'KE', 1, NULL, NULL, 'Kenya', 'KEN', 404, 254),
(111, 'KIRIBATI', 'KI', 1, NULL, NULL, 'Kiribati', 'KIR', 296, 686),
(112, 'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF', 'KP', 1, NULL, NULL, 'Korea, Democratic People\'s Republic of', 'PRK', 408, 850),
(113, 'KOREA, REPUBLIC OF', 'KR', 1, NULL, NULL, 'Korea, Republic of', 'KOR', 410, 82),
(114, 'KUWAIT', 'KW', 1, NULL, NULL, 'Kuwait', 'KWT', 414, 965),
(115, 'KYRGYZSTAN', 'KG', 1, NULL, NULL, 'Kyrgyzstan', 'KGZ', 417, 996),
(116, 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC', 'LA', 1, NULL, NULL, 'Lao People\'s Democratic Republic', 'LAO', 418, 856),
(117, 'LATVIA', 'LV', 1, NULL, NULL, 'Latvia', 'LVA', 428, 371),
(118, 'LEBANON', 'LB', 1, NULL, NULL, 'Lebanon', 'LBN', 422, 961),
(119, 'LESOTHO', 'LS', 1, NULL, NULL, 'Lesotho', 'LSO', 426, 266),
(120, 'LIBERIA', 'LR', 1, NULL, NULL, 'Liberia', 'LBR', 430, 231),
(121, 'LIBYAN ARAB JAMAHIRIYA', 'LY', 1, NULL, NULL, 'Libyan Arab Jamahiriya', 'LBY', 434, 218),
(122, 'LIECHTENSTEIN', 'LI', 1, NULL, NULL, 'Liechtenstein', 'LIE', 438, 423),
(123, 'LITHUANIA', 'LT', 1, NULL, NULL, 'Lithuania', 'LTU', 440, 370),
(124, 'LUXEMBOURG', 'LU', 1, NULL, NULL, 'Luxembourg', 'LUX', 442, 352),
(125, 'MACAO', 'MO', 1, NULL, NULL, 'Macao', 'MAC', 446, 853),
(126, 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', 'MK', 1, NULL, NULL, 'Macedonia, the Former Yugoslav Republic of', 'MKD', 807, 389),
(127, 'MADAGASCAR', 'MG', 1, NULL, NULL, 'Madagascar', 'MDG', 450, 261),
(128, 'MALAWI', 'MW', 1, NULL, NULL, 'Malawi', 'MWI', 454, 265),
(129, 'MALAYSIA', 'MY', 1, NULL, NULL, 'Malaysia', 'MYS', 458, 60),
(130, 'MALDIVES', 'MV', 1, NULL, NULL, 'Maldives', 'MDV', 462, 960),
(131, 'MALI', 'ML', 1, NULL, NULL, 'Mali', 'MLI', 466, 223),
(132, 'MALTA', 'MT', 1, NULL, NULL, 'Malta', 'MLT', 470, 356),
(133, 'MARSHALL ISLANDS', 'MH', 1, NULL, NULL, 'Marshall Islands', 'MHL', 584, 692),
(134, 'MARTINIQUE', 'MQ', 1, NULL, NULL, 'Martinique', 'MTQ', 474, 596),
(135, 'MAURITANIA', 'MR', 1, NULL, NULL, 'Mauritania', 'MRT', 478, 222),
(136, 'MAURITIUS', 'MU', 1, NULL, NULL, 'Mauritius', 'MUS', 480, 230),
(137, 'MAYOTTE', 'YT', 1, NULL, NULL, 'Mayotte', NULL, NULL, 269),
(138, 'MEXICO', 'MX', 1, NULL, NULL, 'Mexico', 'MEX', 484, 52),
(139, 'MICRONESIA, FEDERATED STATES OF', 'FM', 1, NULL, NULL, 'Micronesia, Federated States of', 'FSM', 583, 691),
(140, 'MOLDOVA, REPUBLIC OF', 'MD', 1, NULL, NULL, 'Moldova, Republic of', 'MDA', 498, 373),
(141, 'MONACO', 'MC', 1, NULL, NULL, 'Monaco', 'MCO', 492, 377),
(142, 'MONGOLIA', 'MN', 1, NULL, NULL, 'Mongolia', 'MNG', 496, 976),
(143, 'MONTSERRAT', 'MS', 1, NULL, NULL, 'Montserrat', 'MSR', 500, 1664),
(144, 'MOROCCO', 'MA', 1, NULL, NULL, 'Morocco', 'MAR', 504, 212),
(145, 'MOZAMBIQUE', 'MZ', 1, NULL, NULL, 'Mozambique', 'MOZ', 508, 258),
(146, 'MYANMAR', 'MM', 1, NULL, NULL, 'Myanmar', 'MMR', 104, 95),
(147, 'NAMIBIA', 'NA', 1, NULL, NULL, 'Namibia', 'NAM', 516, 264),
(148, 'NAURU', 'NR', 1, NULL, NULL, 'Nauru', 'NRU', 520, 674),
(149, 'NEPAL', 'NP', 1, NULL, NULL, 'Nepal', 'NPL', 524, 977),
(150, 'NETHERLANDS', 'NL', 1, NULL, NULL, 'Netherlands', 'NLD', 528, 31),
(151, 'NETHERLANDS ANTILLES', 'AN', 1, NULL, NULL, 'Netherlands Antilles', 'ANT', 530, 599),
(152, 'NEW CALEDONIA', 'NC', 1, NULL, NULL, 'New Caledonia', 'NCL', 540, 687),
(153, 'NEW ZEALAND', 'NZ', 1, NULL, NULL, 'New Zealand', 'NZL', 554, 64),
(154, 'NICARAGUA', 'NI', 1, NULL, NULL, 'Nicaragua', 'NIC', 558, 505),
(155, 'NIGER', 'NE', 1, NULL, NULL, 'Niger', 'NER', 562, 227),
(156, 'NIGERIA', 'NG', 1, NULL, NULL, 'Nigeria', 'NGA', 566, 234),
(157, 'NIUE', 'NU', 1, NULL, NULL, 'Niue', 'NIU', 570, 683),
(158, 'NORFOLK ISLAND', 'NF', 1, NULL, NULL, 'Norfolk Island', 'NFK', 574, 672),
(159, 'NORTHERN MARIANA ISLANDS', 'MP', 1, NULL, NULL, 'Northern Mariana Islands', 'MNP', 580, 1670),
(160, 'NORWAY', 'NO', 1, NULL, NULL, 'Norway', 'NOR', 578, 47),
(161, 'OMAN', 'OM', 1, NULL, NULL, 'Oman', 'OMN', 512, 968),
(162, 'PAKISTAN', 'PK', 1, NULL, NULL, 'Pakistan', 'PAK', 586, 92),
(163, 'PALAU', 'PW', 1, NULL, NULL, 'Palau', 'PLW', 585, 680),
(164, 'PALESTINIAN TERRITORY, OCCUPIED', 'PS', 1, NULL, NULL, 'Palestinian Territory, Occupied', NULL, NULL, 970),
(165, 'PANAMA', 'PA', 1, NULL, NULL, 'Panama', 'PAN', 591, 507),
(166, 'PAPUA NEW GUINEA', 'PG', 1, NULL, NULL, 'Papua New Guinea', 'PNG', 598, 675),
(167, 'PARAGUAY', 'PY', 1, NULL, NULL, 'Paraguay', 'PRY', 600, 595),
(168, 'PERU', 'PE', 1, NULL, NULL, 'Peru', 'PER', 604, 51),
(169, 'PHILIPPINES', 'PH', 1, NULL, NULL, 'Philippines', 'PHL', 608, 63),
(170, 'PITCAIRN', 'PN', 1, NULL, NULL, 'Pitcairn', 'PCN', 612, 0),
(171, 'POLAND', 'PL', 1, NULL, NULL, 'Poland', 'POL', 616, 48),
(172, 'PORTUGAL', 'PT', 1, NULL, NULL, 'Portugal', 'PRT', 620, 351),
(173, 'PUERTO RICO', 'PR', 1, NULL, NULL, 'Puerto Rico', 'PRI', 630, 1787),
(174, 'QATAR', 'QA', 1, NULL, NULL, 'Qatar', 'QAT', 634, 974),
(175, 'REUNION', 'RE', 1, NULL, NULL, 'Reunion', 'REU', 638, 262),
(176, 'ROMANIA', 'RO', 1, NULL, NULL, 'Romania', 'ROM', 642, 40),
(177, 'RUSSIAN FEDERATION', 'RU', 1, NULL, NULL, 'Russian Federation', 'RUS', 643, 70),
(178, 'RWANDA', 'RW', 1, NULL, NULL, 'Rwanda', 'RWA', 646, 250),
(179, 'SAINT HELENA', 'SH', 1, NULL, NULL, 'Saint Helena', 'SHN', 654, 290),
(180, 'SAINT KITTS AND NEVIS', 'KN', 1, NULL, NULL, 'Saint Kitts and Nevis', 'KNA', 659, 1869),
(181, 'SAINT LUCIA', 'LC', 1, NULL, NULL, 'Saint Lucia', 'LCA', 662, 1758),
(182, 'SAINT PIERRE AND MIQUELON', 'PM', 1, NULL, NULL, 'Saint Pierre and Miquelon', 'SPM', 666, 508),
(183, 'SAINT VINCENT AND THE GRENADINES', 'VC', 1, NULL, NULL, 'Saint Vincent and the Grenadines', 'VCT', 670, 1784),
(184, 'SAMOA', 'WS', 1, NULL, NULL, 'Samoa', 'WSM', 882, 684),
(185, 'SAN MARINO', 'SM', 1, NULL, NULL, 'San Marino', 'SMR', 674, 378),
(186, 'SAO TOME AND PRINCIPE', 'ST', 1, NULL, NULL, 'Sao Tome and Principe', 'STP', 678, 239),
(187, 'SAUDI ARABIA', 'SA', 1, NULL, NULL, 'Saudi Arabia', 'SAU', 682, 966),
(188, 'SENEGAL', 'SN', 1, NULL, NULL, 'Senegal', 'SEN', 686, 221),
(189, 'SERBIA AND MONTENEGRO', 'CS', 1, NULL, NULL, 'Serbia and Montenegro', NULL, NULL, 381),
(190, 'SEYCHELLES', 'SC', 1, NULL, NULL, 'Seychelles', 'SYC', 690, 248),
(191, 'SIERRA LEONE', 'SL', 1, NULL, NULL, 'Sierra Leone', 'SLE', 694, 232),
(192, 'SINGAPORE', 'SG', 1, NULL, NULL, 'Singapore', 'SGP', 702, 65),
(193, 'SLOVAKIA', 'SK', 1, NULL, NULL, 'Slovakia', 'SVK', 703, 421),
(194, 'SLOVENIA', 'SI', 1, NULL, NULL, 'Slovenia', 'SVN', 705, 386),
(195, 'SOLOMON ISLANDS', 'SB', 1, NULL, NULL, 'Solomon Islands', 'SLB', 90, 677),
(196, 'SOMALIA', 'SO', 1, NULL, NULL, 'Somalia', 'SOM', 706, 252),
(197, 'SOUTH AFRICA', 'ZA', 1, NULL, NULL, 'South Africa', 'ZAF', 710, 27),
(198, 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS', 'GS', 1, NULL, NULL, 'South Georgia and the South Sandwich Islands', NULL, NULL, 0),
(199, 'SPAIN', 'ES', 1, NULL, NULL, 'Spain', 'ESP', 724, 34),
(200, 'SRI LANKA', 'LK', 1, NULL, NULL, 'Sri Lanka', 'LKA', 144, 94),
(201, 'SUDAN', 'SD', 1, NULL, NULL, 'Sudan', 'SDN', 736, 249),
(202, 'SURINAME', 'SR', 1, NULL, NULL, 'Suriname', 'SUR', 740, 597),
(203, 'SVALBARD AND JAN MAYEN', 'SJ', 1, NULL, NULL, 'Svalbard and Jan Mayen', 'SJM', 744, 47),
(204, 'SWAZILAND', 'SZ', 1, NULL, NULL, 'Swaziland', 'SWZ', 748, 268),
(205, 'SWEDEN', 'SE', 1, NULL, NULL, 'Sweden', 'SWE', 752, 46),
(206, 'SWITZERLAND', 'CH', 1, NULL, NULL, 'Switzerland', 'CHE', 756, 41),
(207, 'SYRIAN ARAB REPUBLIC', 'SY', 1, NULL, NULL, 'Syrian Arab Republic', 'SYR', 760, 963),
(208, 'TAIWAN, PROVINCE OF CHINA', 'TW', 1, NULL, NULL, 'Taiwan, Province of China', 'TWN', 158, 886),
(209, 'TAJIKISTAN', 'TJ', 1, NULL, NULL, 'Tajikistan', 'TJK', 762, 992),
(210, 'TANZANIA, UNITED REPUBLIC OF', 'TZ', 1, NULL, NULL, 'Tanzania, United Republic of', 'TZA', 834, 255),
(211, 'THAILAND', 'TH', 1, NULL, NULL, 'Thailand', 'THA', 764, 66),
(212, 'TIMOR-LESTE', 'TL', 1, NULL, NULL, 'Timor-Leste', NULL, NULL, 670),
(213, 'TOGO', 'TG', 1, NULL, NULL, 'Togo', 'TGO', 768, 228),
(214, 'TOKELAU', 'TK', 1, NULL, NULL, 'Tokelau', 'TKL', 772, 690),
(215, 'TONGA', 'TO', 1, NULL, NULL, 'Tonga', 'TON', 776, 676),
(216, 'TRINIDAD AND TOBAGO', 'TT', 1, NULL, NULL, 'Trinidad and Tobago', 'TTO', 780, 1868),
(217, 'TUNISIA', 'TN', 1, NULL, NULL, 'Tunisia', 'TUN', 788, 216),
(218, 'TURKEY', 'TR', 1, NULL, NULL, 'Turkey', 'TUR', 792, 90),
(219, 'TURKMENISTAN', 'TM', 1, NULL, NULL, 'Turkmenistan', 'TKM', 795, 7370),
(220, 'TURKS AND CAICOS ISLANDS', 'TC', 1, NULL, NULL, 'Turks and Caicos Islands', 'TCA', 796, 1649),
(221, 'TUVALU', 'TV', 1, NULL, NULL, 'Tuvalu', 'TUV', 798, 688),
(222, 'UGANDA', 'UG', 1, NULL, NULL, 'Uganda', 'UGA', 800, 256),
(223, 'UKRAINE', 'UA', 1, NULL, NULL, 'Ukraine', 'UKR', 804, 380),
(224, 'UNITED ARAB EMIRATES', 'AE', 1, NULL, NULL, 'United Arab Emirates', 'ARE', 784, 971),
(225, 'UNITED KINGDOM', 'GB', 1, NULL, NULL, 'United Kingdom', 'GBR', 826, 44),
(226, 'UNITED STATES', 'US', 1, NULL, NULL, 'United States', 'USA', 840, 1),
(227, 'UNITED STATES MINOR OUTLYING ISLANDS', 'UM', 1, NULL, NULL, 'United States Minor Outlying Islands', NULL, NULL, 1),
(228, 'URUGUAY', 'UY', 1, NULL, NULL, 'Uruguay', 'URY', 858, 598),
(229, 'UZBEKISTAN', 'UZ', 1, NULL, NULL, 'Uzbekistan', 'UZB', 860, 998),
(230, 'VANUATU', 'VU', 1, NULL, NULL, 'Vanuatu', 'VUT', 548, 678),
(231, 'VENEZUELA', 'VE', 1, NULL, NULL, 'Venezuela', 'VEN', 862, 58),
(232, 'VIET NAM', 'VN', 1, NULL, NULL, 'Viet Nam', 'VNM', 704, 84),
(233, 'VIRGIN ISLANDS, BRITISH', 'VG', 1, NULL, NULL, 'Virgin Islands, British', 'VGB', 92, 1284),
(234, 'VIRGIN ISLANDS, U.S.', 'VI', 1, NULL, NULL, 'Virgin Islands, U.s.', 'VIR', 850, 1340),
(235, 'WALLIS AND FUTUNA', 'WF', 1, NULL, NULL, 'Wallis and Futuna', 'WLF', 876, 681),
(236, 'WESTERN SAHARA', 'EH', 1, NULL, NULL, 'Western Sahara', 'ESH', 732, 212),
(237, 'YEMEN', 'YE', 1, NULL, NULL, 'Yemen', 'YEM', 887, 967),
(238, 'ZAMBIA', 'ZM', 1, NULL, NULL, 'Zambia', 'ZMB', 894, 260),
(239, 'ZIMBABWE', 'ZW', 1, NULL, NULL, 'Zimbabwe', 'ZWE', 716, 263);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `countries`
--
ALTER TABLE `countries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=241;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
