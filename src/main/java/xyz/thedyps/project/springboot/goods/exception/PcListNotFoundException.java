package xyz.thedyps.project.springboot.goods.exception;

public class PcListNotFoundException extends RuntimeException {
    private String pcType;

    public PcListNotFoundException(String pcType) {
        this.pcType = pcType;
    }

    public String getPcType() {
        return pcType;
    }
}
