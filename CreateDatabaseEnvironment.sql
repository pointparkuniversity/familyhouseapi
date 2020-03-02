use familyhouse_sandbox;

CREATE TABLE `events` (
  `eventid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `DateCategory` varchar(50) DEFAULT NULL,
  `Location` varchar(250) DEFAULT NULL,
  `Message` varchar(2000) DEFAULT NULL,
  `CreateDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`eventid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;


CREATE TABLE `linens` (
  `Linenid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `HouseName` varchar(50) NOT NULL,
  `RoomNumber` int(11) NOT NULL,
  `Guests` int(11) NOT NULL,
  `LinenType` varchar(25) NOT NULL,
  `CreateDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`Linenid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

CREATE TABLE `faq` (
  `faqid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Question` varchar(150) DEFAULT NULL,
  `Category` varchar(50) DEFAULT NULL,
  `Answer` varchar(2000) DEFAULT NULL,
  `CreateDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`faqid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
