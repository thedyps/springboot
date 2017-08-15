package xyz.thedyps.project.springboot.goods.exception;

public class PcSummaryNotFoundException extends RuntimeException {
    private String pcCode;

    public PcSummaryNotFoundException(String pcType) {
        this.pcCode = pcType;
    }

    public String getPcCode() {
        return pcCode;
    }
}
