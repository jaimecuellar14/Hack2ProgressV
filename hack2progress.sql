-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 16-11-2019 a las 00:41:03
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hack2progress`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agricultor`
--

CREATE TABLE `agricultor` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cultivo_agricultor`
--

CREATE TABLE `cultivo_agricultor` (
  `id` int(11) UNSIGNED NOT NULL,
  `idAgricultor` int(11) NOT NULL,
  `nombre` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `x` double(10,3) NOT NULL,
  `y` double(10,3) NOT NULL,
  `idCultivo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cultivo_juego`
--

CREATE TABLE `cultivo_juego` (
  `id` int(11) NOT NULL,
  `idGrid` int(11) UNSIGNED NOT NULL,
  `x` double(10,3) NOT NULL,
  `y` double(10,3) NOT NULL,
  `plantado` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grid`
--

CREATE TABLE `grid` (
  `id` int(11) UNSIGNED NOT NULL,
  `nombre` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agricultor`
--
ALTER TABLE `agricultor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cultivo_agricultor`
--
ALTER TABLE `cultivo_agricultor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCultivo` (`idCultivo`),
  ADD KEY `idAgricultor` (`idAgricultor`);

--
-- Indices de la tabla `cultivo_juego`
--
ALTER TABLE `cultivo_juego`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idGrid` (`idGrid`);

--
-- Indices de la tabla `grid`
--
ALTER TABLE `grid`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agricultor`
--
ALTER TABLE `agricultor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cultivo_agricultor`
--
ALTER TABLE `cultivo_agricultor`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cultivo_juego`
--
ALTER TABLE `cultivo_juego`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `grid`
--
ALTER TABLE `grid`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cultivo_agricultor`
--
ALTER TABLE `cultivo_agricultor`
  ADD CONSTRAINT `agricultor` FOREIGN KEY (`idAgricultor`) REFERENCES `agricultor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cultivo` FOREIGN KEY (`idCultivo`) REFERENCES `cultivo_juego` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `cultivo_juego`
--
ALTER TABLE `cultivo_juego`
  ADD CONSTRAINT `grid` FOREIGN KEY (`idGrid`) REFERENCES `grid` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
