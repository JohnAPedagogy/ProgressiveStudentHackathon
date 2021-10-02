package main.java.summer2021Hackathon.StudentProgressionManager.ROM.person;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long PersonID;

    private String LastName;
    private String Pathway;
    private String LoginRole;
    private String Position;
    private String BatchID;
    private String UniversityNumber;
    private String OtherNames;
    private String SGCode;

    public void setPersonID(Long personID) {
        PersonID = personID;
    }
    public void setLastName(String lastName) {
        LastName = lastName;
    }
    public void setPathway(String pathway) {
        Pathway = pathway;
    }
    public void setLoginRole(String loginRole) {
        LoginRole = loginRole;
    }
    public void setPosition(String position) {
        Position = position;
    }
    public void setBatchID(String batchID) {
        BatchID = batchID;
    }
    public void setUniversityNumber(String universityNumber) {
        UniversityNumber = universityNumber;
    }
    public void setOtherNames(String otherNames) {
        OtherNames = otherNames;
    }
    public void setSGCode(String SGCode) {
        this.SGCode = SGCode;
    }
    public void setGroupID(String groupID) {
        GroupID = groupID;
    }

    private String GroupID;

    public Long getPersonID() {
        return PersonID;
    }
    public String getLastName() {
        return LastName;
    }
    public String getPathway() {
        return Pathway;
    }
    public String getLoginRole() {
        return LoginRole;
    }
    public String getPosition() {
        return Position;
    }
    public String getBatchID() {
        return BatchID;
    }
    public String getUniversityNumber() {
        return UniversityNumber;
    }
    public String getOtherNames() {
        return OtherNames;
    }
    public String getSGCode() {
        return SGCode;
    }
    public String getGroupID() {
        return GroupID;
    }

}
