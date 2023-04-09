package dev.studentform.student.modal;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "studentmain")

public class Student {

    @Id
    private String id;
    private String name;
    private String dob;

    private String classSelected;

    private String divisionSelected;

    private String genderSelected;

    public void setId(String l) {
        this.id = l;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public void setClassSelected(String classSelected) {
        this.classSelected = classSelected;
    }

    public void setDivisionSelected(String divisionSelected) {
        this.divisionSelected = divisionSelected;
    }

    public void setGenderSelected(String genderSelected) {
        this.genderSelected = genderSelected;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDob() {
        return dob;
    }

    public String getClassSelected() {
        return classSelected;
    }

    public String getDivisionSelected() {
        return divisionSelected;
    }

    public String getGenderSelected() {
        return genderSelected;
    }
}




