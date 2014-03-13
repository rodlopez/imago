-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.5.16 - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL version:             7.0.0.4053
-- Date/time:                    2012-02-29 21:56:29
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;

-- Dumping database structure for mvcclientes
CREATE DATABASE IF NOT EXISTS `mvcclientes` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mvcclientes`;


-- Dumping structure for table mvcclientes.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `idcliente` int(10) NOT NULL AUTO_INCREMENT,
  `Cliente` char(120) DEFAULT NULL,
  `Sexo` char(1) DEFAULT 'M',
  `Edad` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`idcliente`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

-- Dumping data for table mvcclientes.clientes: ~13 rows (approximately)
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` (`idcliente`, `Cliente`, `Sexo`, `Edad`) VALUES
	(1, 'Juan Patistan Lopez Lara', 'M', 25),
	(2, 'Hortencia Ramirez Diaz', 'F', 35),
	(3, 'Filadelfo Perez Jolote', 'M', 39),
	(6, 'Ataulfo Diaz fernandez', 'M', 35),
	(12, 'Andres Ivan Moreno Pascacio', 'M', 11),
	(14, 'Alonso Molina Dominguez', 'M', 36),
	(15, 'Juan Pablo Moreno Tovilla', 'M', 30),
	(16, 'Armando Diaz Lopez', 'M', 35),
	(23, 'Donaciano Tovilla Hernandez', 'M', 25),
	(24, 'Roberto Ruiz Gutierrez', 'M', 34),
	(26, 'Juan Arturo Diaz Lopez', 'M', 35),
	(27, 'Carlos Alejandro Moreno Pascacio', 'M', 1),
	(28, 'Arturo Mata Sarmiento', 'M', 36);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;


-- Dumping structure for table mvcclientes.facturas
CREATE TABLE IF NOT EXISTS `facturas` (
  `IdFactura` int(10) NOT NULL AUTO_INCREMENT,
  `Idcliente` int(10) DEFAULT '0',
  `Total` double DEFAULT '0',
  PRIMARY KEY (`IdFactura`),
  KEY `FK__clientes` (`Idcliente`),
  CONSTRAINT `FK__clientes` FOREIGN KEY (`Idcliente`) REFERENCES `clientes` (`idcliente`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table mvcclientes.facturas: ~6 rows (approximately)
/*!40000 ALTER TABLE `facturas` DISABLE KEYS */;
INSERT INTO `facturas` (`IdFactura`, `Idcliente`, `Total`) VALUES
	(1, 1, 100),
	(2, 1, 200),
	(3, 2, 100),
	(4, 3, 500),
	(5, 3, 200),
	(6, 3, 100);
/*!40000 ALTER TABLE `facturas` ENABLE KEYS */;
/*!40014 SET FOREIGN_KEY_CHECKS=1 */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
