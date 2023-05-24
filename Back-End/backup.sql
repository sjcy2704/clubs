-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: studentclubs
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `studentclubs`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `studentclubs` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `studentclubs`;

--
-- Table structure for table `ClubMembers`
--

DROP TABLE IF EXISTS `ClubMembers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ClubMembers` (
  `clubID` int unsigned NOT NULL,
  `userID` int unsigned NOT NULL,
  PRIMARY KEY (`clubID`,`userID`),
  KEY `userID` (`userID`),
  CONSTRAINT `ClubMembers_ibfk_1` FOREIGN KEY (`clubID`) REFERENCES `Clubs` (`clubID`),
  CONSTRAINT `ClubMembers_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `Users` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ClubMembers`
--

LOCK TABLES `ClubMembers` WRITE;
/*!40000 ALTER TABLE `ClubMembers` DISABLE KEYS */;
INSERT INTO `ClubMembers` VALUES (1,1),(2,2),(1,3),(2,3);
/*!40000 ALTER TABLE `ClubMembers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Clubs`
--

DROP TABLE IF EXISTS `Clubs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Clubs` (
  `clubID` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `short_name` varchar(20) NOT NULL,
  `category` varchar(50) NOT NULL,
  `description` text,
  `manager` int unsigned NOT NULL,
  `members` int unsigned DEFAULT '0',
  PRIMARY KEY (`clubID`),
  UNIQUE KEY `manager` (`manager`),
  CONSTRAINT `Clubs_ibfk_1` FOREIGN KEY (`manager`) REFERENCES `Users` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Clubs`
--

LOCK TABLES `Clubs` WRITE;
/*!40000 ALTER TABLE `Clubs` DISABLE KEYS */;
INSERT INTO `Clubs` VALUES (1,'Adelaide Uni Volleyball Club','AUVC','Sports',NULL,1,2),(2,'Engineering Club','ENG Club','Engineering',NULL,2,2),(3,'Medical Society','Med Society','Health',NULL,3,0),(4,'Computer Science Club','CS Club','Computer Science',NULL,4,0);
/*!40000 ALTER TABLE `Clubs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Events`
--

DROP TABLE IF EXISTS `Events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Events` (
  `eventID` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(65) NOT NULL,
  `description` varchar(300) NOT NULL,
  `datetime` timestamp NOT NULL,
  `rsvpLimit` int unsigned DEFAULT NULL,
  `clubID` int unsigned NOT NULL,
  PRIMARY KEY (`eventID`),
  KEY `clubID` (`clubID`),
  CONSTRAINT `Events_ibfk_1` FOREIGN KEY (`clubID`) REFERENCES `Clubs` (`clubID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Events`
--

LOCK TABLES `Events` WRITE;
/*!40000 ALTER TABLE `Events` DISABLE KEYS */;
/*!40000 ALTER TABLE `Events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `News`
--

DROP TABLE IF EXISTS `News`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `News` (
  `newsID` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(65) NOT NULL,
  `content` varchar(300) NOT NULL,
  `clubID` int unsigned NOT NULL,
  PRIMARY KEY (`newsID`),
  KEY `clubID` (`clubID`),
  CONSTRAINT `News_ibfk_1` FOREIGN KEY (`clubID`) REFERENCES `Clubs` (`clubID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `News`
--

LOCK TABLES `News` WRITE;
/*!40000 ALTER TABLE `News` DISABLE KEYS */;
/*!40000 ALTER TABLE `News` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `userID` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(25) NOT NULL,
  `password` varchar(70) NOT NULL,
  `email` varchar(63) NOT NULL,
  `firstName` varchar(63) NOT NULL,
  `familyName` varchar(63) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `userType` set('user','admin','manager') DEFAULT 'user',
  PRIMARY KEY (`userID`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'admin','$2a$10$EapMP7QBfQxsJtraAY8lT.BZLXIpC2VlOEN6YGNFu3CzTtfOPnHvi','admin@admin.com','admin','system',NULL,'admin'),(2,'manager1','$2a$10$wLViudQdkOrjouRaeCQuy.gT.e5TNdcRtk2absHgvNGGCpkgMN8PW','manager@clubs.com','Juan','Diaz',NULL,'manager'),(3,'manager2','$2a$10$kLT/ZlDELezE7R6kv4I0oe2nySil158GL6hsaC./Pdjg59zrpbfny','manager2@clubs.com','Duan','Jonson',NULL,'manager'),(4,'manager3','$2a$10$dNkyOBFy1xtcpH.3xd8LEuSoJ8dHohvpLIwrybPrReK7ACwKSZGAK','manager3@clubs.com','Jose','Andorra',NULL,'manager'),(5,'user1','$2a$10$tGrdFPRKUzpRwabT48ApNuMYrmcpAGO47nFeCvjdlLw7BsX3y7meK','user@user.com','Sarah','Swain',NULL,'user');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-24 16:18:42
