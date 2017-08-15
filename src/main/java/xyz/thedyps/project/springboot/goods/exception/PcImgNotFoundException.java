package xyz.thedyps.project.springboot.goods.exception;

public class PcImgNotFoundException extends RuntimeException {
    private String pcCode;
    public PcImgNotFoundException(String pcType) {
        this.pcCode = pcType;
    }
    public String getPcCode() {
        return pcCode;
    }
}
