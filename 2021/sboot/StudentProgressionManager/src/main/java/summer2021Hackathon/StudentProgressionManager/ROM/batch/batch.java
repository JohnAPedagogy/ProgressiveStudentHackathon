package ROM.batch;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Batch {

    public Long getBatchID() {
        return BatchID;
    }
    public void setBatchID(Long batchID) {
        BatchID = batchID;
    }
    public String getTerm1StartDate() {
        return Term1StartDate;
    }
    public void setTerm1StartDate(String term1StartDate) {
        Term1StartDate = term1StartDate;
    }
    public String getTerm2StartDate() {
        return Term2StartDate;
    }
    public void setTerm2StartDate(String term2StartDate) {
        Term2StartDate = term2StartDate;
    }
    public String getMidTermDate() {
        return MidTermDate;
    }
    public void setMidTermDate(String midTermDate) {
        MidTermDate = midTermDate;
    }
    public String getEndTermDate() {
        return EndTermDate;
    }
    public void setEndTermDate(String endTermDate) {
        EndTermDate = endTermDate;
    }
    public String getEndBatchDate() {
        return EndBatchDate;
    }
    public void setEndBatchDate(String endBatchDate) {
        EndBatchDate = endBatchDate;
    }
    public String getIsActive() {
        return IsActive;
    }
    public void setIsActive(String isActive) {
        IsActive = isActive;
    }
    public String getBatchCode() {
        return BatchCode;
    }
    public void setBatchCode(String batchCode) {
        BatchCode = batchCode;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long BatchID;
    private String Term1StartDate;
    private String Term2StartDate;
    private String MidTermDate;
    private String EndTermDate;
    private String EndBatchDate;
    private String IsActive;
    private String BatchCode;
}
