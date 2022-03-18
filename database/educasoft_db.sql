-- MySQL Script generated by MySQL Workbench
-- Tue Mar 15 07:33:17 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema educasoft
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema educasoft
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `educasoft` DEFAULT CHARACTER SET utf8 ;
USE `educasoft` ;

-- -----------------------------------------------------
-- Table `educasoft`.`cadastro_professor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `educasoft`.`cadastro_professor` (
  `controle_professor` INT NOT NULL,
  `nome_professor` VARCHAR(50) NOT NULL,
  `sobrenome_professor` VARCHAR(50) NULL,
  `dt_nascimento_professor` DATE NOT NULL,
  `dt_formacao_professor` DATE NOT NULL,
  `instituicao_formacao_professor` VARCHAR(100) NOT NULL,
  `tipo_perfil_professor` INT NOT NULL DEFAULT 1,
  `status_professor` INT NOT NULL,
  `email_professor` VARCHAR(200) NOT NULL,
  `senha_professor` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`controle_professor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `educasoft`.`cadastro_disciplina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `educasoft`.`cadastro_disciplina` (
  `controle_disciplina` INT NOT NULL,
  `nome_disciplina` VARCHAR(50) NOT NULL,
  `tipo_disciplina` INT NOT NULL,
  `status_disciplina` INT NOT NULL,
  PRIMARY KEY (`controle_disciplina`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `educasoft`.`cadastro_materia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `educasoft`.`cadastro_materia` (
  `controle_materia` INT NOT NULL,
  `controle_disciplina` INT NOT NULL,
  `nome_materia` VARCHAR(50) NOT NULL,
  `status_materia` INT NOT NULL,
  PRIMARY KEY (`controle_materia`),
  INDEX `controle_disciplina_idx` (`controle_disciplina` ASC) VISIBLE,
  CONSTRAINT `controle_disciplina_materia`
    FOREIGN KEY (`controle_disciplina`)
    REFERENCES `educasoft`.`cadastro_disciplina` (`controle_disciplina`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `educasoft`.`cadastro_perguntas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `educasoft`.`cadastro_perguntas` (
  `controle_perguntas` INT NOT NULL,
  `controle_disciplina` INT NOT NULL,
  `controle_materia` INT NOT NULL,
  `tipo_pergunta` INT NOT NULL,
  `enunciado_pergunta` BLOB NOT NULL,
  `resposta_objetiva_pergunta` CHAR(1) NULL,
  `dificuldade_pergunta` INT NOT NULL,
  `resposta_subjetiva_pergunta` BLOB NULL,
  `controle_professor` INT NOT NULL,
  `dt_cadastro_pergunta` DATE NOT NULL,
  `alternativa_a_pergunta` BLOB NULL,
  `alternativa_b_pergunta` BLOB NULL,
  `alternativa_c_pergunta` BLOB NULL,
  `alternativa_d_pergunta` BLOB NULL,
  `alternativa_e_pergunta` BLOB NULL,
  `status_pergunta` INT NOT NULL,
  PRIMARY KEY (`controle_perguntas`),
  INDEX `controle_disciplina_idx` (`controle_disciplina` ASC) VISIBLE,
  INDEX `controle_materia_idx` (`controle_materia` ASC) VISIBLE,
  INDEX `controle_professor_idx` (`controle_professor` ASC) VISIBLE,
  CONSTRAINT `controle_disciplina_pergunta`
    FOREIGN KEY (`controle_disciplina`)
    REFERENCES `educasoft`.`cadastro_disciplina` (`controle_disciplina`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `controle_materia_pergunta`
    FOREIGN KEY (`controle_materia`)
    REFERENCES `educasoft`.`cadastro_materia` (`controle_materia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `controle_professor_pergunta`
    FOREIGN KEY (`controle_professor`)
    REFERENCES `educasoft`.`cadastro_professor` (`controle_professor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `educasoft`.`cadastro_prova`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `educasoft`.`cadastro_prova` (
  `controle_prova` INT NOT NULL,
  `dt_realização_prova` DATE NULL,
  `controle_professor` INT NOT NULL,
  `dificuldade_prova` INT NOT NULL,
  `dt_cadastro_prova` DATE NOT NULL,
  `status_prova` INT NOT NULL,
  PRIMARY KEY (`controle_prova`),
  INDEX `controle_professor_idx` (`controle_professor` ASC) VISIBLE,
  CONSTRAINT `controle_professor_prova`
    FOREIGN KEY (`controle_professor`)
    REFERENCES `educasoft`.`cadastro_professor` (`controle_professor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `educasoft`.`perguntas_prova`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `educasoft`.`perguntas_prova` (
  `controle_perguntas_prova` INT NOT NULL,
  `controle_prova` INT NOT NULL,
  `controle_pegunta` INT NOT NULL,
  INDEX `controle_prova_idx` (`controle_prova` ASC) VISIBLE,
  INDEX `controle_perguntas_idx` (`controle_pegunta` ASC) VISIBLE,
  PRIMARY KEY (`controle_perguntas_prova`),
  CONSTRAINT `controle_prova_pp`
    FOREIGN KEY (`controle_prova`)
    REFERENCES `educasoft`.`cadastro_prova` (`controle_prova`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `controle_perguntas_pp`
    FOREIGN KEY (`controle_pegunta`)
    REFERENCES `educasoft`.`cadastro_perguntas` (`controle_perguntas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
