-- phpMyAdmin SQL Dump
-- version 4.0.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Erstellungszeit: 01. Feb 2016 um 21:38
-- Server Version: 5.1.73
-- PHP-Version: 5.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `hhb`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `inouts`
--

CREATE TABLE IF NOT EXISTS `inouts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(360) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `date` varchar(10) CHARACTER SET latin1 COLLATE latin1_german1_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `currency` varchar(20) NOT NULL,
  `booked` tinyint(1) NOT NULL,
  `userid` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Daten für Tabelle `inouts`
--

INSERT INTO `inouts` (`id`, `name`, `date`, `amount`, `currency`, `booked`, `userid`, `timestamp`) VALUES
(1, 'edrte', '13.06.2015', 444, '&euro;', 0, 6, '2015-06-14 19:02:08'),
(2, 'bb', '14.06.2015', 4443, '', 0, 6, '2015-06-14 19:20:22'),
(3, 'eewe34532', '14.06.2015', 4466, '', 1, 6, '2015-06-14 19:22:42'),
(4, 'blooob', '19.07.2015', 34, '', 0, 6, '2015-07-19 19:34:11'),
(5, 'geeeee', '19.07.2015', 33, '', 0, 6, '2015-07-19 19:43:44'),
(6, 'nnn', '19.07.2015', 66, '', 0, 6, '2015-07-19 19:46:34'),
(7, 'zzzzzzz', '19.07.2015', 555, '', 1, 6, '2015-07-19 19:49:46');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(60) CHARACTER SET latin1 COLLATE latin1_german1_ci NOT NULL,
  `firstname` varchar(180) CHARACTER SET latin1 COLLATE latin1_german1_ci NOT NULL,
  `lastname` varchar(180) CHARACTER SET latin1 COLLATE latin1_german1_ci NOT NULL,
  `email` varchar(180) CHARACTER SET latin1 COLLATE latin1_german1_ci NOT NULL,
  `upass` varchar(20) CHARACTER SET latin1 COLLATE latin1_german1_ci NOT NULL,
  `birthday` varchar(10) CHARACTER SET latin1 COLLATE latin1_german1_ci NOT NULL,
  `gender` varchar(1) CHARACTER SET latin1 COLLATE latin1_german1_ci NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nickname` (`nickname`,`email`),
  KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Daten für Tabelle `users`
--

INSERT INTO `users` (`id`, `nickname`, `firstname`, `lastname`, `email`, `upass`, `birthday`, `gender`, `timestamp`) VALUES
(1, 'admin', 'Valeri', 'Balachnin', 'valeri.balachnin@gmail.com', 'test', '13.09.1988', '1', '2015-01-24 17:12:22'),
(6, 'bloob', 'vorname', 'name', 'test@test.de', 'test', '', '', '2015-01-24 22:16:17'),
(7, 'bloob1', 'test', 'valeri.balachnin@gmail.com', 'dfsdf@test.de', 'test', '', '', '2015-01-25 10:59:33'),
(8, 'gdfdfg', 'dfgd', 'dfgdg', 'terte@de.de', 'test', '', '', '2015-01-25 12:35:31'),
(9, 'ÐºÐ³ÐºÐµ', 'ÐºÐµÐ³ÐºÐ³', 'valeri.balachnin@gmail.com', 'rsdgt@tes.de', 'test', '', '', '2015-01-25 12:51:53'),
(13, 'valerzen', 'Valeri', 'Balachnin', 'bva091988@mail.ru', 'simsim07', '', '1', '2015-10-18 16:04:46');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
