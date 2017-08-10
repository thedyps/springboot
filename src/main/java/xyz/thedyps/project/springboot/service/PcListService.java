package xyz.thedyps.project.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xyz.thedyps.project.springboot.goods.PcFilterListDAO;
import xyz.thedyps.project.springboot.goods.goodsVO.PcFilterListVO;
import xyz.thedyps.project.springboot.goods.goodsVO.PcListVO;
import xyz.thedyps.project.springboot.goods.PcListDAO;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PcListService {

    @Autowired
    private PcListDAO pcListDAO;

    @Autowired
    private PcFilterListDAO pcFilterListDAO;

    public int getPcListCount(String pcType) {
        return pcListDAO.getPcListCount(pcType);
    }

    public List<PcListVO> getPcList(String pcType, int start, int end) {
        Map<String, Object> param = new HashMap<>();
        param.put("pcType",pcType);
        param.put("start", start);
        param.put("end", end);
        return pcListDAO.getPcList(param);
    }

    public PcFilterListVO getFilterList() {
        PcFilterListVO pcFilterListVO = new PcFilterListVO();
        pcFilterListVO.setFilterPcBrand(pcFilterListDAO.getFilterPcBrand());
        pcFilterListVO.setFilterCpuKind(pcFilterListDAO.getFilterCpuKind());
        pcFilterListVO.setFilterRamSpace(pcFilterListDAO.getFilterRamSpace());
        pcFilterListVO.setFilterGraKind(pcFilterListDAO.getFilterGraKind());
        pcFilterListVO.setFilterOsName(pcFilterListDAO.getFilterOsName());
        return pcFilterListVO;
    }
}
