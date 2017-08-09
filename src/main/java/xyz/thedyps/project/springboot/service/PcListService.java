package xyz.thedyps.project.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xyz.thedyps.project.springboot.goods.PcListVO;
import xyz.thedyps.project.springboot.mapper.PcListMapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PcListService {

    @Autowired
    private PcListMapper pcListMapper;

    public int getPcListCount(String pcType) {
        return pcListMapper.getPcListCount(pcType);
    }

    public List<PcListVO> getPcList(String pcType, int start, int end) {
        Map<String, Object> param = new HashMap<>();
        param.put("pcType",pcType);
        param.put("start", start);
        param.put("end", end);
        return pcListMapper.getPcList(param);
    }
}
