package dev.studentform.student.modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "new")

public class Student {

    @Transient
    public static final String SEQUENCE_NAME = "user_sequence";
    @Id
    private String id;
    private String name;
    private String dob;

    private String classSelected;

    private String divisionSelected;

    private String genderSelected;


}




