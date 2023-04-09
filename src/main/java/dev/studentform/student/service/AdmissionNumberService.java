package dev.studentform.student.service;

import org.springframework.stereotype.Service;

import java.util.concurrent.atomic.AtomicLong;

@Service
public class AdmissionNumberService {
    private static final String ADMISSION_NUMBER_PREFIX = "R-";
    private static final AtomicLong counter = new AtomicLong(1);

    public String generateAdmissionNumber() {
        long count = counter.getAndIncrement();
        String paddedCount = String.format("%03d", count);
        return ADMISSION_NUMBER_PREFIX + paddedCount;
    }
}

