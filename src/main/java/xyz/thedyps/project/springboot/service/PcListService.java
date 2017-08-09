package xyz.thedyps.project.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xyz.thedyps.project.springboot.goods.PcFilterListVO;
import xyz.thedyps.project.springboot.goods.PcListVO;
import xyz.thedyps.project.springboot.mapper.PcListMapper;

import java.util.List;

@Service
public class PcListService implements PcListMapper {

    @Autowired
    private PcListMapper pcListMapper;

    @Override
    public int getPcListCount(String pcType) {
        return pcListMapper.getPcListCount(pcType);
    }

    @Override
    public List<PcListVO> getPcList(String pcType, int start, int end) {
        return pcListMapper.getPcList(pcType, start, end);
    }

    @Override
    public PcFilterListVO getPcFilterList() {
        return pcListMapper.getPcFilterList();
    }
}
